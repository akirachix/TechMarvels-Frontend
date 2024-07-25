import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 
import wezeshalogo from '../Images/wezeshalogo.png'
import blupic from '../Images/bluepic.png'; 

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    cooperativeName: '',
    cooperativeEmail: '',
    phoneNumber: '',
    cooperativeID: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you can add your sign-up logic (API call, etc.)
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <img src={wezeshalogo} alt="Wezesha Logo" className="logo" />
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="cooperativeName"
            placeholder="Cooperative Name"
            value={formData.cooperativeName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="cooperativeEmail"
            placeholder="Cooperative Email Address"
            value={formData.cooperativeEmail}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="cooperativeID"
            placeholder="Cooperative ID"
            value={formData.cooperativeID}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className='signupText'>Already have an account? <Link to="/login" className='links'>Login</Link></p>
      </div>
      <div className="signup-image">
        <img src={blupic} alt="Welcome to Wezesha" />
      </div>
    </div>
  );
};

export default SignUpForm;