// src/components/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css'; // Styling for the page

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      setErrorMessage('Please fill in all fields');
    } else {
      // Basic check - in a real app, you'd send a request to the backend
      if (email === 'test@example.com' && password === 'password123') {
        alert('Login Successful!');
        setErrorMessage('');
      } else {
        setErrorMessage('Invalid email or password');
      }
    }
  };

  return (
    <div className="login-page">
      <h2>LinkedIn Clone</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage;
