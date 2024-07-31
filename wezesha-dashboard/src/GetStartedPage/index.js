// import React from 'react';
// import './index.css';
// import wezeshalogo from '../Images/wezeshalogo.png';
// import cowimage from '../Images/cowimage.png'
// import { useNavigate } from 'react-router-dom';
  

// function GetStartedPage() {
//     const Navigate=useNavigate()
//   const cooperative=()=>{
//     Navigate('/WelcomePage')
//   }
//   return (
//       <div className="inner-container">
//        <div className='cow'>
//            <img alt="cow" className='cow-image' src={cowimage}/>
//         </div>
//         <div className="content-section">
//         <img src={wezeshalogo} className='logo' alt='logo'/>
//           <h2 className='h2'>Get Started with Wezesha</h2>
//           <p className='p'>Choose your service option</p>
//           <div className="button-group">
//             <button to="/cooperative" className="button primary" >Cooperative</button>

//             <button className="button secondary" onClick={cooperative} >Sacco</button>
//           </div>
//         </div>
//       </div>
//   );
// }

// export default GetStartedPage;
import React from 'react';
import './index.css';
import wezeshalogo from '../Images/wezeshalogo.png';
import cowimage from '../Images/cowimage.png'
import { useNavigate } from 'react-router-dom';
 
function GetStartedPage() {
  const navigate= useNavigate()
  const sacco= ()=>{
    navigate('/WelcomePage')
  }
  return (
    <div className="get-started-container">
        <div >
            <img alt="cow" className='cow-image' src={cowimage} />
        </div>
        <div className='start'>
            <img src={wezeshalogo} className='logo' alt='logo'/>
        
        <h2 className='getStarted'>Get Started with Wezesha</h2>
        <p className='service'>Choose your service option</p>
        <div className="button-container">
          <button  className="service-button-cooperative" >Cooperative</button>
          <button className="service-button-sacco" onClick={sacco}>SACCO</button>
        </div>
      </div>
      </div>
  );
}

export default GetStartedPage;
