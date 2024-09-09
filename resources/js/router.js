import {createRouter, createWebHistory} from "vue-router";
import Ticker from "./views/Pages/Ticker.vue";

const routes = [
  {
      path: '/ticker',
      name: 'ticker',
      component: Ticker,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
