// @flow

export default class Storage {
  static get(key: string) {
    const item: string = window.localStorage.getItem(key);
    return JSON.parse(item);
  }
  static set(key: string, value: {}) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  static remove(key: string) {
    window.localStorage.removeItem(key);
  }
}
