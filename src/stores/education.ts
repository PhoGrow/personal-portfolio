import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useEducationStore = defineStore('education', () => {
  const education = ref<Education[]>([
    {
      topic: 'Master studies',
      period: [2020, 2022],
      location: ['Cologne', 'Germany'],
      degree: ['M.Sc.', 'Media Technology'],
      gpa: 1.2,
      university: 'TH Köln – University of Applied Sciences',
      activities: [
        {
          name: 'Achievement',
          descriptionInMd: `Participation in the first round of the entrepreneurship program [KickStart@TH Köln](https://www.th-koeln.de/forschung/kickstartth-koeln_77116.php) in 2021 to fund the master's project PhoGrow`,
        },
        {
          name: 'Thesis title',
          descriptionInMd:
            'A survey on NFT development with EVM-compatible DLT/L2 and use cases for NFTs in the digital and real world',
        },
        {
          name: 'Main areas of study',
          descriptionInMd:
            'Interactive media applications, audiovisual media technologies and systems, and imaging technology',
        },
      ],
    },
    {
      topic: 'Bachelor studies',
      period: [2015, 2020],
      location: ['Cologne', 'Germany'],
      degree: ['B.Sc.', 'Media Technology'],
      gpa: 1.9,
      university: 'TH Köln – University of Applied Sciences',
      activities: [
        {
          name: 'Thesis title',
          descriptionInMd:
            'Implementation of an arpeggiator through a web application – functionality and user interface',
        },
        {
          name: 'Main areas of study',
          descriptionInMd:
            'Web engineering, media transmission/display technology, production technology for audiovisual media, and image processing',
        },
        {
          name: 'Internship',
          descriptionInMd: `Technical acoustician at IST Ingenieurbüro Stöcker (Burscheid, Germany) from 10/2019 – 12/2019`,
        },
      ],
    },
  ]);

  return { education };
});

export type Education = {
  topic: string;
  period: [start: number, end: number];
  location: [city: string, country: string];
  degree: [graduation: string, study: string];
  gpa: number;
  university: string;
  activities: {
    name: string;
    descriptionInMd: string;
  }[];
};
