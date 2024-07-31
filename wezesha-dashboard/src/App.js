
// import React from 'react';
// import './App.css';
// import WelcomePage from './WelcomePage';
// import GetStartedPage from './GetStartedPage';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';



// function App() {
//     return (
//         <Router>
//             <div className='App'>
//                 <Routes>
//                   <Route path='/' element={<GetStartedPage/>}/> 
//                   <Route path="/WelcomePage" element={<WelcomePage/>}/>
//                   <Route path= "/" element ={<WelcomePage/>}/>
//                 </Routes>
//                 </div>   
//         </Router>
//     );
// }
// export default App;

import React from 'react';
import './App.css';
import WelcomePage from './WelcomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import GetStartedPage from './GetStartedPage';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
  <Router>
    <div className='App'>
  <Routes>
    <Route path='LoginPage' element ={<LoginPage/>}/>
    <Route path='/' element={<GetStartedPage/>}/> 
    <Route path="/WelcomePage" element={<WelcomePage/>}/>
    <Route path= "/" element ={<WelcomePage/>}/>
     <Route path= "/SignUpPage" element ={<SignUpPage/>}/>
  </Routes>
    </div>
  </Router>
  );
}

export default App;
