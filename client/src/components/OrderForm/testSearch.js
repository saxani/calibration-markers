const Key = 'NX79-GJ26-TP76-KX64';
const SearchTerm = '2701 ri';
const Country = 'CAN';
const LanguagePreference = 'EN';
const MaxSuggestions = 7;

export default function testSearch() {
  var url =
    'http://ws1.postescanada-canadapost.ca/AddressComplete/Interactive/Find/v2.10/json3.ws';
  var params = '';
  params += '&Key=' + encodeURIComponent(Key);
  params += '&SearchTerm=' + encodeURIComponent(SearchTerm);
  // params += '&LastId=' + encodeURIComponent(LastId);
  // params += '&SearchFor=' + encodeURIComponent(SearchFor);
  params += '&Country=' + encodeURIComponent(Country);
  params += '&LanguagePreference=' + encodeURIComponent(LanguagePreference);
  params += '&MaxSuggestions=' + encodeURIComponent(MaxSuggestions);
  // params += '&MaxResults=' + encodeURIComponent(MaxResults);
  // params += '&Origin=' + encodeURIComponent(Origin);
  // params += '&Bias=' + encodeURIComponent(Bias);
  // params += '&Filters=' + encodeURIComponent(Filters);
  // params += '&GeoFence=' + encodeURIComponent(GeoFence);
  var http = new XMLHttpRequest();
  http.open('POST', url, true);
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var response = JSON.parse(http.responseText);
      // Test for an error
      if (
        response.Items.length == 1 &&
        typeof response.Items[0].Error != 'undefined'
      ) {
        // Show the error message
        alert(response.Items[0].Description);
      } else {
        // Check if there were any items found
        if (response.Items.length == 0) alert('Sorry, there were no results');
        else {
          console.log(response);
          // PUT YOUR CODE HERE
          //FYI: The output is an array of key value pairs (e.g. response.Items[0].Id), the keys being:
          //Id
          //Text
          //Highlight
          //Cursor
          //Description
          //Next
        }
      }
    }
  };
  http.send(params);
}
