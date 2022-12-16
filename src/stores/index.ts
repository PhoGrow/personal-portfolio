import { createSharedComposable, useMediaQuery } from '@vueuse/core';

const useMobileBreakpoint = createSharedComposable(() =>
  useMediaQuery('(max-width: 768px)')
);

export { useMobileBreakpoint };
