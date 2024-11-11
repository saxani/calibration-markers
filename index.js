import express from 'express';
import path from 'path';
import cors from 'cors';
import 'dotenv/config';

import verifyAddress from './api/addressComplete/verifyAddress.js';
import getFullAddress from './api/addressComplete/getFullAddress.js';
import emailContent from './api/email/emailContent.js';
import sendEmail from './api/email/sendEmail.js';
import createOrder from './api/airtable/createOrder.js';
import updateInventory from './api/airtable/updateInventory.js';

const app = express();
const port = process.env.PORT || 5000;

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/search', async (req, res) => {
  console.log('Got an address search');
  console.log(req.body.data);
  const data = await verifyAddress(req.body.data);
  res.send({ data });
});

app.post('/get-address', async (req, res) => {
  const data = await getFullAddress(req.body.id);

  console.log('DATA BACK');
  console.log(data);
  res.send({ data });
});

app.post('/submit', async (req, res) => {
  console.log('Got submission');
  console.log(req.body.customer);
  const environment = app.get('env');
  const { customer } = req.body;
  const response = await createOrder(customer, environment);
  console.log(response.record);

  const lastRecord = await updateInventory(response.record, environment);

  if (response.record.id) {
    res.send({ response: 'ok' });

    const content = emailContent(
      customer,
      response.record.fields['Order Number']
    );
    const emailData = {
      to: ['PharmAd Marketing <shaun@pharmad.ca>'],
      sender: 'Automated bot <no-reply@pharmad.ca>',
      subject: 'New Calibration Markers Request',
      htmlBody: content,
    };

    sendEmail(emailData);
  }
});

app.post('/captcha', async (req, res) => {
  console.log('Server: Printing Request Body: ', req.body.captcha);
  const SECRET_KEY = process.env.CAPTCHA_SECRET_KEY;
  const VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';

  const response = await fetch(`${VERIFY_URL}`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    },
    body: `secret=${SECRET_KEY}&response=${req.body.captcha}`,
  });

  const isHuman = await response.json();
  console.log(isHuman);

  res.send({ status: isHuman });
});

app.post('/login', async (req, res) => {
  console.log('Got a login request for the admin panel');
  console.log(req.body);
  let matches = false;

  if (req.body.password === process.env.ADMIN_PASSWORD) {
    matches = true;
  }

  res.send({ matches });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
