import { defineStore } from 'pinia';
import { useDark, useMediaQuery } from '@vueuse/core';
import { ref, watchEffect, toValue, type Ref } from 'vue';
import MarkdownIt from 'markdown-it';

export const useUtilStore = defineStore('util', {
  state: () => ({
    isCvVisible: false,
    isDark: useDark(),
    isMobile: useMediaQuery('(max-width: 768px)'),
  }),
});

export const useMdToHtml = (markdown: string | Ref<string>) => {
  const html = ref('');
  watchEffect(() => {
    const md = new MarkdownIt();
    html.value = md.render(toValue(markdown));
  });
  return { html };
};
