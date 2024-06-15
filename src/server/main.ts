import chalk from "chalk";
import express, { Response, Request, NextFunction } from "express";
import ViteExpress from "vite-express";
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import contactRoute from "./contact.ts"

dotenv.config();

const PORT: any = process.env.PROD_PORT || '3000';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: import.meta.env.VITE_Gmail,
    pass: import.meta.env.VITE_GPWD,
  },
});

// Middleware to handle email notification once per request
const createEmailNotificationHandler = () => {
  let emailSent = false;

  return async (req: Request, res: Response, next: NextFunction) => {
    if (!emailSent) {
      const forwarded = req.headers['x-forwarded-for'] as string;
      const ip = forwarded ? forwarded.split(',')[0] : req.connection.remoteAddress;

      const mailOptions = {
        from: import.meta.env.VITE_Gmail,
        to: import.meta.env.VITE_Rceiv,
        subject: 'Portfolio Visit Notification',
        text: `Greetings mistress, one person with IP address ${ip || 'Unknown IP'} has viewed your Portfolio.`,
      };

      try {
        await transporter.sendMail(mailOptions);
        emailSent = true; // Mark email as sent
      } catch (error) {
        console.error('Failed to send notification email:', error);
      }
    }

    next();
  };
};

const ipTrackingMiddleware = createEmailNotificationHandler();

app.use(ipTrackingMiddleware); // Use the middleware globally or on specific routes

app.use('/contact', contactRoute);

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, PORT, () =>
  console.log(chalk.bgMagenta(`the server is running >>>>> @http://localhost:${PORT}/`)),
);

export default app;
