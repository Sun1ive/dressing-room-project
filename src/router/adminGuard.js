import store from '../store';

export default async (to, from, next) => {
  store.dispatch('getItems');
  next();
};
