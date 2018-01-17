import store from '../store';

export default async (to, from, next) => {
  store.commit('setLoading', true);
  await store.dispatch('getItems');
  store.commit('setLoading', false);
  next();
};
