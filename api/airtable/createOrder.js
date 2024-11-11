import authAirtable from './config.js';

export default function createOrder(data, environment) {
  return new Promise(async (resolve, reject) => {
    const base = await authAirtable(environment);

    base('Orders').create(
      [
        {
          fields: {
            Name: data.fullName,
            Title: data.title,
            Email: data.email,
            'Phone Number': data.phone,
            'Street Address': data.address1,
            'Street Address 2': data.address2,
            City: data.city,
            Province: data.province,
            'Postal Code': data.postal,
            'Clinical Practice': data.clinic,
            Quantity: data.quantity,
            Status: 'Submitted',
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          reject(err);
        }
        records.forEach(function (record) {
          console.log('New record created with id: ');
          console.log(record.getId());
          console.log(record);

          resolve({ record: record });
        });
      }
    );
  });
}
