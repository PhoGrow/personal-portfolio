import {
  createSharedComposable,
  useMediaQuery,
  useDark,
  createGlobalState,
} from '@vueuse/core';
import { ref, watchEffect, toValue, type Ref } from 'vue';
import { useProgrammatic } from '@oruga-ui/oruga-next';
import ONotification from '@organisms/ONotification.vue';
import MarkdownIt from 'markdown-it';

export const useMobileBreakpoint = createSharedComposable(() =>
  useMediaQuery('(max-width: 768px)'),
);

export const useDarkMode = createSharedComposable(useDark);

export const useGlobalState = createGlobalState(() => {
  const isCvVisible = ref(false);
  const cvId = ref('cv');
  return { isCvVisible, cvId };
});

export const useToast = () => {
  const { oruga } = useProgrammatic();
  const isDark = useDarkMode();
  oruga.notification.open({
    duration: 4000,
    component: ONotification,
    position: 'bottom',
    variant: isDark.value ? 'secondary' : 'dark',
  });
};

export const useMdToHtml = (markdown: string | Ref<string>) => {
  const html = ref('');
  watchEffect(() => {
    const md = new MarkdownIt();
    html.value = md.render(toValue(markdown));
  });
  return { html };
};
