import Vue from 'vue';
import Vuex from 'vuex';

import { withOutAuth } from '../services/api';
import { SessionStorage } from '../utils/storage';
import { typeList, brandList } from '../utils/data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    itemType: 'Плечевые',
    brand: 'inDresser',
    availableItemTypes: typeList,
    avaliableBrands: brandList,
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
  mutations: {
    setErrorState(state, payload) {
      state.isErrorState = payload;
    },
    setErrorMessage(state, payload) {
      state.isErrorMessage = payload;
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
    setItemType(state, payload) {
      state.itemType = payload;
    },
    setItemBrand(state, payload) {
      state.itemType = payload;
    },
    setSelectedItem(state, payload) {
      state.selectedItem = payload;
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
    removeElementFromItemsInState(state, payload) {
      const index = state.items.map(item => item._id).indexOf(payload);
      state.items.splice(index, 1);
    },
    addElementToItemsInState(state, payload) {
      state.items.push(payload);
    },
  },
  actions: {
    getItems({ commit }) {
      return new Promise((resolve, reject) => {
        async function fetchData() {
          try {
            const response = await withOutAuth().get('/products');
            const { data } = response;
            commit('setItems', data);
            resolve();
          } catch (error) {
            reject(Error('Its failed'));
            throw new Error(`Could not fetch data ${error.response.data}`);
          }
        }
        fetchData();
      });
    },
    setUserParams({ commit }, payload) {
      Object.keys(payload).forEach(key => {
        commit('setUserParams', {
          name: key,
          value: payload[key],
        });
      });
    },
    compareSingle({ commit, dispatch, state }, payload) {
      commit('setErrorMessage', '');
      commit('setErrorState', false);
      return new Promise(resolve => {
        async function getItem() {
          try {
            const response = await withOutAuth().post('/products/item', {
              link: payload,
              params: state.userParams,
            });
            if (state.isErrorState) {
              commit('setErrorState', false);
            }
            commit('setItems', response.data);
            resolve();
          } catch (error) {
            commit('setErrorMessage', error.response.data.message);
            dispatch('sendMail', payload);
            commit('setErrorState', true);
            throw new Error(error);
          }
        }
        getItem();
      });
    },
    compareProductsWithType({ commit, state }) {
      commit('setLoading', true);
      return new Promise(resolve => {
        async function compareAll() {
          try {
            const response = await withOutAuth().post('/products/all', {
              type: state.itemType,
              params: state.userParams,
            });
            if (state.isErrorState) {
              commit('setErrorState', false);
            }
            commit('setItems', response.data);
            resolve();
          } catch (error) {
            commit('setErrorMessage', error.response.data.message);
            commit('setErrorState', true);
            throw new Error(error);
          }
        }
        compareAll();
      });
    },
    compareProductsWithTypeAndColor({ commit, state }, payload) {
      async function compareByTypeAndColor() {
        try {
          const response = await withOutAuth().post('/products/all/color', {
            type: state.itemType,
            params: state.userParams,
            color: payload,
          });
          if (state.isErrorState) {
            commit('setErrorState', false);
          }
          commit('setItems', response.data);
        } catch (error) {
          commit('setErrorState', true);
          commit('setErrorMessage', error.response.data);
        }
      }
      compareByTypeAndColor();
    },
    onSignIn({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        async function onLogIn() {
          try {
            const response = await withOutAuth().post('/user/login', {
              email: payload.email,
              password: payload.password,
            });
            const { token } = response.data;
            SessionStorage.set('AuthToken', token);

            if (state.error) {
              commit('setErrorState', false);
              commit('setErrorMessage', '');
            }
            commit('setUserLoginState', true);
            resolve();
          } catch (error) {
            commit('setErrorMessage', error.response.data.message);
            commit('setErrorState', true);
            reject(Error('Something went wrong'));
            throw new Error(error);
          }
        }
        onLogIn();
      });
    },
    sendMail(state, payload) {
      async function sendMail() {
        try {
          await withOutAuth().post('/mail', {
            link: payload,
          });
        } catch (error) {
          throw new Error(error);
        }
      }
      sendMail();
    },
  },
  getters: {
    items: state => state.items,
    itemType: state => state.itemType,
    availableItemTypes: state => state.availableItemTypes,
    avaliableBrands: state => state.avaliableBrands,
    isSelectedItem: state => state.selectedItem,
    userHeight: state => state.userParams.height,
    userShoulders: state => state.userParams.shoulders,
    userBreast: state => state.userParams.breast,
    userWaist: state => state.userParams.waist,
    userHips: state => state.userParams.hips,
    userLoginState: state => state.isUserLoginState,
    isErrorState: state => state.isErrorState,
    isErrorMessage: state => state.isErrorMessage,
    isLoading: state => state.isLoading,
  },
});
