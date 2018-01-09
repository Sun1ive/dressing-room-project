import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Pages/Home';
import Insert from '@/components/Pages/Insert';
import Result from '@/components/Pages/Result';
import SignIn from '@/components/User/State/SignIn';


import Height from '@/components/User/Params/Height';
import Shoulders from '@/components/User/Params/Shoulders';
import Breast from '@/components/User/Params/Breast';
import Waist from '@/components/User/Params/Waist';
import Hips from '@/components/User/Params/Hips';

import Admin from '@/components/Admin/Admin'
import AdminCreate from '@/components/Admin/AdminCreate'
import AdminView from '@/components/Admin/AdminView'
import AdminEdit from '@/components/Admin/AdminEdit'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/signin',
      component: SignIn,
    },
    {
      path: '/insert',
      component: Insert,
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
  ],
});
