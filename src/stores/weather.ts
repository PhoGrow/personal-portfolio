import { defineStore } from 'pinia';
import { ofetch, type FetchError } from 'ofetch';
import { useFetch, useStorage, useGeolocation } from '@vueuse/core';
import { watchEffect } from 'vue';

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    geolocation: {
      api: {} as
        | { type: 'coords'; coords: GeolocationCoordinates }
        | { type: 'error'; error: GeolocationPositionError },
      search: {
        isFetching: false,
        hasFetchingError: false,
        placeholder: 'Search for your desired location',
        data: [] as AdjSearchApiResponse[],
        field: 'displayName' as keyof AdjSearchApiResponse,
        debounceTimeInMs: 1000,
      },
      lastCoords: useStorage(
        'geolocation-last-coords',
        {} as GeolocationCoords,
      ),
    },
    weather: {
      isFetching: false,
      hasFetchingError: false,
      info: {} as AdjWeatherApiResponse,
    },
  }),
  // hydrate(state) {
  //   state.geolocation.lastCoords = useStorage(
  //     'geolocation-last-coords',
  //     {} as GeolocationCoords,
  //   ).value;
  // },
  getters: {
    errorMessage(state): string | void {
      if (state.weather.hasFetchingError) {
        return 'Sorry, the weather service is currently unavailable';
      } else if (state.geolocation.search.hasFetchingError) {
        return 'Sorry, the search service is currently unavailable';
      } else if (state.geolocation.api.type === 'error') {
        if (!state.geolocation.search.hasFetchingError) {
          return 'Please use the search bar';
        } else {
          return 'Sorry, the search options are currently unavailable';
        }
      }
    },
    pickNextHourlyWeather: (
      state,
    ): (
      | (HourlyWeather[number] & { type: 'weather' })
      | (Pick<HourlyWeather[number], 'date' | 'time' | 'weatherImg'> & {
          type: 'sunTimes';
        })
    )[] => {
      const sortArrayByDate = (
        hourlyWeather: HourlyWeather,
        sunrise: (typeof state.weather.info.weather)[number]['astronomy']['sunrise'],
        sunset: (typeof state.weather.info.weather)[number]['astronomy']['sunset'],
      ) => {
        return [
          ...hourlyWeather.map((h) => ({ ...h, type: 'weather' as const })),
          { ...sunrise, type: 'sunTimes' as const },
          { ...sunset, type: 'sunTimes' as const },
        ].toSorted((a, b) => a.date - b.date);
      };

      let hourlyWeatherWithSunTimes = sortArrayByDate(
        state.weather.info.weather[0]!.hourly,
        state.weather.info.weather[0]!.astronomy.sunrise,
        state.weather.info.weather[0]!.astronomy.sunset,
      );

      const currentDate = new Date();
      const currentIndex = hourlyWeatherWithSunTimes.findIndex(
        ({ date }) => date > currentDate.getTime(),
      );
      const isSunTimeFirst =
        hourlyWeatherWithSunTimes[currentIndex - 1]!.type === 'sunTimes';
      const limit = 4;
      const nextHourlyWeather = hourlyWeatherWithSunTimes.slice(
        currentIndex - (isSunTimeFirst ? 2 : 1),
        currentIndex - (isSunTimeFirst ? 2 : 1) + limit,
      );

      hourlyWeatherWithSunTimes = sortArrayByDate(
        state.weather.info.weather[1]!.hourly,
        state.weather.info.weather[1]!.astronomy.sunrise,
        state.weather.info.weather[1]!.astronomy.sunset,
      );

      nextHourlyWeather.push(
        ...hourlyWeatherWithSunTimes.slice(0, limit - nextHourlyWeather.length),
      );
      return nextHourlyWeather;
    },
  },
  actions: {
    async init(): Promise<void> {
      const checkAllServiceAvailabilities = async (): Promise<void> => {
        const checkServiceAvailability = async ({
          url,
          serviceType,
          httpMethod,
        }: Services): Promise<void> => {
          const { error } = await useFetch(
            url,
            { method: httpMethod || 'HEAD' },
            { timeout: 3000 },
          );

          serviceType === 'search'
            ? (this.geolocation[serviceType].hasFetchingError =
                error.value !== null)
            : (this[serviceType].hasFetchingError = error.value !== null);
        };

        const services: Services[] = [
          {
            url: 'https://nominatim.openstreetmap.org/status',
            serviceType: 'search',
            httpMethod: 'GET',
          },
          { url: 'https://wttr.in', serviceType: 'weather' },
        ];

        await Promise.all(
          services.map((service) => checkServiceAvailability(service)),
        );

        type Services = {
          url: string;
          serviceType: ServiceTypeKeys;
          httpMethod?: string;
        };
        type ServiceTypeKeys = keyof (Omit<typeof this.$state, 'geolocation'> &
          Pick<typeof this.$state.geolocation, 'search'>);
      };
      const hasLocalStorageCoords = (): boolean => {
        return 'latitude' in this.geolocation.lastCoords &&
          'longitude' in this.geolocation.lastCoords
          ? true
          : false;
      };

      await checkAllServiceAvailabilities();
      if (!this.weather.hasFetchingError && hasLocalStorageCoords()) {
        await this.getWeather(this.geolocation.lastCoords);
      }
    },
    async getGeolocationViaSearch(
      searchParam: string,
      numOfResults = 5,
    ): Promise<void> {
      if (!searchParam) {
        this.geolocation.search.data = [];
        return;
      }
      try {
        this.geolocation.search.isFetching = true;
        const res = await ofetch<SearchApiResponse[]>('/search', {
          baseURL: 'https://nominatim.openstreetmap.org',
          query: {
            q: searchParam,
            format: 'jsonv2',
            limit: numOfResults,
          },
          timeout: 3000,
        });
        this.geolocation.search.hasFetchingError = false;
        this.geolocation.search.data = res.map((geolocation) => {
          const { lat, lon, display_name } = geolocation;
          const [latitude, longitude] = [parseFloat(lat), parseFloat(lon)];
          const splitDisplayName = display_name.split(', ');
          const city = splitDisplayName.at(0)!;
          const country = splitDisplayName.at(-1)!;
          const displayName = `${city}, ${country}`;
          return { latitude, longitude, displayName, city, country };
        });
      } catch (error) {
        console.error((error as FetchError).message);
        this.geolocation.search.hasFetchingError = true;
      } finally {
        this.geolocation.search.isFetching = false;
      }
    },
    async getWeather(coords?: AdjSearchApiResponse | GeolocationCoords) {
      const getGeolocationViaApi = (): Promise<GeolocationCoords> => {
        return new Promise((resolve, reject) => {
          const { coords, error, pause } = useGeolocation();

          const unwatchGeolocation = watchEffect(() => {
            // Initial values of useGeolocation
            const hasCoords =
              coords.value.latitude !== Number.POSITIVE_INFINITY &&
              coords.value.longitude !== Number.POSITIVE_INFINITY;
            const hasError = Boolean(error.value?.code);

            if (hasCoords || hasError) {
              pause();
              unwatchGeolocation();
            }

            if (hasCoords) {
              this.geolocation.api = {
                type: 'coords',
                coords: coords.value,
              };
              resolve(coords.value);
            } else if (hasError) {
              this.geolocation.api = {
                type: 'error',
                error: error.value!,
              };
              reject(error.value);
            }
          });
        });
      };
      const setLastGeolocationCoords = (coords: GeolocationCoords): void => {
        // Properties have to be set one-by-one (useStorage)
        for (const key in coords) {
          const value = coords[key as keyof GeolocationCoords];
          this.geolocation.lastCoords[key as keyof GeolocationCoords] = value;
        }
      };

      if (!coords) {
        try {
          coords = await getGeolocationViaApi();
        } catch (error) {
          console.error((error as GeolocationPositionError).message);
          return;
        }
      }

      const lat = parseFloat(coords.latitude.toFixed(2));
      const lon = parseFloat(coords.longitude.toFixed(2));
      setLastGeolocationCoords({ latitude: lat, longitude: lon });
      const address = {} as ReverseSearchApiResponse['address'];
      this.weather.isFetching = true;

      if (!('city' in coords && 'country' in coords)) {
        try {
          const res = await ofetch<ReverseSearchApiResponse>('/reverse', {
            baseURL: 'https://nominatim.openstreetmap.org',
            query: {
              lat,
              lon,
              format: 'jsonv2',
            },
            timeout: 3000,
          });
          address.city = res.address.city || '';
          address.country = res.address.country;
        } catch (error) {
          console.error((error as FetchError).message);
        }
      }

      try {
        const res = await ofetch<WeatherApiResponse>(`/${lat},${lon}`, {
          baseURL: 'https://wttr.in',
          query: {
            format: 'j1',
          },
          timeout: 3000,
        });
        this.weather.hasFetchingError = false;

        const setWeatherImg = (
          weatherCode: keyof typeof WWO_CODE,
          date: string,
          time: string,
          sunrise: string,
          sunset: string,
        ): string => {
          const weatherNeedsPostfix = [
            'LightShowers',
            'LightSleetShowers',
            'LightSnowShowers',
            'PartlyCloudy',
            'Sunny',
          ];
          let weather = WWO_CODE[weatherCode];
          if (weatherNeedsPostfix.includes(weather)) {
            const dateTime = new Date(`${date} ${time}`);
            const dateSunrise = new Date(`${date} ${sunrise}`);
            const dateSunset = new Date(`${date} ${sunset}`);
            weather +=
              dateTime.getTime() > dateSunrise.getTime() &&
              dateTime.getTime() < dateSunset.getTime()
                ? 'Day'
                : 'Night';
          }
          return weather;
        };
        const relativeTimeFormatter = new Intl.RelativeTimeFormat(
          navigator.language,
          { numeric: 'auto' },
        );

        const nearestArea = res.nearest_area[0];
        const currentCondition = res.current_condition[0];

        this.weather.info = {
          nearestArea: {
            areaName:
              (coords as AdjSearchApiResponse).city ||
              address.city ||
              nearestArea.areaName[0].value,
            country:
              (coords as AdjSearchApiResponse).country || address.country,
            region: nearestArea.region[0].value,
          },
          currentCondition: {
            weatherImg: setWeatherImg(
              currentCondition.weatherCode,
              currentCondition.localObsDateTime.split(' ')[0]!,
              currentCondition.localObsDateTime.split(' ').slice(-2).join(' '),
              res.weather[0]!.astronomy[0].sunrise,
              res.weather[0]!.astronomy[0].sunset,
            ),
            tempC: parseInt(currentCondition.temp_C),
            langLocale:
              currentCondition[`lang_${navigator.language.split('-')[0]}`]![0]
                .value,
            weatherDesc: currentCondition.weatherDesc[0].value,
            date: relativeTimeFormatter.format(0, 'second'),
            uvIndex: parseInt(currentCondition.uvIndex),
            windspeedKmph: parseInt(currentCondition.windspeedKmph),
            humidity: parseInt(currentCondition.humidity),
          },
          weather: res.weather.map((w, i) => {
            const toTime = (time: string): string => {
              return time !== '0'
                ? `${time.slice(0, -2)}:${time.slice(-2)}`
                : '0:00';
            };
            const toLocaleTime = (date: string, time: string): string => {
              return new Date(`${date} ${time}`).toLocaleTimeString(
                navigator.language,
                { timeStyle: 'short' },
              );
            };
            const { astronomy, hourly } = w;

            return {
              maxtempC: parseInt(w.maxtempC),
              mintempC: parseInt(w.mintempC),
              uvIndex: parseInt(w.uvIndex),
              totalSnow_cm: parseInt(w.totalSnow_cm),
              sunHour: parseInt(w.sunHour),
              date: relativeTimeFormatter.format(i, 'day'),
              avgtempC: parseInt(w.avgtempC),
              astronomy: {
                sunrise: {
                  date: new Date(`${w.date} ${astronomy[0].sunrise}`).getTime(),
                  time: toLocaleTime(w.date, w.astronomy[0].sunrise),
                  weatherImg: 'Sunrise' as const,
                },
                sunset: {
                  date: new Date(`${w.date} ${astronomy[0].sunset}`).getTime(),
                  time: toLocaleTime(w.date, w.astronomy[0].sunset),
                  weatherImg: 'Sunset' as const,
                },
                moonIllumination: parseInt(astronomy[0].moon_illumination),
                moonPhase: astronomy[0].moon_phase,
              },
              hourly: hourly.map((h) => ({
                date: new Date(`${w.date} ${toTime(h.time)}`).getTime(),
                time: toLocaleTime(w.date, toTime(h.time)),
                weatherImg: setWeatherImg(
                  h.weatherCode,
                  w.date,
                  toTime(h.time),
                  astronomy[0].sunrise,
                  astronomy[0].sunset,
                ),
                tempC: parseInt(h.tempC),
                uvIndex: parseInt(h.uvIndex),
                windspeedKmph: parseInt(h.windspeedKmph),
                humidity: parseInt(h.humidity),
                langLocale:
                  h[`lang_${navigator.language.split('-')[0]}`]![0].value,
                weatherDesc: h.weatherDesc[0].value,
              })),
            };
          }),
        };
      } catch (error) {
        console.error((error as FetchError).message);
        this.weather.hasFetchingError = true;
      } finally {
        this.weather.isFetching = false;
      }
    },
  },
});

