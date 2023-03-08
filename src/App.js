//Global css must defined at the top and let it get overwritten
import "rsuite/dist/rsuite.min.css";

import './styles/App.css';


//Our stuffs
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import GetLoginForm from './route/login/loginForm';
import GetSignupForm from './route/signup/signupForm';
import GetProfileHobbies from './route/profile/hobbies';
import GetIdentity from './route/profile/identity';
import GetMakePublic from './route/profile/makePublic';
import Home from './route/home/Home';
import Profile from "./route/profile/profile";

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
        <Route exact path='/' element={<div className='App-header'><Profile /></div>}/>
        <Route exact path='/home' element={<div className='App-header'><Home /></div>}/>
        <Route exact path='/login' element={<div className='App-header'><GetLoginForm /></div>}/>
        <Route exact path='/register' element={<div className='App-header'><GetSignupForm /></div>}/>
        <Route exact path='/profile/identity' element={<div className='App-header'><GetIdentity /></div>}/>
        <Route exact path='/profile/makePublic' element={<div className='App-header'><GetMakePublic /></div>}/>
      </Routes>
    </Router>
    )
  // <div className='App-header'><GetSignupForm /></div>;
}

export default App;
