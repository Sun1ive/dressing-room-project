// @flow

export default (userBreast, itemBreast, userWaist, itemWaist, userHips, itemHips) =>
  Math.floor(userBreast / itemBreast * (userWaist / itemWaist) * (userHips / itemHips) * 100);
