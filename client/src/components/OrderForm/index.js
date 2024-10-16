import { useState } from 'react';
import FormInputs from './FormInputs';

import layoutStyles from '../../styles/common/layout.module.scss';
import orderStyles from '../../styles/order.module.scss';

const OrderForm = ({ scrollRef }) => {
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
    quantity: 1,
  });

  const [addressOptions, setAddressOptions] = useState('');
  const [showAddressOptions, setShowAddressOptions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function sendData(val) {
    const url =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/search'
        : '/search';

    const response = await fetch(url, {
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

    const url =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/get-address'
        : '/get-address';

    const response = await fetch(url, {
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
    setLoading(true);
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
      const url =
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:5000/submit'
          : '/submit';

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ customer }),
      });

      const data = await response.json();

      if (data.response === 'ok') {
        setLoading(false);
        alert(
          'Your submission has been received. You will be notified once your markers have been sent!'
        );

        setCustomer({
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
          quantity: 1,
        });
      }
    }
  };

  return (
    <section className={layoutStyles.content} ref={scrollRef}>
      <div className={orderStyles.container}>
        <h3>Cutimed calibration marker order form</h3>
        <p className={orderStyles.paragraph}>
          To ensure accurate wound measurement using the Cutimed Wound Navigator
          app, you'll need to order our calibration markers. These markers
          enable automatic image calibration, allowing you to measure wound size
          interactively and precisely. Complete the form below to request your
          calibration markers and enhance your wound care assessments.
        </p>
        <FormInputs
          handleChange={handleChange}
          customer={customer}
          sendData={sendData}
          addressOptions={addressOptions}
          onSelect={onSelect}
          error={error}
          handleSubmit={handleSubmit}
          showAddressOptions={showAddressOptions}
          loading={loading}
        />
      </div>
    </section>
  );
};

export default OrderForm;
