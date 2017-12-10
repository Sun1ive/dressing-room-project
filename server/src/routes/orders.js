import express from 'express';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'mail.adm.tools',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'coats@indresser.com', // generated ethereal user
    pass: '3DLao3x1AC8t', // generated ethereal password
  },
});

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Order were fetched',
  });
});

router.post('/', (req, res) => {
  const options = {
    from: '"Sunlive 👻" <coats@indresser.com>',
    to: 'sunliveua@gmail.com',
    subject: 'Hello ✔',
    text: 'Hello world?',
    html: `
     <b>Hello world?</b>
     <p>There is some info for letter</p>
     <p>Lorem ipsum dolem</p>
     <div>Username: ${req.body.name}</div>
     <div>Price: ${req.body.price}</div>`,
  };
  transporter.sendMail(options, (error, info) => {
    if (error) return;
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });
  res.status(201).json({
    message: 'hello',
  });
});

export default router;
