import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.VITE_Gmail,
      pass: process.env.VITE_GPWD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.VITE_Rceiv,
    subject: `Contact form submission from ${name} | email id- ${email}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully');
  } catch (error) {
    res.status(500).send('Failed to send message');
  }
});

export default router;