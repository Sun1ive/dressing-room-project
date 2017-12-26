/* @flow */

import Vue from 'vue';
import Vuex from 'vuex';
import { withAuth, withOutAuth } from '../services/api';
import onCompare from '../Utils/compare';

import type { DataStateType, CredentialsType } from '../types/types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: null,
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
    setLoadedDresses(state: DataStateType, payload: Array<mixed>) {
      state.items = payload;
    },
    setSelectedItem(state: DataStateType, payload: string) {
      state.selectedItem = payload;
    },
    setBreast(state: DataStateType, payload: number) {
      state.breast = payload;
    },
    setWaist(state: DataStateType, payload: number) {
      state.waist = payload;
    },
    setHips(state: DataStateType, payload: number) {
      state.hips = payload;
    },
    setArm(state: DataStateType, payload: number) {
      state.arm = payload;
    },
    setFilteredDresses(state: DataStateType, payload: Array<mixed>) {
      state.filtered = payload;
    },
    setLoading(state: DataStateType, payload: boolean) {
      state.loading = payload;
    },
    setUserSignIn(state: DataStateType, payload: boolean) {
      state.isUserSignIn = payload;
    },
    runCompare(state: DataStateType, payload: Array<mixed>) {
      const result: Array<mixed> = onCompare(payload, state.breast, state.waist, state.hips);
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
    onSignIn({ commit }, payload: CredentialsType) {
      async function onLogIn() {
        try {
          const response = await withAuth(payload.username, payload.password).get(
            'http://localhost:8081/login',
          );
          if (response.status === 200) {

            const credentials: CredentialsType = {
              username: payload.username,
              password: payload.password
            }
            window.sessionStorage.setItem('userAdminCredentials', JSON.stringify(credentials));
            commit('setUserSignIn', true);
          }
        } catch (error) {
          throw new Error(`Wrong login or password ${error}`);
        }
      }
      onLogIn();
    },
  },
  getters: {
    items: (state: DataStateType) => state.items,
    getBreast: (state: DataStateType) => state.breast,
    getWaist: (state: DataStateType) => state.waist,
    getHips: (state: DataStateType) => state.hips,
    getArm: (state: DataStateType) => state.arm,
    filtered: (state: DataStateType) => state.filtered,
    selectedItem: (state: DataStateType) => state.selectedItem,
    isLoading: (state: DataStateType) => state.loading,
    isError: (state: DataStateType) => state.error,
    isUserSignIn: (state: DataStateType) => state.isUserSignIn,
  },
});
