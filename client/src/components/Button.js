import ClipLoader from 'react-spinners/ClipLoader';

import buttonStyles from '../styles/button.module.scss';

const Button = ({
  text,
  secondary = false,
  handleClick,
  submit = false,
  loading,
}) => {
  return (
    <button
      onClick={handleClick}
      className={
        secondary
          ? `${buttonStyles.large} ${buttonStyles.common} ${buttonStyles.secondary}`
          : `${buttonStyles.large} ${buttonStyles.common}`
      }
    >
      {text} {submit && <ClipLoader color='#fff' loading={loading} size={14} />}
    </button>
  );
};

export default Button;
