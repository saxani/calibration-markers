import Image from './Image';

import Button from './Button';
import layoutStyles from '../styles/common/layout.module.scss';
import markersStyles from '../styles/orderMarkers.module.scss';

const OrderMarkers = ({ scrollToForm }) => {
  const handleClick = () => {
    scrollToForm();
  };

  return (
    <section className={layoutStyles.content}>
      <div
        className={`${layoutStyles.sectionContainer} ${markersStyles.container}`}
      >
        <div className={layoutStyles.left}>
          <Image filename='markers_2' extension='png' />
        </div>
        <div className={layoutStyles.right}>
          <h3 style={{ marginBottom: '15px', marginTop: 0 }}>
            Order Cutimed calibration markers
          </h3>
          <p>
            These markers enable automatic image calibration for wound
            measurement with Cutimed Wound Navigator. This allows you to
            interactively and accurately measure the size of the wound.
          </p>
          <Button text='Order Calibration Markers' handleClick={handleClick} />
        </div>
      </div>
    </section>
  );
};

export default OrderMarkers;
