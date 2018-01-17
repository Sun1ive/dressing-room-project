import Vue from 'vue';
import Router from 'vue-router';

import * as LazyLoad from './lazyLoad';
import beforeAdmin from './adminGuard';
import beforeResult from './resultGuard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: LazyLoad.Home,
    },
    {
      path: '/insert',
      name: 'Insert',
      component: LazyLoad.Insert,
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: LazyLoad.SignIn,
    },
    {
      path: '/shoulders',
      name: 'Shoulders',
      component: LazyLoad.Shoulders,
    },
    {
      path: '/breast',
      name: 'Breast',
      component: LazyLoad.Breast,
    },
    {
      path: '/height',
      name: 'Height',
      component: LazyLoad.Height,
    },
    {
      path: '/waist',
      name: 'Waist',
      component: LazyLoad.Waist,
    },
    {
      path: '/hips',
      name: 'Hips',
      component: LazyLoad.Hips,
    },
    {
      path: '/404',
      name: 'FourOFour',
      component: LazyLoad.FourOFour,
    },
    {
      path: '/result',
      name: 'Result',
      component: LazyLoad.Result,
      // beforeEnter: beforeResult,
    },
    {
      path: '/admin',
      name: 'Admin',
      beforeEnter: beforeAdmin,
      component: LazyLoad.Admin,
      children: [
        {
          path: 'view',
          name: 'adminView',
          component: LazyLoad.AdminView,
        },
        {
          path: 'create',
          name: 'adminCreate',
          component: LazyLoad.AdminCreate,
        },
        {
          path: 'edit/:id',
          name: 'adminEdit',
          component: LazyLoad.AdminEdit,
          props: true,
        },
      ],
    },
  ],
});
