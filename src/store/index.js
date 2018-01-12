import Vue from 'vue';
import Vuex from 'vuex';
import { typeList } from '../utils/data';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
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
    isErrorState: false,
    isErrorMessage: '',
    isLoading: false,
  },
  mutations,
  actions,
  getters,
});
