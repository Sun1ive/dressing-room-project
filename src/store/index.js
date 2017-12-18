import Vue from 'vue';
import Vuex from 'vuex';
import API from '@/services/Api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: null,
  },
  mutations: {
    setLoadedDresses(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    getDresses({ commit }) {
      async function fetchDresses() {
        try {
          const response = await API().get('/products');
          const resolved = response.data;

          commit('setLoadedDresses', resolved);
        } catch (error) {
          throw new Error('Couldnt fetch data ', error);
        }
      }
      fetchDresses();
    },
  },
  getters: {},
});
