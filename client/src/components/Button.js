import buttonStyles from '../styles/button.module.scss';

const Button = ({ text, secondary = false, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={
        secondary
          ? `${buttonStyles.large} ${buttonStyles.common} ${buttonStyles.secondary}`
          : `${buttonStyles.large} ${buttonStyles.common}`
      }
    >
      {text}
    </button>
  );
};

export default Button;
