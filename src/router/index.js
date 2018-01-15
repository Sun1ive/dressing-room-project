import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Pages/Home';
import Insert from '@/components/Pages/Insert';
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
import AdminEdit from '@/components/Admin/AdminEdit';

import beforeAdmin from './adminGuard';
import beforeResult from './resultGuard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/signin',
      name: '',
      component: SignIn,
    },
    {
      path: '/insert',
      name: '',
      component: Insert,
    },
    {
      path: '/shoulders',
      name: '',
      component: Shoulders,
    },
    {
      path: '/breast',
      name: '',
      component: Breast,
    },
    {
      path: '/height',
      name: '',
      component: Height,
    },
    {
      path: '/waist',
      name: '',
      component: Waist,
    },
    {
      path: '/hips',
      name: '',
      component: Hips,
    },
    {
      path: '/404',
      name: '',
      component: ErrorPage,
    },
    {
      path: '/result',
      name: '',
      component: Result,
      beforeEnter: beforeResult,
    },
    {
      path: '/admin',
      name: '',
      component: Admin,
      beforeEnter: beforeAdmin,
      children: [
        {
          path: 'view',
          name: '',
          component: AdminView,
        },
        {
          path: 'create',
          name: '',
          component: AdminCreate,
        },
        {
          path: 'edit/:id',
          name: '',
          component: AdminEdit,
          props: true,
        },
      ],
    },
  ],
});
