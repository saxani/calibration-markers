import { useState } from 'react';

const Login = ({ updateAuth }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleClick = async () => {
    const url =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000/login'
        : '/login';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: password }),
    });

    const data = await response.json();

    if (data.matches) {
      updateAuth();
      setError(false);
      setPassword('');
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div>
      <p>Enter the Admin Password</p>
      <p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type='password'
        />
      </p>
      <button onClick={handleClick}>Submit</button>
      {error && <p style={{ color: 'red' }}>Password incorrect</p>}
    </div>
  );
};

export default Login;
