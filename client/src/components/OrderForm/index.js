import { useState } from 'react';
import Input from './Input';
import Dropdown from './Dropdown';
import SearchAddress from './SearchAddress';
import AddressOptions from './AddressOptions';
import Button from '../Button';
import layoutStyles from '../../styles/common/layout.module.scss';
import orderStyles from '../../styles/order.module.scss';

const OrderForm = () => {
  const [customer, setCustomer] = useState({
    fullName: '',
    title: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    province: 'no-option',
    postal: '',
    clinic: 'no-option',
  });

  const [addressOptions, setAddressOptions] = useState('');
  const [showAddressOptions, setShowAddressOptions] = useState(false);
  const [error, setError] = useState(false);

  async function sendData(val) {
    const response = await fetch('http://localhost:5000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: val }),
    });

    const data = await response.json();
    setAddressOptions(data.data);

    if (data) {
      setShowAddressOptions(true);
    }
  }

  async function onSelect(item) {
    setShowAddressOptions(false);

    const response = await fetch('http://localhost:5000/get-address', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: item.Id }),
    });

    const data = await response.json();
    const newCustomerData = data.data[0];

    setCustomer({
      ...customer,
      address1: newCustomerData.Line1,
      address2: newCustomerData.Line2,
      city: newCustomerData.City,
      province: newCustomerData.ProvinceName,
      postal: newCustomerData.PostalCode,
    });
  }

  const handleChange = ({ ...args }) => {
    setCustomer({ ...customer, ...args });
  };

  const handleSubmit = async () => {
    console.log(customer);
    if (
      !customer.fullName ||
      !customer.title ||
      !customer.email ||
      !customer.phone ||
      !customer.address1 ||
      !customer.city ||
      customer.province == ' -- Select an option -- ' ||
      !customer.postal
    ) {
      setError(true);
    } else {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customer }),
      });

      const data = await response.json();
      console.log(data);

      if (data.response === 'ok') {
        console.log('SUCCESSSSS');
      }
    }
  };

  return (
    <section className={layoutStyles.content}>
      <div className={orderStyles.container}>
        <h3>Cutimed calibration marker order form</h3>
        <p className={orderStyles.paragraph}>
          To ensure accurate wound measurement using the Cutimed Wound Navigator
          app, you'll need to order our calibration markers. These markers
          enable automatic image calibration, allowing you to measure wound size
          interactively and precisely. Complete the form below to request your
          calibration markers and enhance your wound care assessments.
        </p>
        <div>
          <div style={{ display: 'flex', gap: '30px' }}>
            <Input
              name='Full Name'
              width='50%'
              required={true}
              value={customer.fullName}
              param='fullName'
              handleChange={handleChange}
            />
            <Input
              name='Title'
              width='50%'
              required={true}
              value={customer.title}
              param='title'
              handleChange={handleChange}
            />
          </div>
          <div style={{ display: 'flex', gap: '30px' }}>
            <Input
              name='Email'
              width='50%'
              required={true}
              value={customer.email}
              param='email'
              handleChange={handleChange}
            />
            <Input
              name='Phone Number'
              width='50%'
              required={true}
              value={customer.phone}
              param='phone'
              handleChange={handleChange}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <SearchAddress
              sendData={sendData}
              value={customer.address1}
              handleChange={handleChange}
            />
            {showAddressOptions && (
              <AddressOptions data={addressOptions} onSelect={onSelect} />
            )}
          </div>

          <div style={{ display: 'flex', gap: '30px' }}>
            <Input
              name='Address 2'
              width='66%'
              value={customer.address2}
              param='address2'
              handleChange={handleChange}
            />
            <Input
              name='City'
              width='33%'
              value={customer.city}
              param='city'
              required={true}
              handleChange={handleChange}
            />
          </div>
          <div style={{ display: 'flex', gap: '30px', marginBottom: '20px' }}>
            <Dropdown
              name='Province'
              data={provinces}
              width='33%'
              required={true}
              value={customer.province}
              param='province'
              handleChange={handleChange}
            />
            <Input
              name='Postal Code'
              width='33%'
              required={true}
              value={customer.postal}
              param='postal'
              handleChange={handleChange}
            />
            <Dropdown
              name='Clinical Practice'
              data={practice}
              width='33%'
              value={customer.clinic}
              param='clinic'
              handleChange={handleChange}
            />
          </div>
          {error && (
            <p style={{ color: 'red', fontSize: '18px', fontWeight: '700' }}>
              * Make sure all required fields are filled out
            </p>
          )}

          <Button text='Submit Order' handleSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
};

