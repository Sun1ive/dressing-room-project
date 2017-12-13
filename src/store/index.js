import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';
import each from 'lodash/each';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    breast: {
      size: null,
      number: null,
    },
    waist: {
      size: null,
      number: null,
    },
    hips: {
      size: null,
      number: null,
    },
    loadedItems: [],
    errorState: false,
  },
  mutations: {
    setBreast(state, payload) {
      state.breast = payload;
    },
    setWaist(state, payload) {
      state.waist = payload;
    },
    setHips(state, payload) {
      state.hips = payload;
    },
    setLoadedItems(state, payload) {
      state.loadedItems = payload;
    },
  },
  actions: {
    setLoadedItems({ commit }) {
      async function getItems() {
        try {
          const data = await firebase
            .database()
            .ref('dresses')
            .once('value');
          const dresses = [];
          const obj = data.val();

          each(obj, item => {
            dresses.push(item);
          });

          commit('setLoadedItems', dresses);
        } catch (error) {
          throw new Error('something bad happened ', error);
        }
      }
      getItems();
    },
    uploadItem({ commit }, payload) {
      const item = {
        title: payload.title,
        link: payload.link,
        id: payload.id,
        src: payload.src,
        sizes: payload.sizes,
      };
      async function upload() {
        try {
          await firebase
            .database()
            .ref('dresses')
            .push(item);
        } catch (error) {
          throw new Error('something bad happened ', error);
        }
      }
      upload();
    },
  },
  getters: {
    errorState: state => state.errorState,
  },
});

export default store;
