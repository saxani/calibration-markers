import appBadge from '../assets/AppBadge.svg';
import google from '../assets/googleplay@2x.png';
import apple from '../assets/appstore@2x.png';
import mobilePhone from '../assets/RightColumn@2x.png';
import Logo from './Logo';
import heroStyles from '../styles/hero.module.scss';
import layoutStyles from '../styles/common/layout.module.scss';

const Hero = () => {
  return (
    <section className={heroStyles.container}>
      <div className={layoutStyles.content}>
        <div className={layoutStyles.sectionContainer}>
          <div className={layoutStyles.left}>
            <div className={heroStyles.title}>
              <Logo src={appBadge} width={106} height={106} />
              <h2 className={heroStyles.headingText}>
                Your <span className={layoutStyles.pinkAlt}>smart app</span> for{' '}
                <span className={layoutStyles.pinkAlt}>individual</span> wound
                care
              </h2>
            </div>
            <p className={heroStyles.subTitle}>
              Quick and intuitive support in the right product range for chronic
              wounds
            </p>
            <p>
              Cutimed Wound Navigator is a simple and intuitive wound app that
              helps choose appropriate wound care products for treating advanced
              wounds wherever you are, even when you're offline. You can
              interactively measure wound size, share information and product
              range with other healthcare professionals.
            </p>
            <div className={heroStyles.iconContainer}>
              <a
                href='https://play.google.com/store/apps/details?id=io.imito.cutimed'
                rel='noreferrer'
                target='_blank'
              >
                <Logo src={google} width={202} height={59} marginRight={38} />
              </a>
              <a
                href='https://apps.apple.com/de/app/cutimed-wound-navigator/id1549888706'
                rel='noreferrer'
                target='_blank'
              >
                <Logo src={apple} width={202} height={59} />
              </a>
            </div>
          </div>
          <div className={layoutStyles.right}>
            <img
              src={mobilePhone}
              style={{ height: '732px', width: '586px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
