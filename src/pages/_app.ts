import type { App } from 'vue';
import { Config, Modal, Notification } from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma';

export default (app: App) => {
  app.use(Config, bulmaConfig);
  app.use(Modal);
  app.use(Notification);
};
