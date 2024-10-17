import appBadge from '../assets/AppBadge.svg';
import SVGLogo from './SVGLogo';
import Image from './Image';
import heroStyles from '../styles/hero.module.scss';
import layoutStyles from '../styles/common/layout.module.scss';

const Hero = () => {
  return (
    <section className={heroStyles.container}>
      <div className={layoutStyles.content}>
        <div className={layoutStyles.sectionContainer}>
          <div className={layoutStyles.left}>
            <div className={heroStyles.title}>
              <div className={heroStyles.logoWrapper}>
                <SVGLogo src={appBadge} />
              </div>
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
              <div className={heroStyles.icon}>
                <a
                  href='https://play.google.com/store/apps/details?id=io.imito.cutimed'
                  rel='noreferrer'
                  target='_blank'
                >
                  <Image filename='googleplay' extension='png' />
                </a>
              </div>
              <div className={heroStyles.icon}>
                <a
                  href='https://apps.apple.com/de/app/cutimed-wound-navigator/id1549888706'
                  rel='noreferrer'
                  target='_blank'
                >
                  <Image filename='appstore' extension='png' />
                </a>
              </div>
            </div>
          </div>
          <div className={layoutStyles.right}>
            <div className={heroStyles.phoneWrapper}>
              <Image filename='app' extension='png' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
