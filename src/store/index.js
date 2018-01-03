import Vue from 'vue';
import Vuex from 'vuex';
import { withAuth, withOutAuth } from '../services/api';
import { compareTop } from '../utils/compare';
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
    filtered: null,
    selectedItem: null,
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
    runCompare(state, payload) {
      const result = compareTop(payload, state.breast, state.waist, state.hips);
      state.filtered = result;
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
          throw new Error(`Could not fetch data ${error}`);
        }
      }
      fetchDresses();
    },
    onSignIn({ commit }, payload) {
      async function onLogIn() {
        try {
          const response = await withAuth(payload.username, payload.password).get('/login');
          if (response.status === 200) {
            const credentials = {
              username: payload.username,
              password: payload.password,
            };
            SessionStorage.set('userAdminCredentials', credentials);
            commit('setError', '');
            commit('setUserSignIn', true);
          }
        } catch (error) {
          const err = `Wrong login or password.`;
          commit('setError', err);
          throw new Error(`Wrong login or password ${error}`);
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
        return
      }
      commit('setHeight', payload.height);
      commit('setShoulders', payload.shoulders);
      commit('setBreast', payload.breast);
      commit('setWaist', payload.waist);
      commit('setHips', payload.hips);
    }
  },
  getters: {
    items: state => state.items,
    getShoulders: state => state.shoulders,
    getHeight: state => state.height,
    getBreast: state => state.breast,
    getWaist: state => state.waist,
    getHips: state => state.hips,
    filtered: state => state.filtered,
    selectedItem: state => state.selectedItem,
    isLoading: state => state.loading,
    isUserSignIn: state => state.isUserSignIn,
  },
});
