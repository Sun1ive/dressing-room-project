export class LocalStorage {
  static get(key) {
    return JSON.parse(window.localStorage.getItem(key));
  }
  static set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  static remove(key) {
    window.localStorage.removeItem(key);
  }
}

export class SessionStorage {
  static get(key) {
    return JSON.parse(window.sessionStorage.getItem(key));
  }
  static set(key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }
  static remove(key) {
    window.sessionStorage.removeItem(key);
  }
}

export const setLocalData = (breast, waist, hips, arm) =>  {
  LocalStorage.remove('DressingUserData');
  const localData = {
    breast,
    waist,
    hips,
    arm,
  };
  LocalStorage.set('DressingUserData', localData);
};

