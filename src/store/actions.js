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
          throw new Error(`Could not fetch data ${error.response.data}`);
        }
      }
      fetchData();
    });
  },
  // getPartOfItems({ commit }) {
  //   let page = 1;
  //   async function fetch() {
  //     try {
  //       const response = await withOutAuth().post('/products/items', {
  //         page,
  //       });
  //       page += 1;
  //       /* eslint-disable no-console */
  //       console.log(response);
  //     } catch (error) {
  //       /* eslint-disable no-console */
  //       console.log(error);
  //     }
  //   };
  //   fetch();
  // },
  setUserParams({ commit }, payload) {
    Object.keys(payload).forEach(key => {
      commit('setUserParams', {
        name: key,
        value: payload[key],
      });
    });
  },
  compareSingle({ commit, dispatch, state }, payload) {
    return new Promise(resolve => {
      async function getItem() {
        try {
          const response = await withOutAuth().post('/products/item', {
            link: payload,
            params: state.userParams,
          });
          commit('setItems', response.data);
          resolve();
        } catch (error) {
          dispatch('sendMail', {
            mailType: '404',
            link: payload,
          });
          commit('setError', {
            state: true,
            status: 404,
            message: 'Not found',
          });
          commit('setLoading', false);
          throw new Error(error);
        }
      }
      getItem();
    });
  },
  compareProductsWithType({ commit, state }) {
    return new Promise(resolve => {
      async function compareAll() {
        try {
          const response = await withOutAuth().post('/products/all', {
            type: state.itemType,
            params: state.userParams,
          });
          commit('setItems', response.data);
          resolve();
        } catch (error) {
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
          commit('setUserLoginState', true);
          commit('setError', { state: false, status: 200, message: '' });
          resolve();
        } catch (error) {
          commit('setError', { state: true, status: 401, message: 'Unauthorized' });
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
