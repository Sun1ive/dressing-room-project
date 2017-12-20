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
    filtered: null,
    selectedItem: null,
  },
  mutations: {
    setLoadedDresses(state, payload) {
      state.items = payload;
    },
    setSelectedItem(state, payload) {
      state.selectedItem = payload;
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
    setFilteredDresses(state, payload) {
      state.filtered = payload;
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
          throw new Error('Could not fetch data ', error);
        }
      }
      fetchDresses();
    },
  },
  getters: {
    items: state => state.items,
    getBreast: state => state.breast,
    getWaist: state => state.waist,
    getHips: state => state.hips,
    filtered: state => state.filtered,
    selectedItem: state => state.selectedItem
  },
});
