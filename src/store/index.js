import Vue from 'vue';
import Vuex from 'vuex';

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
    setUserLoginState(state, payload) {
      state.userLoginState = payload;
    },
  },
  actions: {},
  getters: {
    userHeight: state => state.userParams.height,
    userShoulders: state => state.userParams.shoulders,
    userBreast: state => state.userParams.breast,
    userWaist: state => state.userParams.waist,
    userHips: state => state.userParams.Hips,
  },
});
