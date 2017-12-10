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

const options = {
  from: '"Sunlive 👻" <coats@indresser.com>', // sender address
  to: 'sunliveua@gmail.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world?', // plain text body
  html: `<b>Hello world?</b>
         <p>Lorem ipsum dolem</p>`, // html body
};

export const node = () => {
  transporter.sendMail(options, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
};

// export default nodemailer;
