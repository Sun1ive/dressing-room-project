import Vue from 'vue';
import Vuex from 'vuex';

import { withOutAuth } from '../services/api';
import { SessionStorage } from '../utils/storage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: null,
    userParams: {
      height: null,
      shoulders: null,
      breast: null,
      waist: null,
      hips: null,
    },
    isLoading: false,
    isError: '',
    isUserLoginState: false,
  },
  mutations: {
    setError(state, payload) {
      state.isError = payload;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    setUserLoginState(state, payload) {
      state.isUserLoginState = payload;
    },
    setItems(state, payload) {
      state.items = payload;
    },
    setUserParams(state, payload) {
      switch (payload.name) {
        case 'Height':
          state.userParams.height = payload.value;
          break;
        case 'Shoulders':
          state.userParams.shoulders = payload.value;
          break;
        case 'Breast':
          state.userParams.breast = payload.value;
          break;
        case 'Waist':
          state.userParams.waist = payload.value;
          break;
        case 'Hips':
          state.userParams.hips = payload.value;
          break;
        default:
          break;
      }
    },
  },
  actions: {
    setUserParams({ commit }, payload) {
      commit('setLoading', true);
      Object.keys(payload).forEach(key => {
        commit('setUserParams', {
          name: key,
          value: payload[key],
        });
      });
      commit('setLoading', false);
    },
    getSingleItem({ commit }, payload) {
      commit('setLoading', true);
      async function getItem() {
        try {
          const response = await withOutAuth().post('/products/item', payload)
          commit('setItems', response.data)
          commit('setLoading', false);
        } catch (error) {
          commit('setError', error.response.data.message);
          commit('setLoading', false);
          throw new Error(error);
        }
      }
      getItem();
    },
    onSignIn({ commit, state }, payload) {
      async function onLogIn() {
        try {
          const response = await withOutAuth().post('/user/login', {
            email: payload.email,
            password: payload.password,
          });
          const { token } = response.data;
          SessionStorage.set('AuthToken', token);

          if (state.error) {
            commit('setError', '');
          }
          commit('setUserLoginState', true);
        } catch (error) {
          commit('setError', error.response.data.message);
          throw new Error(error);
        }
      }
      onLogIn();
    },
  },
  getters: {
    items: state => state.items,
    userHeight: state => state.userParams.height,
    userShoulders: state => state.userParams.shoulders,
    userBreast: state => state.userParams.breast,
    userWaist: state => state.userParams.waist,
    userHips: state => state.userParams.hips,
    userLoginState: state => state.isUserLoginState,
    isError: state => state.isError,
  },
});
