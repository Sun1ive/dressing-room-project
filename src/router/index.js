import Vue from 'vue';
import Router from 'vue-router';

import Admin from '@/components/admin/Admin';
import AdminCreate from '@/components/admin/AdminCreate';
import AdminEdit from '@/components/admin/AdminEdit';
import AdminView from '@/components/admin/AdminView';

import SignIn from '@/components/user/SignIn';
import Home from '@/components/pages/Home';
import Result from '@/components/pages/Result';
import singleResult from '@/components/pages/SingleResult';
import Insert from '@/components/pages/Insert';
import notFound from '@/components/pages/404';

import Height from '@/components/user/Params/Height';
import Shoulders from '@/components/user/Params/Shoulders';
import Breast from '@/components/user/Params/Breast';
import Waist from '@/components/user/Params/Waist';
import Hips from '@/components/user/Params/Hips';

import AuthGuard from './authGuard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/signin',
      component: SignIn,
    },
    {
      path: '/admin',
      component: Admin,
      // beforeEnter: AuthGuard,
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
      component: Insert,
    },
    {
      path: '/',
      component: Home,
    },
    {
      path: '/shoulders',
      component: Shoulders,
    },
    {
      path: '/breast',
      component: Breast,
    },
    {
      path: '/height',
      component: Height,
    },
    {
      path: '/waist',
      component: Waist,
    },
    {
      path: '/hips',
      component: Hips,
    },
    {
      path: '/result',
      component: Result,
    },
    {
      path: '/single-result',
      component: singleResult,
    },
    {
      path: '/404',
      component: notFound,
    },
  ],
});
