import express from 'express';
import cors from 'cors';
import WooCommerce from './api';

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/woo', (req, res) => {
  async function getData() {
    try {
      const arr = [];
      const response = await WooCommerce.getAsync('products/?per_page=5');
      const resolved = await JSON.parse(response.body);

      resolved.forEach(x => {
        arr.push({
          id: x.id,
          title: x.name,
          price: x.price,
          link: x.permalink,
          attr: x.attributes,
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

app.get('/', (req, res) => {
  res.send('hello there');
});
