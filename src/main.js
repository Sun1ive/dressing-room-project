import Vue from 'vue';
import 'babel-polyfill';

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify';
import '../node_modules/vuetify/src/stylus/app.styl'

import App from './App';
import router from './router';
import store from './store';
import { LocalStorage, SessionStorage } from './utils/storage';

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  },
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  created() {
    if (SessionStorage.get('AuthToken')) {
      this.$store.commit('setUserLoginState', true);
    }
  },
  mounted() {
  },
  render: h => h(App),
});
