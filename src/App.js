import React, { Component } from 'react';
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Navbar />
      </div>
    );
  }
}

export default App;
