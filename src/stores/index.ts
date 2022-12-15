import { createSharedComposable, useMediaQuery } from '@vueuse/core';

const useMobileBreakpoint = createSharedComposable(() =>
  useMediaQuery('(max-width: 768px)')
);

const rootFontSize = parseInt(
  getComputedStyle(document.documentElement).fontSize
);

export { useMobileBreakpoint, rootFontSize };
