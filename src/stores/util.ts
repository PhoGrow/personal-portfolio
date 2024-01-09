import { defineStore } from 'pinia';
import { ref, watchEffect, toValue, type Ref } from 'vue';
import { useDark, useMediaQuery } from '@vueuse/core';
import MarkdownIt from 'markdown-it';

export const useUtilStore = defineStore('util', () => {
  const isCvVisible = ref(false);
  const isDark = useDark();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return { isCvVisible, isDark, isMobile };
});

export const useMdToHtml = (markdown: string | Ref<string>) => {
  const html = ref('');
  watchEffect(() => {
    const md = new MarkdownIt();
    html.value = md.render(toValue(markdown));
  });
  return { html };
};
