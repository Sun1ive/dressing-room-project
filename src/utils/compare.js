import each from 'lodash/each';
import last from 'lodash/last';
import sortBy from 'lodash/sortBy';
import { top, bottom, upperLength } from './functions';


export const compareTop = (array, shoulders, breast, waist, hips, height) => {
  const newArr = [];
  each(array, item => {
    const itemID = item._id;
    each(item.sizes, x => {
      const myObj = {
        title: item.title,
        type: item.type,
        src: item.src,
        id: item._id,
        link: item.link,
        price: item.price,
        size: x.size,
        length: item.itemLength,
        brand: item.brand,
        percent: top(shoulders, x.shoulders, breast, x.breast, waist, x.waist, hips, x.hips),
        difference: upperLength(height, item.itemLength),
      };

      if (shoulders <= x.shoulders && breast <= x.breast && waist <= x.waist && hips <= x.hips) {
        if (newArr.length === 0) {
          newArr.push(myObj);
        } else {
          const { id } = last(newArr);
          if (id !== itemID) {
            newArr.push(myObj);
          }
        }
      }
    });
  });
  return sortBy(newArr, 'percent').reverse();
  // .filter(item => item.percent >= 70);
};

export const compareBottom = (array, waist, hips) => {
  const newArr = [];
  each(array, item => {
    const itemID = item._id;
    each(item.sizes, x => {
      const myObj = {
        title: item.title,
        type: item.type,
        src: item.src,
        id: item._id,
        link: item.link,
        price: item.price,
        size: x.size,
        length: item.length,
        brand: item.brand,
        percent: bottom(waist, x.waist, hips, x.hips),
      };

      if (waist <= x.waist && hips <= x.hips) {
        if (newArr.length === 0) {
          newArr.push(myObj);
        } else {
          const { id } = last(newArr);
          if (id !== itemID) {
            newArr.push(myObj);
          }
        }
      }
    });
  });
  return sortBy(newArr, 'percent').reverse();
  // .filter(item => item.percent >= 70);
};
