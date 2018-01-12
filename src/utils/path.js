const reg1 = /(%2F)/g;
const reg2 = /(%3A)/g;
const reg3 = /(%20)/g;

export default path => {
  let str = path.replace(reg1, '/');
  str = str.replace(reg2, ':');
  str = str.replace(reg3, '');
  let result;

  if (str.indexOf('?') === -1) {
    result = null;
  } else {
    result = str.slice(str.indexOf('?') + 1);
  }
  return result;
};
