import { base } from './config';

export default function createOrder(data) {
  base('Orders').create(
    [
      {
        fields: {
          Name: 'Shaun',
          'Company Name': 'PharmAd',
          'Street Address': '19 test street',
          'Street Address 2': 'Unit 3',
          City: 'Toronto',
          Province: 'Ontario',
          'Postal Code': 'M5B3D4',
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  );
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
