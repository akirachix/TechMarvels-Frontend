import React, { useState } from 'react';
import './index.css';
import wezeshalogo from '../Images/wezeshalogo.png';
import moneyphone from '../Images/moneyphone.png';
import { useNavigate } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({
    saccoName: '',
    saccoEmail: '',
    phoneNumber: '',
    saccoID: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match!";
      isValid = false;
    }

    if (formData.phoneNumber.length < 10) {
      errors.phoneNumber = "Please enter a valid phone number";
      isValid = false;
    }

    if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      alert("Account created successfully!");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="logo">
        <img src={wezeshalogo} alt="Wezesha Logo" id="logo" />
        </div>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="saccoName"
            placeholder="Sacco Name"
            required
            value={formData.saccoName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="saccoEmail"
            placeholder="Sacco Email Adress"
            required
            value={formData.saccoEmail}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          <input
            type="text"
            name="saccoID"
            placeholder="Sacco ID"
            required
            value={formData.saccoID}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="image-container">
      <img src={moneyphone} alt="Money coming out of phone" />
      </div>
    </div>
  );
}

export default App;