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
    const reg1 = /(&#171;|&#187;)/g;
    str = str.replace(reg1, '"');
    str = str.replace('<p>', '[');
    str = str.replace('</p>', ']');
    const begin = str.indexOf('[');
    const end = str.indexOf(']') + 1;
    const substr = str.substr(begin, end - begin);
    const result = JSON.parse(substr);
    return result;
  }

  async function getData() {
    try {
      const arr = [];
      const response = await WooCommerce.getAsync('products/?per_page=100');
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

      res.send(arr);
      // res.send(resolved)
    } catch (error) {
      res.send(error)
    }
  }
  getData();
});

app.listen(port, () => console.log('Server is on at port ', port));
