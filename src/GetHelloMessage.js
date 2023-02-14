import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function GetMessage() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/dummy/ping_db")
      .then(res => res.json())
      .then(data => setMessage(data[0].Test))
  })

  return (
    <div className="App">
      <header className="App-header">
        { message ? <p>{ message }</p> : <p>Loading...</p> }
      </header>
    </div>
  );
}

export default GetMessage;
