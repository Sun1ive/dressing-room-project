import express from 'express';
import cors from 'cors';
import { each } from 'lodash';
import WooCommerce from './api';

import ordersRoutes from './routes/orders';

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello there');
});

app.use('/orders', ordersRoutes);

app.get('/woo', (req, res) => {
  function myShortParser(str) {
    if (str === undefined || str === null || str === '') return;

    const reg1 = /(&#171;|&#187;)/g;
    const str1 = str.replace(reg1, '"');
    const str2 = str1.replace('<p>', '[');
    const str3 = str2.replace('</p>', ']');
    const begin = str3.indexOf('[');
    const end = str3.indexOf(']') + 1;
    const substr = str3.substr(begin, end - begin);
    const result = JSON.parse(substr);

    return result;
  }

  async function getData() {
    try {
      const arr = [];
      const response = await WooCommerce.getAsync('products/?per_page=3');
      const resolved = await JSON.parse(response.body);

      each(resolved, x => {
        arr.push({
          id: x.id,
          title: x.name,
          price: x.price,
          link: x.permalink,
          short: myShortParser(x.short_description),
          // attr: x.attributes,
          src: x.images[0].src,
        });
      });

      // res.send(arr);
      res.send(resolved)
    } catch (error) {
      res.sendStatus(400);
    }
  }
  getData();
});

app.listen(port, () => console.log('Server is on at port ', port));
