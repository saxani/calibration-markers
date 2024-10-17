import Image from './Image';
import Button from './Button';

import layoutStyles from '../styles/common/layout.module.scss';
import headerStyles from '../styles/header.module.scss';

const Header = ({ scrollToForm }) => {
  const handleClick = () => {
    scrollToForm();
  };

  return (
    <div className={layoutStyles.content}>
      <div className={headerStyles.container}>
        <div className={headerStyles.logoWrapper}>
          <Image filename='essity_logo_colour' extension='png' />
        </div>
        <Button text='Order Calibration Markers' handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Header;
