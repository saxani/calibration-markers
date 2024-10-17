import { useState, useEffect } from 'react';

import orderStyles from '../../styles/order.module.scss';

const Dropdown = ({
  name,
  data,
  width = '100%',
  required = false,
  value,
  handleChange,
  param,
}) => {
  // const [val, setVal] = useState('no-option');

  // useEffect(() => {
  //   setVal(received);
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

      <select
        name={name}
        className={orderStyles.dropdown}
        value={value}
        onChange={(e) => onChange(e)}
      >
        <option disabled value='no-option'>
          {' '}
          -- Select an option --{' '}
        </option>

        {data.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
