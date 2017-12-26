/* @flow */

import each from 'lodash/each';
import last from 'lodash/last';
import sortBy from 'lodash/sortBy';
import coefficient from './coefficient';

import type { ItemType, FilteredObjectType } from '../types/types';

export default (array: Array<mixed>, breast: number, waist: number, hips: number): Array<mixed> => {
  const newArr: Array<mixed> = [];
  each(array, (item: ItemType) => {
    const itemID: number = item._id; 
    each(item.sizes, x => {
      const myObj: FilteredObjectType = {
        title: item.title,
        src: item.src,
        id: item._id,
        link: item.link,
        price: item.price,
        size: x.size,
        percent: coefficient(breast, x.breast, waist, x.waist, hips, x.hips),
      };

      if (breast <= x.breast && waist <= x.waist && hips <= x.hips) {
        if (newArr.length === 0) {
          newArr.push(myObj);
        } else {
          const id: number = last(newArr).id;
          if (id !== itemID) {
            newArr.push(myObj);
          }
        }
      }
    });
  });
  return sortBy(newArr, 'percent')
    .reverse()
    .filter((item: FilteredObjectType) => item.percent >= 0);
};
