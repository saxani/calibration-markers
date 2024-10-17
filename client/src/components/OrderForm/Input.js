import orderStyles from '../../styles/order.module.scss';

const Input = ({
  name,
  width = '100%',
  required = false,
  value,
  param = '',
  handleChange,
  className = '',
}) => {
  const onChange = (e) => {
    const data = {};
    data[param] = e.target.value;
    handleChange(data);
  };

  return (
    <div style={{ width: width, marginBottom: '15px' }} className={className}>
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
