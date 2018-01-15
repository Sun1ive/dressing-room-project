import { setLocalData, LocalStorage } from '@/utils/storage';

import store from '../store';

export default async (to, from, next) => {
  if (!LocalStorage.get('DressingUserData')) {
    next(false);
    /* eslint-disable no-alert */
    alert('Укажите параметры!');
  } else {
    store.commit('setLoading', true);
    setLocalData(
      store.getters.userHeight,
      store.getters.userShoulders,
      store.getters.userBreast,
      store.getters.userWaist,
      store.getters.userHips,
    );
    await store.dispatch('compareProductsWithType');
    if (store.getters.items.length < 1) {
      store.commit('setLoading', false);
      next('/404');
    } else {
      store.commit('setLoading', false);
      next();
    }
  }
};
