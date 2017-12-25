import Vue from 'vue';
import Router from 'vue-router';

import AdminPage from '@/components/admin/AdminMain';
import Starter from '@/components/pages/Starter';
import Home from '@/components/pages/Home';
import Breast from '@/components/views/Breast';
import Waist from '@/components/views/Waist';
import Hips from '@/components/views/Hips';
import Result from '@/components/pages/Result';
import SingleResult from '@/components/pages/SingleResult';
import Insert from '@/components/pages/Insert';

// import AdminGuard from './AdminGuard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: AdminPage,
      // children: [
      //   {
      //     path: 'create',
      //     component: AdminCreate,
      //   },
      //   {
      //     path: 'view',
      //     component: AdminView,
      //   },
      //   {
      //     path: 'edit',
      //     component: AdminEdit,
      //   },
      // ],
      // beforeEnter: AdminGuard,
    },
    {
      path: '/insert',
      name: 'Insert',
      component: Insert,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/params',
      name: 'Params',
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
    {
      path: '/single-result',
      name: 'SingleResult',
      component: SingleResult,
    },
  ],
});
