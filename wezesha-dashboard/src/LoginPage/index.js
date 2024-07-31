import React, { useState } from 'react';
import './index.css';
import wezeshalogo from '../Images/wezeshalogo.png'
import moneyphone from '../Images/moneyphone.png';

function LoginPage() {
  const [saccoName, setSaccoName] = useState('');
  const [saccoId, setSaccoId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log('Login submitted', { saccoName, saccoId, password, rememberMe });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <img src={wezeshalogo} alt="wezeshalogo" className="logo" />
        <h2 className='login-account'>Login to your account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Sacco Name:</label>
            <input
              type="text"
              value={saccoName}
              onChange={(e) => setSaccoName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Sacco ID:</label>
            <input
              type="text"
              value={saccoId}
              onChange={(e) => setSaccoId(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-options">
            <a href="#forgot-password">Forgot Password?</a>
            <label className="remember-me">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="#signup">SignUp</a>
        </p>
      </div>
      <div className="image-container">
        <img src={moneyphone} alt="Money coming out of phone" className="money-phone" />
      </div>
    </div>
  );
}

export default LoginPage;
