<template>
  <MHero
    is-fullheight-with-navbar
    has-hero-header
    :has-horizontal-padding="false"
  >
    <template #header>
      <div class="container">
        <AColumns class="is-centered is-multiline">
          <AColumn class="is-9 my-6">
            <AColumns class="is-vcentered">
              <!-- Back to home -->
              <AColumn>
                <AButton
                  href="/"
                  :class="{ 'border-left-none': isMounted && isMobile }"
                >
                  <AIcon icon="west" size="medium" />
                  <span class="ml-1">Back to home</span>
                </AButton>
              </AColumn>
              <!-- Usage policy note -->
              <AColumn :class="['is-4', { 'mx-5': isMounted && isMobile }]">
                <p class="is-size-7">
                  Note: Please do not be surprised by slower interactions. This
                  site uses free services with terms of use.
                </p>
              </AColumn>
            </AColumns>
          </AColumn>
          <!-- Search -->
          <AColumn class="is-9">
            <MBoxWithTag title="Get your weather">
              <AColumns class="is-vcentered">
                <!-- Geolocation button -->
                <AColumn class="is-narrow">
                  <AButton class="is-fullwidth" @click="getWeatherDebounced()">
                    <AIcon icon="near_me" size="medium" />
                    <span class="ml-1">Use your location</span>
                  </AButton>
                </AColumn>
                <AColumn class="is-narrow has-text-centered">
                  <!-- <hr /> -->
                  <span class="heading mb-0">OR</span>
                </AColumn>
                <!-- Search bar -->
                <AColumn>
                  <AAutocomplete
                    v-bind="geolocation.search"
                    @input="getGeolocationViaSearch"
                    @select="getWeather"
                  >
                    <template #default="{ city, country }">
                      <AColumns class="is-mobile">
                        <AColumn class="has-text-weight-medium truncate">
                          {{ city }}
                        </AColumn>
                        <AColumn class="is-narrow has-text-grey">
                          {{ country }}
                        </AColumn>
                      </AColumns>
                    </template>
                    <template #empty>
                      <p class="is-flex is-align-items-center">
                        <AIcon icon="not_listed_location" size="medium" />
                        <span class="has-text-weight-medium ml-3">
                          No location found
                        </span>
                      </p>
                    </template>
                    <template #footer>
                      <hr class="dropdown-divider mt-0 mb-3" />
                      <p>
                        Search provided by
                        <ALink href="https://www.openstreetmap.org/copyright">
                          OpenStreetMap
                        </ALink>
                      </p>
                    </template>
                  </AAutocomplete>
                </AColumn>
              </AColumns>
            </MBoxWithTag>
          </AColumn>
          <!-- Notification (error) -->
          <ATransitionFade>
            <AColumn v-if="!!errorMessage" class="is-9">
              <MNotificationWithIcon variant="warning" icon="fmd_bad">
                {{ errorMessage }}
              </MNotificationWithIcon>
            </AColumn>
          </ATransitionFade>
        </AColumns>
      </div>
    </template>
    <!-- Weather -->
    <ATransitionFadeTranslate>
      <AColumns v-if="!Object.keys(weather.info).length" class="is-centered">
        <!-- Placeholder -->
        <AColumn class="is-9">
          <div class="box py-6 has-text-centered">
            <AColumns class="is-vcentered is-centered">
              <AColumn class="is-narrow">
                <AIcon
                  icon="not_listed_location"
                  :variant="!weather.isFetching ? 'grey' : 'transparent'"
                  :class="{ loader: weather.isFetching }"
                />
              </AColumn>
              <AColumn class="is-narrow">
                <p class="title is-1 text-balance has-text-grey">
                  Your weather could be right here
                </p>
              </AColumn>
            </AColumns>
          </div>
        </AColumn>
      </AColumns>
      <AColumns
        v-else
        :key="weather.info.nearestArea.areaName"
        class="is-centered is-multiline mt-2"
      >
        <!-- Current condition -->
        <AColumn class="is-4">
          <MBoxWithTag :title="weather.info.currentCondition.date">
            <AColumns class="is-vcentered is-mobile">
              <AColumn
                v-if="geolocation.api.type === 'coords'"
                class="is-narrow pr-0"
              >
                <AIcon icon="near_me" size="medium" />
              </AColumn>
              <AColumn>
                <p class="subtitle has-text-weight-medium mb-0">
                  {{ weather.info.nearestArea.areaName }}
                </p>
                <p class="heading mb-0">
                  {{ weather.info.nearestArea.country }}
                </p>
              </AColumn>
              <AColumn class="is-narrow">
                <p>
                  <span class="subtitle has-text-weight-medium">
                    {{ weather.info.weather[0]?.maxtempC }}°C
                  </span>
                  <span class="has-text-grey">
                    {{ weather.info.weather[0]?.mintempC }}°C
                  </span>
                </p>
              </AColumn>
            </AColumns>
            <AColumns class="is-vcentered is-mobile">
              <AColumn>
                <AFigure class="is-square">
                  <AImage
                    :src="`illustrations/weather/${weather.info.currentCondition.weatherImg}.svg`"
                    :alt="weather.info.currentCondition.langLocale"
                  />
                </AFigure>
              </AColumn>
              <AColumn>
                <p class="title is-1">
                  {{ weather.info.currentCondition.tempC }}°C
                </p>
                <p class="subtitle">
                  {{ weather.info.currentCondition.langLocale }}
                </p>
              </AColumn>
            </AColumns>
          </MBoxWithTag>
        </AColumn>
        <AColumn class="is-narrow"></AColumn>
        <!-- Today -->
        <AColumn class="is-5">
          <MBoxWithTag :title="weather.info.weather[0]!.date">
            <AColumns class="is-vcentered is-mobile has-text-centered h-full">
              <AColumn
                v-for="nextWeather of pickNextHourlyWeather"
                :key="nextWeather.time"
              >
                <p class="has-text-grey block">{{ nextWeather.time }}</p>
                <AFigure class="is-square block">
                  <AImage
                    :src="`illustrations/weather/${nextWeather.weatherImg}.svg`"
                    :alt="
                      nextWeather.type === 'weather'
                        ? nextWeather.langLocale
                        : nextWeather.weatherImg
                    "
                  />
                </AFigure>
                <p v-if="nextWeather.type === 'weather'" class="subtitle">
                  {{ nextWeather.tempC }}°C
                </p>
                <p v-else class="subtitle has-text-grey">
                  {{ nextWeather.weatherImg }}
                </p>
              </AColumn>
            </AColumns>
          </MBoxWithTag>
        </AColumn>
        <AColumn class="is-12"></AColumn>
        <!-- Next two days -->
        <template v-for="(w, i) of weather.info.weather.slice(1)" :key="w.date">
          <AColumn :class="`is-${!i ? 5 : 4}`">
            <MBoxWithTag :title="w.date">
              <AColumns
                class="is-vcentered is-mobile is-multiline has-text-centered"
              >
                <AColumn class="is-12">
                  <AColumns class="is-vcentered is-mobile">
                    <AColumn class="is-narrow"></AColumn>
                    <AColumn class="is-narrow">
                      <AFigure class="is-64x64">
                        <AImage
                          src="illustrations/weather/Celsius.svg"
                          alt="Celsius"
                          :is-inverted="isDark"
                        />
                      </AFigure>
                      <p>
                        <span class="subtitle has-text-weight-medium">
                          {{ w.maxtempC }}°
                        </span>
                        <span class="has-text-grey">{{ w.mintempC }}°</span>
                      </p>
                    </AColumn>
                    <AColumn></AColumn>
                    <AColumn
                      v-for="a of [w.astronomy.sunrise, w.astronomy.sunset]"
                      :key="a.time"
                      class="is-narrow"
                    >
                      <AFigure class="is-64x64">
                        <AImage
                          :src="`illustrations/weather/${a.weatherImg}.svg`"
                          :alt="a.weatherImg"
                        />
                      </AFigure>
                      <p class="has-text-grey">{{ a.time }}</p>
                    </AColumn>
                    <AColumn class="is-narrow"></AColumn>
                  </AColumns>
                </AColumn>
                <AColumn class="is-12"></AColumn>
                <template v-for="(h, j) of w.hourly" :key="h.time">
                  <AColumn class="is-3">
                    <p class="has-text-grey mb-3">{{ h.time }}</p>
                    <AFigure class="is-square mb-3">
                      <AImage
                        :src="`illustrations/weather/${h.weatherImg}.svg`"
                        :alt="h.langLocale"
                      />
                    </AFigure>
                    <p class="subtitle">{{ h.tempC }}°C</p>
                  </AColumn>
                  <AColumn
                    v-if="j === w.hourly.length / 2 - 1"
                    class="is-12"
                  ></AColumn>
                </template>
                <AColumn v-if="!!i">
                  <hr class="dropdown-divider mt-0 mb-3" />
                  <p class="has-text-grey is-size-7">
                    Weather provided by
                    <ALink href="https://wttr.in">wttr.in</ALink> • Weather
                    icons created by
                    <ALink href="https://bas.dev">Bas Milius</ALink>
                  </p>
                </AColumn>
              </AColumns>
            </MBoxWithTag>
          </AColumn>
          <AColumn v-if="!i" class="is-narrow"></AColumn>
        </template>
      </AColumns>
    </ATransitionFadeTranslate>
  </MHero>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import MHero from '@molecules/MHero.vue';
import MBoxWithTag from '@molecules/MBoxWithTag.vue';
import MNotificationWithIcon from '@molecules/MNotificationWithIcon.vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import AButton from '@atoms/AButton.vue';
import AIcon from '@atoms/AIcon.vue';
import AAutocomplete from '@atoms/AAutocomplete.vue';
import ALink from '@atoms/ALink.vue';
import AFigure from '@atoms/AFigure.vue';
import AImage from '@atoms/AImage.vue';
import ATransitionFade from '@atoms/ATransitionFade.vue';
import ATransitionFadeTranslate from '@atoms/ATransitionFadeTranslate.vue';
import { useWeatherStore, useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';
import { useMounted, useDebounceFn } from '@vueuse/core';

const weatherStore = useWeatherStore(store);
const { geolocation, weather, errorMessage, pickNextHourlyWeather } =
  storeToRefs(weatherStore);
const { init, getGeolocationViaSearch, getWeather } = weatherStore;
const { isDark, isMobile } = storeToRefs(useUtilStore(store));

const isMounted = useMounted();
const getWeatherDebounced = useDebounceFn(getWeather, 1000);
const initDebounced = useDebounceFn(init, 1000);

onMounted(initDebounced);
</script>

<style scoped></style>
