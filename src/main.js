import Vue from 'vue';
import Loader from '@/components/templates/Loader';
import wrapper from '@/components/templates/wrapper';
import pWrapper from '@/components/templates/paramsWrapper';



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
  transitions,
} from 'vuetify';
import '../node_modules/vuetify/src/stylus/app.styl';

import App from './App';
import Storage from './Utils/LocalStorage';
import router from './router'
import store from './store';
import Path from '../src/services/path';

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
Vue.component('ParamsWrapper', pWrapper);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created() {
    if (Storage.get('DressingUserData')) {
      const userInfo = Storage.get('DressingUserData');
      this.$store.commit('setBreast', userInfo.breast);
      this.$store.commit('setWaist', userInfo.waist);
      this.$store.commit('setHips', userInfo.hips);
      this.$store.commit('setArm', userInfo.arm);
    }
    this.$store.dispatch('getDresses');
    if (window.sessionStorage.getItem('user')) {
      this.$store.commit('setUserSignIn', true);
    }
  },
  mounted() {
    const pathname = window.location.href;
    this.$store.commit('setSelectedItem', Path(pathname));
  },
});
