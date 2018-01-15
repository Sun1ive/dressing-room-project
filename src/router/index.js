import Vue from 'vue';
import Router from 'vue-router';

// import Home from '@/components/Pages/Home';
/* import Insert from '@/components/Pages/Insert';
import Result from '@/components/Pages/Result';
import SignIn from '@/components/User/State/SignIn';
import ErrorPage from '@/components/Pages/404';

import Height from '@/components/User/Params/Height';
import Shoulders from '@/components/User/Params/Shoulders';
import Breast from '@/components/User/Params/Breast';
import Waist from '@/components/User/Params/Waist';
import Hips from '@/components/User/Params/Hips';

import Admin from '@/components/Admin/Admin';
import AdminCreate from '@/components/Admin/AdminCreate';
import AdminView from '@/components/Admin/AdminView';
import AdminEdit from '@/components/Admin/AdminEdit'; */

import beforeAdmin from './adminGuard';
import beforeResult from './resultGuard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/Pages/Home'),
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: () => import('@/components/User/State/SignIn'),
    },
    {
      path: '/insert',
      name: 'Insert',
      component: () => import('@/components/Pages/Insert'),
    },
    {
      path: '/shoulders',
      name: 'Shoulders',
      component: () => import('@/components/User/Params/Shoulders'),
    },
    {
      path: '/breast',
      name: 'Breast',
      component: () => import('@/components/User/Params/Breast'),
    },
    {
      path: '/height',
      name: 'Height',
      component: () => import('@/components/User/Params/Height'),
    },
    {
      path: '/waist',
      name: 'Waist',
      component: () => import('@/components/User/Params/Waist'),
    },
    {
      path: '/hips',
      name: 'Hips',
      component: () => import('@/components/User/Params/Hips'),
    },
    {
      path: '/404',
      name: 'FourOFour',
      component: () => import('@/components/Pages/404'),
    },
    {
      path: '/result',
      name: 'Result',
      component: () => import('@/components/Pages/Result'),
      beforeEnter: beforeResult,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/components/Admin/Admin'),
      beforeEnter: beforeAdmin,
      children: [
        {
          path: 'view',
          name: 'adminView',
          component: () => import('@/components/Admin/AdminView'),
        },
        {
          path: 'create',
          name: 'adminCreate',
          component: () => import('@/components/Admin/AdminCreate'),
        },
        {
          path: 'edit/:id',
          name: 'adminEdit',
          component: () => import('@/components/Admin/AdminEdit'),
          props: true,
        },
      ],
    },
  ],
});
