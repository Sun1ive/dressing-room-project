import Vue from 'vue';
import Router from 'vue-router';

import Admin from '@/components/admin/Admin';
import AdminCreate from '@/components/admin/adminCreate';
import AdminEdit from '@/components/admin/adminEdit';
import AdminView from '@/components/admin/adminView';

import SignIn from '@/components/user/signIn';
import Home from '@/components/pages/home';
import Result from '@/components/pages/result';
import singleResult from '@/components/pages/singleResult';
import Insert from '@/components/pages/insert';
import notFound from '@/components/pages/404';

import Height from '@/components/user/Params/height';
import Shoulders from '@/components/user/Params/shoulders';
import Breast from '@/components/user/Params/breast';
import Waist from '@/components/user/Params/waist';
import Hips from '@/components/user/Params/hips';

import AuthGuard from './auth-guard';

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
      path: '/admin',
      component: Admin,
      beforeEnter: AuthGuard,
      children: [
        {
          path: 'view',
          component: AdminView,
        },
        {
          path: 'create',
          component: AdminCreate,
        },
        {
          path: 'edit/:id',
          component: AdminEdit,
          props: true,
        },
      ],
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
      path: '/shoulders',
      name: 'Shoulders',
      component: Shoulders,
    },
    {
      path: '/breast',
      name: 'Breast',
      component: Breast,
    },
    {
      path: '/height',
      name: 'Height',
      component: Height,
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
      component: singleResult,
    },
    {
      path: '/404',
      name: 'Not Found',
      component: notFound,
    },
  ],
});
