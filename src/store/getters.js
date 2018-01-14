export default {
  items: state => state.items,
  itemType: state => state.itemType,
  availableItemTypes: state => state.availableItemTypes,
  isSelectedItem: state => state.selectedItem,
  userHeight: state => state.userParams.height,
  userShoulders: state => state.userParams.shoulders,
  userBreast: state => state.userParams.breast,
  userWaist: state => state.userParams.waist,
  userHips: state => state.userParams.hips,
  userLoginState: state => state.isUserLoginState,
  isLoading: state => state.isLoading,
};
