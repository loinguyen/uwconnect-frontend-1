import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import GetLoginForm from './route/login/loginForm';
import GetSignupForm from './route/signup/signupForm';
import Home from './route/home/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
  Link
} from "react-router-dom";
  

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<div className='App-header'><GetLoginForm /></div>}/>
        <Route exact path='/home' element={<div className='App-header'><Home /></div>}/>
        <Route exact path='/login' element={<div className='App-header'><GetLoginForm /></div>}/>
        <Route exact path='/register' element={<div className='App-header'><GetSignupForm /></div>}/>
      </Routes>
    </Router>
    )
  // <div className='App-header'><GetSignupForm /></div>;
}

export default App;
