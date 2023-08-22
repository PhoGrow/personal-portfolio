import { createPinia } from 'pinia';
export const store = createPinia();

export * from './education';
export * from './iframe';
export * from './modal';
export * from './name';
export * from './notification';
export * from './personalInfo';
export * from './profile';
export * from './skills';
export * from './welcome';
export * from './sharedComposables';

export interface Linkage {
  title: string;
  href: string;
}
