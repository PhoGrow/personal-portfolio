import type { App } from 'vue';
import Oruga from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma';

export default (app: App) => {
  app.use(Oruga, bulmaConfig);
};
