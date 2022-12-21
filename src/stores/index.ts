import { createSharedComposable, useMediaQuery } from '@vueuse/core';
import { useProgrammatic } from '@oruga-ui/oruga-next';
import { MoleculeNotification } from '@/components/molecules';

const useMobileBreakpoint = createSharedComposable(() =>
  useMediaQuery('(max-width: 768px)')
);

const { oruga } = useProgrammatic();
function useToast(): void {
  oruga.notification.open({
    duration: 4000,
    component: MoleculeNotification,
    position: 'bottom',
    variant: 'dark',
  });
}

export { useMobileBreakpoint, useToast };
