import Image from './Image';
import Button from './Button';

import layoutStyles from '../styles/common/layout.module.scss';
import headerStyles from '../styles/header.module.scss';

const Header = () => {
  return (
    <div className={layoutStyles.content}>
      <div className={headerStyles.container}>
        <Image filename='essity_logo_colour' extension='png' />
        <Button text='Order Calibration Markers' />
      </div>
    </div>
  );
};

export default Header;
