import { createPinia } from 'pinia';
export const store = createPinia();

export * from './cv';
export * from './education';
export * from './iframe';
export * from './modal';
export * from './name';
export * from './navbarItems';
export * from './profile';
export * from './skills';
export * from './sharedComposables';

export interface Linkage {
  title: string;
  href: string;
}
