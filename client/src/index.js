import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './components/App';
import Admin from './components/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
