import { useState, useRef } from 'react';

import Header from './Header';
import Hero from './Hero';
import OrderMarkers from './OrderMarkers';
import HowTo from './HowTo';
import OrderForm from './OrderForm';

import layoutStyles from '../styles/common/layout.module.scss';

function App() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState('');
  const scrollRef = useRef(null);

  const scrollToForm = () => {
    if (scrollRef.current) {
      window.scrollTo({
        top: scrollRef.current.offsetTop + 50,
        behavior: 'smooth',
      });
    }
  };

  const handleSubmit = () => {
    if (password === 'Pharmad2024') {
      setAuth(true);
    }
  };

  if (!auth) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <p>Input password to view site</p>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={{ marginTop: '20px' }} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
  }

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
