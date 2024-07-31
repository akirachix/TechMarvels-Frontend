import React from 'react';
import './index.css';
import wezeshalogo from '../Images/wezeshalogo.png'
import manwithphone from '../Images/manwithphone.png'
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate= useNavigate()
  const getStarted= ()=>{
    navigate('/SignUpPage')
    const getStarted=
    navigate('/SignUpPage')
  }
  const navigates=useNavigate()
  const clickHere=()=>{
  navigate('/LoginPage')
  }
  return (
    <div className="container">
      <div className="image-section">
        <img src={manwithphone} alt="Man using phone and credit card" />
      </div>
      <div className="content-section">
        <img src={wezeshalogo} alt="Wezesha Logo" id="logo" />
        <h1>Welcome To Wezesha</h1>
        <p>Your partner in Sacco record keeping</p>

        <button className="button" onClick= {getStarted}>Get Started</button>

        <p className="login-link" onClick={clickHere}>
          Already have an account? <a href="text">Click Here</a>
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;