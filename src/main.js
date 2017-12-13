import Vue from 'vue';
import Loader from '@/components/Loader';
import * as firebase from 'firebase';

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
  transitions,
} from 'vuetify';
import '../node_modules/vuetify/src/stylus/app.styl';

import App from './App';
import router from './router';

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

Vue.component('app-loader', Loader);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDCxHsSoNNG2un3PQmZEnubatCAfdds3jU',
      authDomain: 'dressing-room-f35be.firebaseapp.com',
      databaseURL: 'https://dressing-room-f35be.firebaseio.com',
      projectId: 'dressing-room-f35be',
      storageBucket: 'dressing-room-f35be.appspot.com',
      messagingSenderId: '602558021113',
    });
  },
});
