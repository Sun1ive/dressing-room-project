import each from 'lodash/each';
import last from 'lodash/last';
import sortBy from 'lodash/sortBy';
// import coefficient from './coefficient';
import { top } from './coefficient';

export const compareTop = (array, shoulders, breast, waist, hips) => {
  const newArr = [];
  each(array, (item) => {
    const itemID = item._id;
    each(item.sizes, x => {

      const myObj = {
        title: item.title,
        src: item.src,
        id: item._id,
        link: item.link,
        price: item.price,
        size: x.size,
        length: item.length,
        brand: item.brand,
        percent: top(shoulders, x.shoulders, breast, x.breast, waist, x.waist, hips, x.hips),
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
  return sortBy(newArr, 'percent')
    .reverse()
    // .filter(item => item.percent >= 70);
};

export const compareBottom = () => {
  // hello world
}