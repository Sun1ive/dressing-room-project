import each from 'lodash/each';
import last from 'lodash/last';
import sortBy from 'lodash/sortBy';
import coefficient from './coefficient';

export default (array, breast, waist, hips) => {
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
        brand: item.brand,
        percent: coefficient(breast, x.breast, waist, x.waist, hips, x.hips),
      };

      if (breast <= x.breast && waist <= x.waist && hips <= x.hips) {
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
    .filter((item) => item.percent >= 70);
};
