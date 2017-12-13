import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';
import each from 'lodash/each';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loadedItems: [],
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

          each(obj, key => {
            each(key, item => {
              dresses.push(item)
            })
          })

          commit('setLoadedItems', dresses);
        } catch (error) {
          throw new Error('something bad happened ', error);
        }
      }
      getItems();
    },
  },
  getters: {},
});

export default store;
