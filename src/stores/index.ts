// import { createPinia } from 'pinia';
// export const store = createPinia();

// export * from './counter';

import { useEducationStore } from './education';
import { useIframeStore } from './iframe';
import { useModalStore } from './modal';
import { useNameStore } from './name';
import { useNotificationStore } from './notification';
import { usePersonalInfoStore } from './personalInfo';
import { useProfileStore } from './profile';
import { useSkillsStore } from './skills';
import { useWelcomeStore } from './welcome';
import {
  useMobileBreakpoint,
  useDarkMode,
  useGlobalState,
  useToast,
} from './sharedComposables';

export {
  useEducationStore,
  useIframeStore,
  useModalStore,
  useNameStore,
  useNotificationStore,
  usePersonalInfoStore,
  useProfileStore,
  useSkillsStore,
  useWelcomeStore,
  useMobileBreakpoint,
  useDarkMode,
  useGlobalState,
  useToast,
};
