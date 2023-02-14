import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './GetHelloMessage.js';
import GetMessage from './GetHelloMessage.js';
import GetLoginForm from './loginForm';

function App() {
  return <div className='App-header'><GetLoginForm /></div>;
}

export default App;
