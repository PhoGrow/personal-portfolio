import {
  createSharedComposable,
  useMediaQuery,
  useDark,
  createGlobalState,
} from '@vueuse/core';
import { ref } from 'vue';
import { useProgrammatic } from '@oruga-ui/oruga-next';
import ONotification from '@organisms/ONotification.vue';

export const useMobileBreakpoint = createSharedComposable(() =>
  useMediaQuery('(max-width: 768px)'),
);

export const useDarkMode = createSharedComposable(useDark);

export const useGlobalState = createGlobalState(() => {
  const isCvVisible = ref(false);
  return { isCvVisible };
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
