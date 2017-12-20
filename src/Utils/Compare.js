import each from 'lodash/each';
import last from 'lodash/last';


export default (array, breast, waist, hips, newArr) => {
  each(array, item => {
    each(item.sizes, x => {
      const itemID = item.id;
      if (breast <= x.breast && waist <= x.waist && hips <= x.hips) {
        if (newArr.length <= 0) {
          newArr.push({
            title: item.title,
            src: item.src,
            id: item.id,
            link: item.link,
            size: x.size,
          });
        }
        const id = last(newArr).id;
        if (newArr.length > 0) {
          if (id !== itemID) {
            newArr.push({
              title: item.title,
              src: item.src,
              link: item.link,
              id: item.id,
              size: x.size,
            });
          }
        }
      }
    });
  });
};
