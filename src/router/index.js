import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '@/pages/HomePage';
import RequestsPage from '@/pages/RequestsPage';
import StatusPage from '@/pages/StatusPage';
import ReportsPage from '@/pages/ReportsPage';
import AboutPage from '@/pages/AboutPage';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/requests',
    alias: '/requests/*',
    name: 'requests',
    component: RequestsPage
  },
  {
    path: '/status',
    name: 'status',
    component: StatusPage
  },
  {
    path: '/reports',
    name: 'reports',
    component: ReportsPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
