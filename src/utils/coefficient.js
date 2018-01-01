export default (userBreast, itemBreast, userWaist, itemWaist, userHips, itemHips) =>
    Math.floor(userBreast / itemBreast * (userWaist / itemWaist) * (userHips / itemHips) * 100);

// export const upper = (
//   userShoulders,
//   itemShoulders,
//   userBreast,
//   itemBreast,
//   userWaist,
//   itemWaist,
//   userHips,
//   itemHips,
// ) => Math.floor(
//     (userShoulders / itemShoulders) *
//       (userBreast / itemBreast) *
//       (userWaist / itemWaist) *
//       (userHips / itemHips) *
//       100,
//   );


// export const bottom = (userWaist, itemWaist, userHips, itemHips) => 
//   Math.floor((userWaist / itemWaist) * (userHips / itemHips) * 100);
