import authAirtable from './config.js';

export default function fetchInventory(environment) {
  console.log('GOING TO BE FETCHING INVENTORY NOW');

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

          console.log(lastRecord);
          resolve(lastRecord);
        });

        console.log('DONE GETTING RECORD');
      });
  });
}
