import 'dotenv/config';

const url =
  'http://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Find/v2.10/json3.ws';
const API_KEY = process.env.ADDRESS_COMPLETE_API_KEY;
const country = 'CAN';
const languagePreference = 'EN';
const maxSuggestions = 7;

const urlTest =
  'http://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Find/v2.10/json3.ws?Key=NX79-GJ26-TP76-KX64&SearchTerm=1096%20Dundas%20Street';

function verifyAddress(searchTerm) {
  return new Promise(async (resolve, reject) => {
    let params = '';
    params += '?Key=' + encodeURIComponent(API_KEY);
    params += '&SearchTerm=' + encodeURIComponent(searchTerm);
    params += '&Country=' + encodeURIComponent(country);
    params += '&LanguagePreference=' + encodeURIComponent(languagePreference);
    params += '&MaxSuggestions=' + encodeURIComponent(maxSuggestions);

    const response = await fetch(url + params);
    const data = await response.json();

    console.log('Got data back:');
    console.log(data.Items);

    resolve(data.Items);
  });
}

export default verifyAddress;
