import './bootstrap';
import { createApp } from 'vue';
import router from './router';
import Page from "./views/Page.vue";

createApp(Page)
  .use(router)
  .mount('#app');
