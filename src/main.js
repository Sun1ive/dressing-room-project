import Vue from 'vue';
import 'babel-polyfill';
import pWrapper from '@/components/Templates/ParamsWrapper';
import preLoader from '@/components/Shared/Loader';
import Modal from '@/components/Shared/Modal';

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
  VTextField,
  VSelect,
  VForm,
  VAlert,
  VProgressCircular,
  VDivider,
  VSubHeader,
  VRadioGroup,
  VDialog,
  transitions,
} from 'vuetify';
import '../node_modules/vuetify/src/stylus/app.styl';

import App from './App';
import router from './router';
import store from './store';
import { LocalStorage, SessionStorage } from './utils/storage';
import path from './utils/path';

Vue.component('app-params', pWrapper);
Vue.component('app-loader', preLoader);
Vue.component('app-modal', Modal);

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
    VTextField,
    VSelect,
    VForm,
    VAlert,
    VProgressCircular,
    VDivider,
    VSubHeader,
    VRadioGroup,
    VDialog,
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

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  created() {
    if (LocalStorage.get('DressingUserData')) {
      const userInfo = LocalStorage.get('DressingUserData');
      this.$store.dispatch('setUserParams', userInfo);
    }
    if (SessionStorage.get('AuthToken')) {
      this.$store.commit('setUserLoginState', true);
    }
  },
  mounted() {
    const pathname = window.location.href;
    this.$store.commit('setSelectedItem', path(pathname));
  },
  render: h => h(App),
});
