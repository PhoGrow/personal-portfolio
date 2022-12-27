import {
  createSharedComposable,
  useMediaQuery,
  useDark,
  createGlobalState,
} from '@vueuse/core';
import { ref } from 'vue';
import { useProgrammatic } from '@oruga-ui/oruga-next';
import OrganismNotification from '@/components/organisms/OrganismNotification.vue';

const useMobileBreakpoint = createSharedComposable(() =>
  useMediaQuery('(max-width: 768px)')
);

const useDarkMode = createSharedComposable(useDark);

const useGlobalState = createGlobalState(() => {
  const isCvVisible = ref(false);
  return { isCvVisible };
});

const { oruga } = useProgrammatic();
function useToast(): void {
  const isDark = useDarkMode();
  oruga.notification.open({
    duration: 4000,
    component: OrganismNotification,
    position: 'bottom',
    variant: isDark.value ? 'secondary' : 'dark',
  });
}

export { useMobileBreakpoint, useDarkMode, useGlobalState, useToast };
