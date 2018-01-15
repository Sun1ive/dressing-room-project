import store from '../store';

export default (to, from, next) => {
  store.dispatch('compareProductsWithType');
  if (store.getters.items.length < 1) {
    next('/404');
  } else {
    next();
  }
};
