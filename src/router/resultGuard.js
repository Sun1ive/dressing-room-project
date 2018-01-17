/* import { setLocalData, LocalStorage } from '@/utils/storage';
import store from '../store';

const sg = store.getters;
const { commit } = store;

export default async (to, from, next) => {
  if (!LocalStorage.get('DressingUserData')) {
    next(false);
   eslint-disable no-alert 
    alert('Укажите параметры!');
  } else if (sg.isSelectedItem) {
    commit('setLoading', true);
    await store.dispatch('compareSingle', sg.isSelectedItem);
    next();
    if (sg.items.length < 1) {
      commit('setLoading', false);
      next('/404');
    } else {
      commit('setLoading', false);
      next();
    }
  } else {
    commit('setLoading', true);
    setLocalData(sg.userHeight, sg.userShoulders, sg.userBreast, sg.userWaist, sg.userHips);
    await store.dispatch('getItemsByPartsAndType');
    if (sg.items.length < 1) {
      commit('setLoading', false);
      next('/404');
    } else {
      commit('setLoading', false);
      next();
    }
  }
};
 */