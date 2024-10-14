import 'dotenv/config';

const url =
  'http://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Retrieve/v2.11/json3.ws';
const API_KEY = process.env.ADDRESS_COMPLETE_API_KEY;

function getFullAddress(id) {
  return new Promise(async (resolve, reject) => {
    let params = '';
    params += '?Key=' + encodeURIComponent(API_KEY);
    params += '&Id=' + encodeURIComponent(id);

    const response = await fetch(url + params);
    const data = await response.json();

    resolve(data.Items);
  });
}

export default getFullAddress;
