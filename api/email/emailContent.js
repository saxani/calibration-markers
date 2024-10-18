export default function emailContent(customer) {
  const fullAddress = customer.address2
    ? customer.address1 + ', ' + customer.address2
    : customer.address1;
  const content = `<h3>${customer.fullName} has requested Calibration Markers.</h3> 
  <br />
  <p>${customer.fullName}</p>
  <p>${fullAddress}</p>
  <p>${customer.city}, ${customer.province} ${customer.postal}</p>
  <p>Canada</p>
  <p>${customer.phone}</p>
  <br />
  <br />
  <h3>Order contain...</h3>

  <table>
  <tr style='background-color: #1e5592;'>
    <th>Items</th>
    <th>SKU</th>
    <th>Qty</th>
  </tr>
  <tr>
    <td>Cutimed Calibration Markers: English; 1 sheet</td>
    <td>136694E</td>
    <td>${customer.quantity}</td>
  </tr>
  <tr>
    <td>Cutimed Calibration Markers Envelope: English; 1 each</td>
    <td>136697E</td>
    <td>1</td>
  </tr>
  </table>
  <br />
  <p>Check <a href='https://airtable.com/appBlDbm2Ec0hB352/tblW28ipM0gGkFk7Z/viwgHNKxFl2sZobbG?blocks=hide'>Airtable</a> for full details.<p>
  
  `;

  return content;
}
