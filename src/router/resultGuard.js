import store from '../store';

export default (to, from, next) => {
  if (store.getters.items.length < 1) {
    next('/404');
  } else {
    next();
  }
};
