import markers from '../assets/markers@2x.png';
import Button from './Button';
import layoutStyles from '../styles/common/layout.module.scss';

const OrderMarkers = () => {
  return (
    <section className={layoutStyles.content}>
      <div className={layoutStyles.sectionContainer}>
        <div className={layoutStyles.left}>
          <img src={markers} />
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
          <Button text='Order Calibration Markers' />
        </div>
      </div>
    </section>
  );
};

export default OrderMarkers;
