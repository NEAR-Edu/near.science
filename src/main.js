import LogRocket from 'logrocket';
LogRocket.init('near/nearscience');

import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import 'tailwindcss/tailwind.css';

createApp(App).use(router).mount('#app');
