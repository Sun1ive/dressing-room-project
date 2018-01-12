import { withOutAuth } from '../services/api';
import { SessionStorage } from '../utils/storage';

export default {
  getItems({ commit }) {
    return new Promise(resolve => {
      async function fetchData() {
        try {
          const response = await withOutAuth().get('/products');
          const { data } = response;
          commit('setItems', data);
          resolve();
        } catch (error) {
          // reject(Error('Its failed'));
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
    // commit('setErrorMessage', '');
    // commit('setErrorState', false);
    return new Promise(resolve => {
      async function getItem() {
        try {
          const response = await withOutAuth().post('/products/item', {
            link: payload,
            params: state.userParams,
          });
          // if (state.isErrorState) {
          //   commit('setErrorState', false);
          // }
          commit('setItems', response.data);
          resolve();
        } catch (error) {
          // commit('setErrorMessage', error.response.data.message);
          dispatch('sendMail', {
            mailType: '404',
            link: payload,
          });
          // commit('setErrorState', true);
          throw new Error(error);
        }
      }
      getItem();
    });
  },
  compareProductsWithType({ commit, state }) {
    // commit('setLoading', true);
    return new Promise(resolve => {
      async function compareAll() {
        try {
          const response = await withOutAuth().post('/products/all', {
            type: state.itemType,
            params: state.userParams,
          });
          // if (state.isErrorState) {
          //   commit('setErrorState', false);
          // }
          commit('setItems', response.data);
          resolve();
        } catch (error) {
          // commit('setErrorMessage', error.response.data.message);
          // commit('setErrorState', true);
          throw new Error(error);
        }
      }
      compareAll();
    });
  },
  onSignIn({ commit }, payload) {
    return new Promise(resolve => {
      async function onLogIn() {
        try {
          const response = await withOutAuth().post('/user/login', {
            email: payload.email,
            password: payload.password,
          });
          const { token } = response.data;
          SessionStorage.set('AuthToken', token);

          // if (state.error) {
          //   commit('setErrorState', false);
          //   commit('setErrorMessage', '');
          // }
          commit('setUserLoginState', true);
          resolve();
        } catch (error) {
          // commit('setErrorMessage', error.response.data.message);
          // commit('setErrorState', true);
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
      settings = payload;
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
