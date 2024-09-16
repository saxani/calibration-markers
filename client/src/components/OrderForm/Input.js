const Input = ({ name }) => {
  return (
    <div style={{ margin: '20px' }}>
      <label>
        <span style={{ display: 'block' }}>{name}:</span>
        <input />
      </label>
    </div>
  );
};

export default Input;
