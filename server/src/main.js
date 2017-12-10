import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log('Server is on at port ', port));

app.get('/', (req, res) => {
  res.send('hello there');
});
