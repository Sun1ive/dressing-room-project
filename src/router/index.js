import Vue from 'vue';
import Router from 'vue-router';

import AdminCreate from '@/components/admin/adminCreate';
import AdminEdit from '@/components/admin/adminEdit';
import AdminView from '@/components/admin/adminView';

import SignIn from '@/components/user/signIn';

import Params from '@/components/pages/params';
import Home from '@/components/pages/home';

import Breast from '@/components/user/breast';
import Waist from '@/components/user/waist';
import Hips from '@/components/user/hips';
import Arm from '@/components/user/arm';

import Result from '@/components/pages/result';
import singleResult from '@/components/pages/singleResult';
import Insert from '@/components/pages/insert';


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
      path: '/admin/Edit/:id',
      name: 'adminEdit',
      props: true,
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
