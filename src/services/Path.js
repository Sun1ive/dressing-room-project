const reg1 = /(%2F)/g;
const reg2 = /(%3A)/g;

export default path => {
  const first = path.replace(reg1, '/');
  const second = first.replace(reg2, ':');
  const result = second.slice(second.indexOf('?') + 1);

  return result;
};
