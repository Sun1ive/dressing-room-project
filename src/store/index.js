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
    brand: 'inDresser',
    availableItemTypes: typeList,
    selectedItem: null,
    userParams: {
      height: null,
      shoulders: null,
      breast: null,
      waist: null,
      hips: null,
    },
    isLoading: false,
    isErrorState: false,
    isErrorMessage: '',
    isUserLoginState: false,
  },
  mutations,
  actions,
  getters,
});
