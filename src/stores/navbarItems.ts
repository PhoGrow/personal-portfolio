import { defineStore } from 'pinia';
import { useNameStore, usePersonalInfoStore, useDarkMode, store } from '.';
import { computed } from 'vue';

export const useNavbarItemsStore = defineStore('navbarItems', {
  state: () => {
    const { fullName } = useNameStore(store);
    const { info } = usePersonalInfoStore(store);
    const isDark = useDarkMode();

    return {
      navbarItems: [
        {
          link: {
            href: '#',
          },
          tooltip: {
            label: `That's me!`,
            position: 'right',
          },
          content: {
            src: 'favicon.png',
            alt: fullName,
            isRounded: true,
          },
        },
        {
          link: {
            href: 'https://github.com/PhoGrow/personal-portfolio',
          },
          tooltip: {
            label: 'Create your own portfolio site',
          },
          content: {
            src: 'logos/github.svg',
            alt: 'GitHub',
            isInverted: isDark,
          },
        },
        {
          link: {
            href: info.linkedIn,
          },
          tooltip: {
            label: 'Contact me!',
          },
          content: {
            src: 'logos/linkedin.svg',
            alt: 'LinkedIn',
          },
        },
        {
          tooltip: {
            label: computed(() => `${isDark.value ? 'Light' : 'Dark'} mode`),
          },
        },
      ] as NavbarItem[],
    };
  },
});

export interface NavbarItem {
  link?: Link;
  tooltip: Tooltip;
  content?: Image;
}

export interface Link {
  href: string;
  title?: string;
}

export interface Tooltip {
  label: string;
  position?: string;
  variant?: string;
  fontSize?: string;
  fontWeight?: number;
}

export interface Image {
  src: string;
  alt: string;
  isRounded?: boolean;
  isInverted?: boolean;
}
