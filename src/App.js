import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './GetHelloMessage.js';
import GetMessage from './GetHelloMessage.js';
import GetLoginForm from './loginForm';
import GetSignupForm from './signupForm';
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
        <Route exact path='/login' element={<div className='App-header'><GetLoginForm /></div>}/>
        <Route exact path='/register' element={<div className='App-header'><GetSignupForm /></div>}/>
      </Routes>
    </Router>
    )
  // <div className='App-header'><GetSignupForm /></div>;
}

export default App;
