// import testSearch from './testSearch';
import { useState, useEffect } from 'react';

import { useDebouncedCallback } from 'use-debounce';

import orderStyles from '../../styles/order.module.scss';

const SearchAddress = ({ sendData, received = '', value, handleChange }) => {
  // const [value, setValue] = useState('');

  // useEffect(() => {
  //   setValue(received);
  // }, [received]);

  const debounced = useDebouncedCallback((newVal) => {
    sendData(newVal);
  }, 600);

  const onChange = (e) => {
    debounced(e.target.value);
    // setValue(e.target.value);
    handleChange({ address1: e.target.value });
  };

  return (
    <div style={{ width: '100%', marginBottom: '15px' }}>
      <label htmlFor='Address' style={{ display: 'block', fontSize: '16px' }}>
        Address*
      </label>
      <input
        className={orderStyles.input}
        placeholder='Start typing a street address or postal code...'
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default SearchAddress;
