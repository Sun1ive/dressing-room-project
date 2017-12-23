// @flow

export default (
  userBreast: number,
  itemBreast: number,
  userWaist: number,
  itemWaist: number,
  userHips: number,
  itemHips: number,
) => Math.floor(userBreast / itemBreast * (userWaist / itemWaist) * (userHips / itemHips) * 100);
