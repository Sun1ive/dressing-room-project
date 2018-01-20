import Vue from 'vue';
import Vuex from 'vuex';
import { typeList } from '../utils/data';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: 1,
    items: [],
    noItems: false,
    itemType: 'Плечевые',
    availableItemTypes: typeList,
    selectedItem: null,
    userParams: {
      height: null,
      shoulders: null,
      breast: null,
      waist: null,
      hips: null,
    },
    isUserLoginState: false,
    isLoading: false,
    isError: {
      state: false,
      status: 200,
      message: '',
    },
  },
  mutations,
  actions,
  getters,
});
