import store from '../store';

export default (to, from, next) =>  {
  if (store.getters.isUserSignIn) {
    next();
  } else {
    next('/signin');
  }
};
