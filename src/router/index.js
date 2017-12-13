import Vue from 'vue';
import Router from 'vue-router';

import Admin from '@/components/Admin';
import Params from '@/components/Params';
import Starter from '@/components/Starter';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      // beforeEnter: AuthGuard,
    },
    {
      path: '/params',
      name: 'Params',
      component: Params,
    },
    {
      path: '/',
      name: 'Starter',
      component: Starter,
    },
  ],
});
