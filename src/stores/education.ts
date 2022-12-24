import { defineStore } from 'pinia';
import type { Education } from '@/types';

export const useEducationStore = defineStore({
  id: 'education',
  state: () => ({
    title: 'Education',
    education: [
      {
        period: '2020 – 2022',
        location: 'Cologne, Germany',
        degree: 'M.Sc. Media Technology',
        gpa: 'Ø1.2',
        university: 'TH Köln – University of Applied Sciences',
        activities: [
          {
            property: 'Achievement',
            description: `Participation in the first round of the entrepreneurship program KickStart@TH Köln in 2021 to fund the master's project PhoGrow and continue development for founding in 2023`,
            linkage: {
              title: 'KickStart@TH Köln',
              href: 'https://www.th-koeln.de/forschung/kickstartth-koeln_77116.php',
            },
          },
          {
            property: 'Thesis title',
            description:
              'A survey on NFT development with EVM-compatible DLT/L2 and use cases for NFTs in the digital and real world',
          },
          {
            property: 'Main areas of study',
            description:
              'Interactive media applications, audiovisual media technologies and systems, and imaging technology',
          },
        ],
      },
      {
        period: '2015 – 2020',
        location: 'Cologne, Germany',
        degree: 'B.Sc. Media Technology',
        gpa: 'Ø1.9',
        university: 'TH Köln – University of Applied Sciences',
        activities: [
          {
            property: 'Thesis title',
            description:
              'Implementation of an arpeggiator through a web application – functionality and user interface',
          },
          {
            property: 'Main areas of study',
            description:
              'Web engineering, media transmission/display technology, production technology for audiovisual media, and image processing',
          },
          {
            property: 'Internship ',
            description: `Acoustics engineering office at IST Ingenieurbüro Stöcker (Burscheid, Germany) from 10/2019 – 12/2019`,
          },
        ],
      },
    ] as Education[],
  }),
  getters: {},
  actions: {},
});
