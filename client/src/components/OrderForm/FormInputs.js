import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import Input from './Input';
import Dropdown from './Dropdown';
import SearchAddress from './SearchAddress';
import AddressOptions from './AddressOptions';
import Button from '../Button';

const FormInputs = ({
  handleChange,
  customer,
  sendData,
  addressOptions,
  onSelect,
  error,
  handleSubmit,
  showAddressOptions,
  loading,
}) => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleCaptchaChange = async (captcha) => {
    const url =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/captcha'
        : '/captcha';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ captcha: captcha }),
    });

    const data = await response.json();

    if (data.status.success === true) {
      setAuthenticated(true);
    }
  };

  return (
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
      {!authenticated && (
        <ReCAPTCHA
          style={{ marginBottom: '30px' }}
          sitekey='6Leb02IqAAAAAJ59TEeznM7IscAf9PA_noz7W376'
          onChange={handleCaptchaChange}
        />
      )}
      {authenticated && (
        <div>
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
          <div style={{ display: 'flex', gap: '30px' }}>
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
          <div style={{ display: 'flex', gap: '30px', marginBottom: '20px' }}>
            <Input
              name='# of sheets (each has 15-markers)'
              width='326px'
              value={customer.quantity}
              param='quantity'
              handleChange={handleChange}
            />
          </div>
          {error && (
            <p style={{ color: 'red', fontSize: '18px', fontWeight: '700' }}>
              * Make sure all required fields are filled out
            </p>
          )}
          <Button
            text='Submit Order'
            handleClick={handleSubmit}
            submit={true}
            loading={loading}
          />
        </div>
      )}
    </div>
  );
};

export default FormInputs;

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
