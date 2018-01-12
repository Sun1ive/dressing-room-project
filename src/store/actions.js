import { withOutAuth } from '../services/api';
import { SessionStorage } from '../utils/storage';

export default {
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
  sendMail(context, payload) {
    let path;
    let settings;

    async function sendMail() {
      try {
        await withOutAuth().post(`/mail/${path}`, settings);
      } catch (error) {
        throw new Error(error);
      }
    }
    if (payload.mailType === '404') {
      path = 'link';
      settings = {
        link: payload.link,
      };
      sendMail();
    } else if (payload.mailType === 'userMail') {
      path = 'user';
      settings = {
        name: payload.name,
        phone: payload.phone,
      };
      sendMail();
    }
  },
};
