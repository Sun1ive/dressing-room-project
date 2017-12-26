import Vue from 'vue';
import Router from 'vue-router';

import AdminCreate from '@/components/admin/AdminCreate';
import AdminEdit from '@/components/admin/AdminEdit';
import AdminView from '@/components/admin/AdminView';

import SignIn from '@/components/user/SignIn';

import Params from '@/components/pages/Params';
import Home from '@/components/pages/Home';

import Breast from '@/components/userParams/Breast';
import Waist from '@/components/userParams/Waist';
import Hips from '@/components/userParams/Hips';
import Arm from '@/components/userParams/Arm';

import Result from '@/components/pages/Result';
import singleResult from '@/components/pages/singleResult';
import Insert from '@/components/pages/Insert';

// import AdminGuard from './AdminGuard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '/admin/create',
      name: 'adminCreate',
      component: AdminCreate,
    },
    {
      path: '/admin/view',
      name: 'adminView',
      component: AdminView,
    },
    {
      path: '/admin/Edit',
      name: 'adminEdit',
      component: AdminEdit,
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
      component: Params,
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
      path: '/arm',
      name: 'Arm',
      component: Arm,
    },
    {
      path: '/result',
      name: 'Result',
      component: Result,
    },
    {
      path: '/single-result',
      name: 'SingleResult',
      component: singleResult,
    },
  ],
});
