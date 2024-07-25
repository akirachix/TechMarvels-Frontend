import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 
import wezeshalogo from '../Images/wezeshalogo.png'; 
import blupic from '../Images/bluepic.png'; 

const LoginForm = () => {
  const [cooperativeName, setCooperativeName] = useState('');
  const [cooperativeId, setCooperativeId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted', { cooperativeName, cooperativeId, password });
    
  };

  return (
    <div className="loginContent">
      <div className="login-container">
        <div className="login-form">
          <img src={wezeshalogo} alt="Wezesha Logo" className="logo" />
          <h2>Login to your account</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Cooperative Name"
              value={cooperativeName}
              onChange={(e) => setCooperativeName(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Cooperative ID"
              value={cooperativeId}
              onChange={(e) => setCooperativeId(e.target.value)}
              required
            />
            

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className='login-button'>Login</button>
          </form>
          <p className='loginText'>Don't have an account? <Link to="/signup" className='links'>Sign Up</Link></p>
        </div>
        {/* <div className='images'> */}
        <div className="login-image">
          <img src={blupic} alt="Welcome to Wezesha" />
        </div>
        {/* <div>
          <img src={wezeshalogo} alt='wezesha' className='wezeshaLogo'/>
          <p>Welcome to Wezesha</p>
        </div> */}
        {/* </div> */}

      </div>
    </div>
  );
};

export default LoginForm;