type GeolocationCoords = Pick<
  Writeable<GeolocationCoordinates>,
  'latitude' | 'longitude'
>;

type SearchApiResponse = {
  lat: string;
  lon: string;
  display_name: string;
};

type AdjSearchApiResponse = {
  latitude: number;
  longitude: number;
  displayName: string;
  city: string;
  country: string;
};

type ReverseSearchApiResponse = {
  address: {
    city?: string;
    country: string;
  };
};

type WeatherApiResponse = {
  nearest_area: [
    {
      areaName: [{ value: string }]; // Vanves
      country: [{ value: string }]; // France
      region: [{ value: string }]; // Ile-de-France
    },
  ];
  current_condition: [
    {
      weatherCode: keyof typeof WWO_CODE; // 296
      temp_C: string; // 8
      [lang_locale: `lang_${string}`]: [{ value: string }]; // Leichter Regen
      weatherDesc: [{ value: string }]; // Light rain shower
      uvIndex: string; // 1
      windspeedKmph: string; // 19
      humidity: string; // 100
      localObsDateTime: string; // 2023-12-26 04:26 PM
    },
  ];
  // today + 2 days
  weather: Array<{
    maxtempC: string; // 8
    mintempC: string; // 5
    uvIndex: string; // 2
    totalSnow_cm: string; // 0.0
    sunHour: string; // 7.3
    date: string; // 2023-11-27
    avgtempC: string; // 7
    astronomy: [
      {
        sunrise: string; // 08:17 AM
        sunset: string; // 04:59 PM
        moon_illumination: string; // 100
        moon_phase: string; // Full Moon
      },
    ];
    // 3h cycle
    hourly: Array<{
      time: string; // 0, 300, 600, ...
      weatherCode: keyof typeof WWO_CODE; // 119
      tempC: string; // 6
      uvIndex: string; // 1
      windspeedKmph: string; // 15
      humidity: string; // 67
      [lang_locale: `lang_${string}`]: [{ value: string }]; // Wolkig
      weatherDesc: [{ value: string }]; // Cloudy
    }>;
  }>;
};

