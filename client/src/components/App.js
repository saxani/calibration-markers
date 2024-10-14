import Header from './Header';
import Hero from './Hero';
import OrderMarkers from './OrderMarkers';
import HowTo from './HowTo';
import OrderForm from './OrderForm';

import layoutStyles from '../styles/common/layout.module.scss';

function App() {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <Hero />
      <OrderMarkers />
      <HowTo />
      <OrderForm />
    </div>
  );
}

export default App;
