import { createWebHistory, createRouter } from 'vue-router';

import HomePage from '@/pages/HomePage';
import RequestsPage from '@/pages/RequestsPage';
import ReportsPage from '@/pages/ReportsPage';
import AboutPage from '@/pages/AboutPage';
// import ListVideosPage from '@/pages/ListVideosPage';
// import SingleVideoPage from '@/pages/SingleVideoPage';
// import ListCollectionsPage from '@/pages/ListCollectionsPage';
// import SingleCollectionPage from '@/pages/SingleCollectionPage';
// import ListAuthorsPage from '@/pages/ListAuthorsPage';
// import SingleAuthorPage from '@/pages/SingleAuthorPage';
// import ContributePage from '@/pages/ContributePage.vue';
// import AboutPage from '@/pages/AboutPage';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/requests',
    name: 'Requests',
    component: RequestsPage
  },
  {
    path: '/requests/*',
    name: 'AnyRequests',
    component: RequestsPage
  },
  {
    path: '/reports',
    name: 'Reports',
    component: ReportsPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