type AdjWeatherApiResponse = {
  nearestArea: {
    areaName: string; // Vanves
    country: string; // France
    region: string; // Ile-de-France
  };
  currentCondition: {
    weatherImg: string; // LightRain (296)
    tempC: number; // 8
    langLocale: string; // Leichter Regen
    weatherDesc: string; // Light rain shower
    date: string; // now (Intl)
    uvIndex: number; // 1
    windspeedKmph: number; // 19
    humidity: number; // 100
  };
  // today + 2 days
  weather: Array<{
    maxtempC: number; // 8
    mintempC: number; // 5
    uvIndex: number; // 2
    totalSnow_cm: number; // 0.0
    sunHour: number; // 7.3
    date: string; // today, tomorrow, ... (Intl)
    avgtempC: number; // 7
    astronomy: {
      sunrise: {
        date: number; // getTime() of Date
        time: string; // (Intl)
        weatherImg: 'Sunrise'; // Sunrise
      };
      sunset: {
        date: number; // getTime() of Date
        time: string; // (Intl)
        weatherImg: 'Sunset'; // Sunset
      };
      moonIllumination: number; // 100
      moonPhase: string; // Full Moon
    };
    // 3h cycle
    hourly: Array<{
      date: number; // getTime() of Date
      time: string; // 0, 3:00, 6:00, ... (Intl)
      weatherImg: string; // Cloudy (119)
      tempC: number; // 6
      uvIndex: number; // 1
      windspeedKmph: number; // 15
      humidity: number; // 67
      langLocale: string; // Wolkig
      weatherDesc: string; // Cloudy
    }>;
  }>;
};

