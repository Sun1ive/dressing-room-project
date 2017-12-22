import Vue from 'vue';
import Router from 'vue-router';

import Admin from '@/components/pages/Admin';
import Starter from '@/components/pages/Starter';
import Breast from '@/components/views/Breast';
import Waist from '@/components/views/Waist';
import Hips from '@/components/views/Hips';
import Result from '@/components/pages/Result';
import Insert from '@/components/pages/Insert';

// import AdminGuard from './AdminGuard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      // beforeEnter: AdminGuard,
    },
    {
      path: '/insert',
      name: 'Insert',
      component: Insert,
    },
    {
      path: '/',
      name: 'Starter',
      component: Starter,
    },
    {
      path: '/breast',
      name: 'Breast',
      component: Breast,
    },
    {
      path: '/waist',
      name: 'Waist',
      component: Waist,
    },
    {
      path: '/hips',
      name: 'Hips',
      component: Hips,
    },
    {
      path: '/result',
      name: 'Result',
      component: Result,
    },
  ],
});
