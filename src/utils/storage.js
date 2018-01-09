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

export const setLocalData = (height, shoulders, breast, waist, hips) => {
  LocalStorage.remove('DressingUserData');
  const localData = {
    Height: height,
    Shoulders: shoulders,
    Breast: breast,
    Waist: waist,
    Hips: hips,
  };
  LocalStorage.set('DressingUserData', localData);
};
