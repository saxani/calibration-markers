import Airtable from 'airtable';
import 'dotenv/config';

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
});

export const base = Airtable.base('appBlDbm2Ec0hB352');
