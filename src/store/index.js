import Vue from 'vue';
import Vuex from 'vuex';
import { withAuth, withOutAuth } from '../services/api';
import compare from '../utils/compare';
import { SessionStorage } from '../utils/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: null,
    shoulders: null,
    breast: null,
    waist: null,
    hips: null,
    arm: null,
    filtered: null,
    selectedItem: null,
    loading: false,
    error: false,
    isUserSignIn: false,
  },
  mutations: {
    setLoadedDresses(state, payload) {
      state.items = payload;
    },
    setSelectedItem(state, payload) {
      state.selectedItem = payload;
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
    setArm(state, payload) {
      state.arm = payload;
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
    runCompare(state, payload) {
      const result = compare(payload, state.breast, state.waist, state.hips);
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
            commit('setUserSignIn', true);
          }
        } catch (error) {
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
          throw new Error(`Couldn't send message ${error}`)
        }
      }
      sendMeMail();
    },
  },
  getters: {
    items: state => state.items,
    getShoulders: state => state.shoulders,
    getBreast: state => state.breast,
    getWaist: state => state.waist,
    getHips: state => state.hips,
    getArm: state => state.arm,
    filtered: state => state.filtered,
    selectedItem: state => state.selectedItem,
    isLoading: state => state.loading,
    isError: state => state.error,
    isUserSignIn: state => state.isUserSignIn,
  },
});
