import Vue from 'vue';
import Vuex from 'vuex';
import API from '@/services/Api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: null,
    breast: null,
    waist: null,
    hips: null,
  },
  mutations: {
    setLoadedDresses(state, payload) {
      state.items = payload;
    },
    setBreast(state, payload) {
      state.breast = payload;
    },
    setWaist(state, payload) {
      state.waist = payload;
    },
    setHips(state, payload) {
      state.hips = payload;
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
  getters: {
    getBreast: state => state.breast,
    getWaist: state => state.waist,
    getHips: state => state.hips,
  },
});
