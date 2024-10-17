import { useRef } from 'react';

import Header from './Header';
import Hero from './Hero';
import OrderMarkers from './OrderMarkers';
import HowTo from './HowTo';
import OrderForm from './OrderForm';

import layoutStyles from '../styles/common/layout.module.scss';

function App() {
  const scrollRef = useRef(null);

  const scrollToForm = () => {
    if (scrollRef.current) {
      window.scrollTo({
        top: scrollRef.current.offsetTop + 50,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={layoutStyles.container}>
      <Header scrollToForm={scrollToForm} />
      <Hero />
      <OrderMarkers scrollToForm={scrollToForm} />
      <HowTo />
      <OrderForm scrollRef={scrollRef} />
    </div>
  );
}

export default App;
