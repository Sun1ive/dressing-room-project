import express from 'express';
import { node } from '../mail';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Order were fetched',
  });
});

router.post('/', (req, res) => {
  node();
  res.status(201).json({
    message: 'hello',
    name: req.body.name,
    price: req.body.price,
  });
});

export default router;
