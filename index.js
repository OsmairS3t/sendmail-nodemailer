const nodemailer = require("nodemailer");
import * as dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
  host: "smtp.live.com", //process.env.APP_HOST_HOTMAIL
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "osmair144@hotmail.com",
    pass: "!@159Wanessa753#$",
  },
  // tls: {
  //   rejectUnauthorized: true,
  //   minVersion: "TLSv1.2"
  // }
});

transporter.sendMail({
  from: 'Osmair <osmair144@hotmail.com>',
  to: 'osmair144@gmail.com',
  subject: 'E-mail para de osmair para osmair.',
  html: '<h1>Bom dia/tarde,</h1><br/> <p>E-mail enviado pelo nodemailer com nodejs.</p>',
  text: 'Olá, este e-mail foi enviado usando Nodemailer.'
})
.then(() => console.log('Enviado com sucesso.'))
.catch((err) => console.log('Erro ao enviar e-mail', err));