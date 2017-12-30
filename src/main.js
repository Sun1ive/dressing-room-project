import Vue from 'vue';
import Loader from '@/components/templates/loader';
import wrapper from '@/components/templates/wrapper';
import pWrapper from '@/components/templates/paramsWrapper';
import myContainer from '@/components/templates/myContainer';
import Path from '@/services/path';
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
  VCard,
  VSlider,
  VForm,
  VTextField,
  VProgressCircular,
  VMenu,
  VPagination,
  transitions,
} from 'vuetify';
import '../node_modules/vuetify/src/stylus/app.styl';
import './style/main.styl';

import App from './App';
import { LocalStorage, SessionStorage } from './utils/storage';
import router from './router';
import store from './store';

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
    VCard,
    VSlider,
    VForm,
    VTextField,
    VProgressCircular,
    VMenu,
    VPagination,
    transitions,
  },
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
});

Vue.component('AppLoader', Loader);
Vue.component('Wrapper', wrapper);
Vue.component('app-params', pWrapper);
Vue.component('app-container', myContainer);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created() {
    if (LocalStorage.get('DressingUserData')) {
      const userInfo = LocalStorage.get('DressingUserData');
      this.$store.commit('setShoulders', userInfo.shoulders);
      this.$store.commit('setBreast', userInfo.breast);
      this.$store.commit('setWaist', userInfo.waist);
      this.$store.commit('setHips', userInfo.hips);
    }
    this.$store.dispatch('getDresses');
    if (SessionStorage.get('userAdminCredentials')) {
      this.$store.commit('setUserSignIn', true);
    }
  },
  mounted() {
    const pathname = window.location.href;
    this.$store.commit('setSelectedItem', Path(pathname));
  },
  render: h => h(App),
});
