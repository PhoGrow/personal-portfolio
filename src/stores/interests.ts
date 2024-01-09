import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInterestsStore = defineStore('interests', () => {
  const interests = ref<Interest[]>([
    {
      icon: 'music_note',
      topic: 'Music',
      title: 'Future bass boi',
      description: `After listening to hardstyle for over a decade, I found the genre lacking in melody and originality.
      As a result, I decided to incorporate lighter music into my work and began exploring the unique sounds of many artists in different bass genres.`,
    },
    {
      icon: 'savings',
      topic: 'Finance',
      title: 'For the long term',
      description: `In 2021, a close friend introduced me to the world of finance. I never expected to be completely immersed.
      Years later, I know a lot of the fundamentals and have skin in the game. But wait: time in the market beats timing the market. NFA`,
    },
    {
      icon: 'book',
      topic: 'Philosophy',
      title: 'Wannabe stoic',
      description: `Ever heard of memento mori? Get started with Stoicism, a philosophy with powerful principles that everyone can benefit from.
      I was introduced to Stoicism through the work of Ryan Holiday and was exposed to figures like Marcus Aurelius, etc.`,
    },
  ]);

  return { interests };
});

export type Interest = {
  icon: string;
  topic: string;
  title: string;
  description: string;
};
