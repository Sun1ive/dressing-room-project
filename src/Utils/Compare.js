// @flow

import each from 'lodash/each';
import last from 'lodash/last';
import sortBy from 'lodash/sortBy';
import Coefficient from './Coefficient';

export default (array: Array<mixed>, breast: number, waist: number, hips: number) => {
  const newArr = [];
  each(array, item => {
    const itemID = item.id;
    each(item.sizes, x => {
      const myObj = {
        title: item.title,
        src: item.src,
        id: item.id,
        link: item.link,
        size: x.size,
        percent: Coefficient(breast, x.breast, waist, x.waist, hips, x.hips),
      };

      if (breast <= x.breast && waist <= x.waist && hips <= x.hips) {
        if (newArr.length === 0) {
          newArr.push(myObj);
        } else {
          const id = last(newArr).id;
          if (id !== itemID) {
            newArr.push(myObj);
          }
        }
      }
    });
  });
  return sortBy(newArr, 'percent')
    .reverse()
    .filter(item => item.percent >= 70);
};
