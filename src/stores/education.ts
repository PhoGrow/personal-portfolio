import { defineStore } from 'pinia';
import { useMarkdownToHtml } from '.';

export const useEducationStore = defineStore('education', {
  state: (): Education[] => [
    {
      topic: 'Master studies',
      period: '2020 – 2022',
      location: 'Cologne, Germany',
      degree: 'M.Sc. Media Technology',
      gpa: 'Ø1.2',
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
      period: '2015 – 2020',
      location: 'Cologne, Germany',
      degree: 'B.Sc. Media Technology',
      gpa: 'Ø1.9',
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
  ],
  getters: {
    descriptionInHtml: () => {
      return (descriptionInMd: string) => {
        const { html } = useMarkdownToHtml(descriptionInMd);
        return html;
      };
    },
  },
});

export interface Education {
  topic: string;
  period: string;
  location: string;
  degree: string;
  gpa: string;
  university: string;
  activities: {
    name: string;
    descriptionInMd: string;
  }[];
}
