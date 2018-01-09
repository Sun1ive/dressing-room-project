import store from '../store';

export default async (to, from, next) => {
  store
    .dispatch('getItems')
    .then(() => {
      next();
    })
    .catch(err => {
      throw new Error(err);
    });
};
