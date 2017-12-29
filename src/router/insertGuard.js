import { LocalStorage } from '../utils/storage';

export default (to, from, next) => {
  const data = LocalStorage.get('DressingUserData');

  if (data === null || data === undefined || data === {}) {
    next('/params')
  } else {
    next();
  }
};
