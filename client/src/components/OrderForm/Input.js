import { useState, useEffect } from 'react';

import orderStyles from '../../styles/order.module.scss';

const Input = ({
  name,
  width = '100%',
  required = false,
  received = '',
  value,
  param = '',
  handleChange,
}) => {
  // const [value, setValue] = useState('');

  // useEffect(() => {
  //   setValue(received);
  // }, [received]);

  const onChange = (e) => {
    const data = {};
    data[param] = e.target.value;
    handleChange(data);
  };

  return (
    <div style={{ width: width, marginBottom: '15px' }}>
      <label htmlFor={name} style={{ display: 'block', fontSize: '16px' }}>
        {name}
        {required ? '*' : ''}
      </label>
      <input
        className={orderStyles.input}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;
