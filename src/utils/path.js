const reg1 = /(%2F)/g;
const reg2 = /(%3A)/g;

export default path => {
  const one = path.replace(reg1, '/');
  const two = one.replace(reg2, ':');
  let result;

  if (two.indexOf('?') === -1) {
    result = null;
  } else {
    result = two.slice(two.indexOf('?') + 1);
  }
  return result;
};
