import Button from './Button';
import Logo from './SVGLogo';
import Video from './Video';
import summary from '../assets/summary@2x.png';
import layoutStyles from '../styles/common/layout.module.scss';
import howtoStyles from '../styles/howto.module.scss';

const HowTo = () => {
  const handleClick = () => {
    window.open('https://www.youtube.com/@Cutimed');
  };

  return (
    <section className={howtoStyles.container}>
      <div className={layoutStyles.content}>
        <h3 className={howtoStyles.title}>
          Here's how the Cutimed Wound Navigator app works:
        </h3>
        <div
          className={`${layoutStyles.sectionContainer} ${howtoStyles.flexContainer}`}
        >
          <div className={layoutStyles.left}>
            <h3 className={howtoStyles.smallTitle}>
              Here's how the Cutimed Wound Navigator app works:
            </h3>
            <p className={howtoStyles.subTitle}>
              The Cutimed Wound Navigator App gives you a product range for
              individual wound care in three easy steps:
            </p>
            <ol className={howtoStyles.steps}>
              <li>
                Measure:{' '}
                <span className={howtoStyles.altBlue}>
                  Interactively determine the size of the wound using the camera
                  function and a calibration marker.
                </span>
              </li>
              <li>
                Select: 
                <span className={howtoStyles.altBlue}>
                  Enter all relevant wound criteria: wound status, amount of
                  exudate, wound depth, and wound&nbsp;type.
                </span>
              </li>
              <li>
                Find: 
                <span className={howtoStyles.altBlue}>
                  All suitable wound care products are displayed.
                </span>
              </li>
            </ol>
          </div>
          <div className={layoutStyles.right}>
            <Video />
            <Button
              text='VISIT THE CUTIMED YOUTUBE CHANNEL'
              secondary={true}
              handleClick={handleClick}
            />
          </div>
        </div>
        <div className={howtoStyles.summaryWrapper}>
          <Logo
            src={summary}
            width={82}
            height={82}
            marginRight={28}
            marginLeft={-33}
          />
          <p className={howtoStyles.summary}>
            App results can be summarized in a wound report that you can share
            with others!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowTo;
