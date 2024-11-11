import authAirtable from './config.js';

export default function updateInventory(data, environment) {
  console.log('GOING TO BE UPDATING INVENTORY NOW');

  console.log(data);

  let lastRecord = {};

  return new Promise(async (resolve, reject) => {
    const base = await authAirtable(environment);

    base('Inventory')
      .select({
        maxRecords: 1,
        sort: [{ field: 'id', direction: 'desc' }],
      })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log('Retrieved record!');
          console.log(record.get('id'));

          lastRecord = {
            markers: record.get('End Marker Inventory'),
            envelopes: record.get('End Envelope Inventory'),
          };
        });

        console.log('DONE GETTING RECORD');
        base('Inventory').create(
          [
            {
              fields: {
                'Start Marker Inventory': lastRecord.markers,
                'Start Envelope Inventory': lastRecord.envelopes,
                'Requested Marker Quantity Added': 0,
                'Requested Marker Quantity Ordered': parseInt(
                  data.get('Quantity')
                ),
                'Requested Envelope Quantity Added': 0,
                'Requested Envelope Quantity Ordered': 1,
                'Order Type': 'Order',
                'Order Number Reference': data.get('Order Number'),
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
              console.log(record.get('id'));
              console.log(record);

              resolve({ record: record });
            });
          }
        );
      });
  });
}
