import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PortfolioView from '@/views/PortfolioView.vue';
import LanguagesFrameworksView from '@/views/LanguagesFrameworksView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: PortfolioView,
    },
    {
      path: '/languagesandframeworks',
      name: 'languagesandframeworks',
      component: LanguagesFrameworksView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
