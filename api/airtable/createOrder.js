import { base } from './config.js';

export default function createOrder(data) {
  return new Promise((resolve, reject) => {
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
        });

        resolve('ok');
      }
    );
  });
}

// Sort of what Canada Post fields will look like
// var fields = [
//   { element: "search", field: "", mode: pca.fieldMode.SEARCH },

//   { element: "street-address", field: "Line1", mode: pca.fieldMode.POPULATE },
//   { element: "street-address2", field: "Line2", mode: pca.fieldMode.POPULATE },
//   { element: "city", field: "City", mode: pca.fieldMode.POPULATE },
//   { element: "state", field: "ProvinceName", mode: pca.fieldMode.POPULATE },
//   { element: "postcode", field: "PostalCode" },
//   { element: "country", field: "CountryName", mode: pca.fieldMode.COUNTRY },

//   { element: "multi-unit", field: "{AcMua}", mode: pca.fieldMode.POPULATE },
//   { element: "residential-business", field: "{AcRbdi}", mode: pca.fieldMode.POPULATE }
// ],
