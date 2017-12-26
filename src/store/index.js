/* @flow */

import Vue from 'vue';
import Vuex from 'vuex';
import API from '../services/api';
import onCompare from '../Utils/compare';

import type { DataStateType } from '../types/types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: null,
    breast: null,
    waist: null,
    hips: null,
    filtered: null,
    selectedItem: null,
    loading: false,
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
          const response = await API().get('/products');
          const resolved = response.data;
          commit('setLoadedDresses', resolved);
        } catch (error) {
          throw new Error(`Could not fetch data ${error}`);
        }
      }
      fetchDresses();
    },
  },
  getters: {
    items: (state: DataStateType) => state.items,
    getBreast: (state: DataStateType) => state.breast,
    getWaist: (state: DataStateType) => state.waist,
    getHips: (state: DataStateType) => state.hips,
    filtered: (state: DataStateType) => state.filtered,
    selectedItem: (state: DataStateType) => state.selectedItem,
    isLoading: (state: DataStateType) => state.loading,
    isUserSignIn: (state: DataStateType) => state.isUserSignIn
  },
});
