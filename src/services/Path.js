// @flow

const reg1 = /(%2F)/g;
const reg2 = /(%3A)/g;

export default (path: string) => {
  const one: string = path.replace(reg1, '/');
  const two: string = one.replace(reg2, ':');
  let result: string | null;

  if (two.indexOf('?') === -1) {
    result = null;
  } else {
    result = two.slice(two.indexOf('?') + 1);
  }
  return result
};
