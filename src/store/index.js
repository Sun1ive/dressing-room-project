import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';
import each from 'lodash/each';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    breast: {
      number: null,
      size: null,
    },
    waist: {
      number: null,
      size: null,
    },
    hips: {
      number: null,
      size: null,
    } ,
    loadedItems: [],
    errorState: false,
    loadingState: false,
  },
  mutations: {
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
    loadingState: state => state.loadingState,
  },
});

export default store;