export default OrderForm;

const provinces = [
  'Alberta',
  'British Columbia',
  'Manitoba',
  'New Brunswick',
  'Newfoundland & Labrador',
  'Northwest Territories',
  'Nova Scotia',
  'Nunavut',
  'Ontario',
  'Prince Edward Island',
  'Quebec',
  'Saskatchewan',
  'Yukon',
];

const practice = ['Hospital', 'Emergency', 'Clinic'];

{
  /* <form>
A simple order form
<Input name='Search Address:' />
<Input name='Full Name' />
<Input name='Title' />
<Input name='Email' />
<Input name='Phone Number' />
<Input name='Street Address' />
<Input name='Suite Number' />
<Input name='Province' />
<Input name='Postal Code' />
<Input name='Clinical Practice' />
</form> */
}

const dataBack = [
  {
    Id: 'CA|CP|A|5562236',
    Text: '1096 Dunbarton Rd',
    Highlight: '0-4,5-8',
    Cursor: 0,
    Description: 'Pickering, ON, L1V 3Z9',
    Next: 'Retrieve',
  },
  {
    Id: 'CA|CP|A|80249681',
    Text: '1096 Dundas St W',
    Highlight: '0-4,5-8',
    Cursor: 0,
    Description: 'Toronto, ON, M6J 1X1',
    Next: 'Retrieve',
  },
  {
    Id: 'CA|CP|A|802612133',
    Text: '1096 Dundas St W',
    Highlight: '0-4,5-8',
    Cursor: 0,
    Description: 'Toronto, ON, M6J 1X1',
    Next: 'Retrieve',
  },
  {
    Id: 'CA|CP|A|3571270',
    Text: '1096 Du Nickel St',
    Highlight: '0-4,5-9',
    Cursor: 0,
    Description: "Val-d'Or, QC, J9P 5W8",
    Next: 'Retrieve',
  },
  {
    Id: 'CA|CP|A|22112519',
    Text: '1096 Du Nickel St',
    Highlight: '0-4,5-9',
    Cursor: 0,
    Description: 'Laterrière, QC, G7N 0G5',
    Next: 'Retrieve',
  },
  {
    Id: 'CA|CP|A|17308983',
    Text: '1096 Diltz Rd',
    Highlight: '0-4',
    Cursor: 0,
    Description: 'Dunnville, ON, N1A 2W2',
    Next: 'Retrieve',
  },
  {
    Id: 'CA|CP|A|13615324',
    Text: '1096 Shore Pine Close',
    Highlight: '0-4',
    Cursor: 0,
    Description: 'Duncan, BC, V9L 0C4',
    Next: 'Retrieve',
  },
];

const retrieve = {
  Id: 'CA|CP|A|5562236',
  DomesticId: '5562236',
  Language: 'ENG',
  LanguageAlternatives: 'ENG,FRE',
  Department: '',
  Company: '',
  SubBuilding: '',
  BuildingNumber: '1096',
  BuildingName: '',
  SecondaryStreet: '',
  Street: 'Dunbarton Rd',
  Block: '',
  Neighbourhood: '',
  District: '',
  City: 'Pickering',
  Line1: '1096 Dunbarton Rd',
  Line2: '',
  Line3: '',
  Line4: '',
  Line5: '',
  AdminAreaName: '',
  AdminAreaCode: '',
  Province: 'ON',
  ProvinceName: 'Ontario',
  ProvinceCode: 'ON',
  PostalCode: 'L1V 3Z9',
  CountryName: 'Canada',
  CountryIso2: 'CA',
  CountryIso3: 'CAN',
  CountryIsoNumber: '124',
  SortingNumber1: '',
  SortingNumber2: '',
  Barcode: '',
  POBoxNumber: '',
  Label: '1096 Dunbarton Rd\nPICKERING ON L1V 3Z9\nCANADA',
  Type: 'Residential',
  DataLevel: 'Premise',
  AcIlrc: 'R',
  AcUm: '0',
};
