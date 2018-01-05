import Vue from 'vue';
import Vuex from 'vuex';
import { withOutAuth } from '../services/api';
import { compareTop, compareBottom } from '../utils/compare';
import { SessionStorage } from '../utils/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: null,
    height: null,
    shoulders: null,
    breast: null,
    waist: null,
    hips: null,
    type: 'Плечевые',
    filtered: [],
    selectedItem: {},
    loading: false,
    error: '',
    isUserSignIn: false,
  },
  mutations: {
    setLoadedDresses(state, payload) {
      state.items = payload;
    },
    setSelectedItem(state, payload) {
      state.selectedItem = payload;
    },
    setHeight(state, payload) {
      state.height = payload;
    },
    setShoulders(state, payload) {
      state.shoulders = payload;
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
    setType(state, payload) {
      state.type = payload;
    },
    setFilteredDresses(state, payload) {
      state.filtered = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setUserSignIn(state, payload) {
      state.isUserSignIn = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    runCompareBottom(state, payload) {
      state.filtered = compareBottom(payload, state.waist, state.hips);
    },
    runCompare(state, payload) {
      state.filtered = compareTop(
        payload,
        state.shoulders,
        state.breast,
        state.waist,
        state.hips,
        state.height,
      );
    },
    removeFromItemList(state, payload) {
      const index = state.items.map(item => item._id).indexOf(payload);
      state.items.splice(index, 1);
    },
    addToItems(state, payload) {
      state.items.push(payload);
    },
  },
  actions: {
    getDresses({ commit }) {
      async function fetchDresses() {
        try {
          const response = await withOutAuth().get('/products');
          const resolved = response.data;
          commit('setLoadedDresses', resolved);
        } catch (error) {
          throw new Error(`Could not fetch data ${error.response.data}`);
        }
      }
      fetchDresses();
    },
    onSignIn({ commit }, payload) {
      async function onLogIn() {
        try {
          const response = await withOutAuth().post('/user/login', {
            email: payload.email,
            password: payload.password,
          });
          const { token } = response.data;
          SessionStorage.set('AuthToken', token);

          commit('setError', '');
          commit('setUserSignIn', true);
        } catch (error) {
          commit('setError', error.response.data.message);
          throw new Error(error);
        }
      }
      onLogIn();
    },
    sendMail(store, link) {
      async function sendMeMail() {
        try {
          await withOutAuth().post('/mail', { link });
        } catch (error) {
          throw new Error(`Couldn't send message ${error}`);
        }
      }
      sendMeMail();
    },
    setParams({ commit }, payload) {
      if (!payload) {
        return;
      }
      commit('setHeight', payload.height);
      commit('setShoulders', payload.shoulders);
      commit('setBreast', payload.breast);
      commit('setWaist', payload.waist);
      commit('setHips', payload.hips);
    },
  },
  getters: {
    items: state => state.items,
    isError: state => state.error,
    getShoulders: state => state.shoulders,
    getHeight: state => state.height,
    getBreast: state => state.breast,
    getWaist: state => state.waist,
    getHips: state => state.hips,
    getType: state => state.type,
    filtered: state => state.filtered,
    selectedItem: state => state.selectedItem,
    isLoading: state => state.loading,
    isUserSignIn: state => state.isUserSignIn,
  },
});
