import express from 'express';
import path from 'path';
import cors from 'cors';

import verifyAddress from './api/addressComplete/verifyAddress.js';
import getFullAddress from './api/addressComplete/getFullAddress.js';
import sendEmail from './api/email/sendEmail.js';
import createOrder from './api/airtable/createOrder.js';

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
  const response = await createOrder(req.body.customer);
  res.send({ response: response });

  if (response === 'ok') {
    const emailData = {
      to: ['PharmAd Marketing <essity@pharmad.ca>'],
      sender: 'Automated bot <no-reply@pharmad.ca>',
      subject: 'New Calibration Markers Request',
      htmlBody: `<p>${req.body.customer.fullName} has requested Calibration Markers. Check <a href='https://airtable.com/appBlDbm2Ec0hB352/tblW28ipM0gGkFk7Z/viwgHNKxFl2sZobbG?blocks=hide'>Airtable</a> for full details.<p>`,
    };

    sendEmail(emailData);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
