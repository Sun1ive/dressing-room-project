// @flow

export type ResultType = {
  breast: number,
  waist: number,
  hips: number,
};

export type CredentialsType = {
  username: string,
  password: string,
};

export type DataStateType = {
  items: Array<mixed>,
  selectedItem: string,
  breast: number,
  waist: number,
  hips: number,
  arm: number,
  filtered: Array<mixed>,
  loading: boolean,
  error: boolean,
  isUserSignIn: boolean,
};

export type ItemType = {
  title: string,
  src: string,
  id: string,
  link: string,
  sizes: Array<mixed>,
  price: number,
};

export type FilteredObjectType = {
  title: string,
  src: string,
  link: string,
  price: number,
  id: number,
  percent: number,
  size: number,
};

export type EachSizeType = {
  breast: number,
  hips: number,
  size: string,
  waist: number,
};
