import Vue from 'vue';
import Router from 'vue-router';

import Admin from '@/components/Admin';
import Root from '@/components/Root';

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
      path: '/',
      name: 'Root',
      component: Root,
    },
  ],
});
