// @flow

export type ResultType = {
  breast: number,
  waist: number,
  hips: number
};

export type DataStateType = {
  items: null | Array<mixed>,
  selectedItem: null | string,
  breast: null | number,
  waist: null | number,
  hips: null | number,
  filtered: null | Array<mixed>,
  loading: boolean
};

export type ItemType = {
  title: string,
  src: string,
  id: number,
  link: string,
  sizes: Array<mixed>,
  price: number
};

export type FilteredObjectType = {
  title: string,
  src: string,
  link: string,
  price: number,
  id: number,
  percent: number,
  size: number
};

export type EachSizeType = {
  breast: number,
  hips: number,
  size: string,
  waist: number
};
