export default {
  setPage: state => {
    state.page += 1;
  },
  resetPage: state => {
    state.page = 1;
  },
  setItemsByChanks(state, payload) {
    payload.forEach(item => {
      state.items.push(item);
    })
  },
  setLoading(state, payload) {
    state.isLoading = payload;
  },
  setUserLoginState(state, payload) {
    state.isUserLoginState = payload;
  },
  setItems(state, payload) {
    state.items = payload;
  },
  setItemType(state, payload) {
    state.itemType = payload;
  },
  setSelectedItem(state, payload) {
    state.selectedItem = payload;
  },
  setError(state, payload) {
    state.isError = payload;
  },
  setUserParams(state, payload) {
    switch (payload.name) {
      case 'Height':
        state.userParams.height = payload.value;
        break;
      case 'Shoulders':
        state.userParams.shoulders = payload.value;
        break;
      case 'Breast':
        state.userParams.breast = payload.value;
        break;
      case 'Waist':
        state.userParams.waist = payload.value;
        break;
      case 'Hips':
        state.userParams.hips = payload.value;
        break;
      default:
        break;
    }
  },
  removeElementFromItemsInState(state, payload) {
    const index = state.items.map(item => item._id).indexOf(payload);
    state.items.splice(index, 1);
  },
  addElementToItemsInState(state, payload) {
    state.items.push(payload);
  },
};
