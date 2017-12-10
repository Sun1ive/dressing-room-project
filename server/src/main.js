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
          attr: x.attributes,
          src: x.images[0].src,
          images: x.images,
        });
      });
      res.send(arr);
    } catch (error) {
      res.sendStatus(400);
    }
  }
  getData();
});

app.listen(port, () => console.log('Server is on at port ', port));


