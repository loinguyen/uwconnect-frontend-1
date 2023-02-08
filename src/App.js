import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { message: "Max is cool" };

  componentDidMount() {
    fetch('http://127.0.0.1:5000/users/ping_db')
      .then(response => response.json())
      .then(data => this.setState({ message: data[0].Test }));
  }

  render() {
    const { message } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          { message ? <p>{ message }</p> : <p>Loading...</p> }
        </header>
      </div>
    );
  }
}

export default App;
