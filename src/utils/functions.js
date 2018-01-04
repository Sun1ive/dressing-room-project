// export default (userBreast, itemBreast, userWaist, itemWaist, userHips, itemHips) =>
//     Math.floor((userBreast / itemBreast) * (userWaist / itemWaist) * (userHips / itemHips) * 100);

export const top = (
  userShoulders,
  itemShoulders,
  userBreast,
  itemBreast,
  userWaist,
  itemWaist,
  userHips,
  itemHips,
) =>
  Math.floor(
    userShoulders /
      itemShoulders *
      (userBreast / itemBreast) *
      (userWaist / itemWaist) *
      (userHips / itemHips) *
      100,
  );

export const bottom = (userWaist, itemWaist, userHips, itemHips) =>
  Math.floor(userWaist / itemWaist * (userHips / itemHips) * 100);

export const length = (userHeight, itemLength) => {
  // debugger;
  const x = userHeight;
  const y = x / 8 ;
  const z = y * 2;
  const g = itemLength;
  let text;

  if (x - (y + g) > z) {
    text = '123'
  } else if (x - (y + g) < z) {
    text = '321'
  } else if (x - (y + g) === z) {
    text = '222'
  }
  



  return text;
};
