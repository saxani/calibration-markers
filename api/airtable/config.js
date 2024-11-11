import Airtable from 'airtable';
import 'dotenv/config';

export default function authAirtable(environemnt) {
  return new Promise((resolve, reject) => {
    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey: process.env.AIRTABLE_API_KEY,
    });

    const baseId =
      environemnt === 'development' ? 'appekmZSy8YSGNisb' : 'appBlDbm2Ec0hB352';

    const base = Airtable.base(baseId);
    resolve(base);
  });
}
