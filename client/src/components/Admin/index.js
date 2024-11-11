import { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

import layoutStyles from '../../styles/common/layout.module.scss';

const Admin = () => {
  const [auth, setAuth] = useState(true);

  const updateAuth = () => {
    setAuth(true);
  };

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <h2>Inventory Management</h2>
        {!auth && <Login updateAuth={updateAuth} />}
        {auth && <Dashboard />}
      </div>
    </div>
  );
};

export default Admin;