type HourlyWeather = AdjWeatherApiResponse['weather'][number]['hourly'];

type Writeable<T> = {
  -readonly [P in keyof T]: T[P];
};

const WWO_CODE = {
  '113': 'Sunny',
  '116': 'PartlyCloudy',
  '119': 'Cloudy',
  '122': 'VeryCloudy',
  '143': 'Fog',
  '176': 'LightShowers',
  '179': 'LightSleetShowers',
  '182': 'LightSleet',
  '185': 'LightSleet',
  '200': 'ThunderyShowers',
  '227': 'LightSnow',
  '230': 'HeavySnow',
  '248': 'Fog',
  '260': 'Fog',
  '263': 'LightShowers',
  '266': 'LightRain',
  '281': 'LightSleet',
  '284': 'LightSleet',
  '293': 'LightRain',
  '296': 'LightRain',
  '299': 'HeavyShowers',
  '302': 'HeavyRain',
  '305': 'HeavyShowers',
  '308': 'HeavyRain',
  '311': 'LightSleet',
  '314': 'LightSleet',
  '317': 'LightSleet',
  '320': 'LightSnow',
  '323': 'LightSnowShowers',
  '326': 'LightSnowShowers',
  '329': 'HeavySnow',
  '332': 'HeavySnow',
  '335': 'HeavySnowShowers',
  '338': 'HeavySnow',
  '350': 'LightSleet',
  '353': 'LightShowers',
  '356': 'HeavyShowers',
  '359': 'HeavyRain',
  '362': 'LightSleetShowers',
  '365': 'LightSleetShowers',
  '368': 'LightSnowShowers',
  '371': 'HeavySnowShowers',
  '374': 'LightSleetShowers',
  '377': 'LightSleet',
  '386': 'ThunderyShowers',
  '389': 'ThunderyHeavyRain',
  '392': 'ThunderySnowShowers',
  '395': 'HeavySnowShowers',
} as const;
