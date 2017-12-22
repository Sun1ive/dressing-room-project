/* @flow */

type ResultType = {
  (breast: string): number,
  (waist: string): number,
  (hips: string): number,
};

export default class Storage {
  static get(key: string): ResultType {
    const item: string = window.localStorage.getItem(key);
    const result: ResultType = JSON.parse(item);
    return result;
  }
  static set(key: string, value: { breast: number, waist: number, hips: number }) {
    window.localStorage.setItem(key, JSON.stringify(value: {}));
  }
  static remove(key: string) {
    window.localStorage.removeItem(key);
  }
}
