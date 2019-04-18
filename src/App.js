import React, { Component } from 'react';
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import ContentContainer from './components/Content'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Navbar />
        <ContentContainer />
      </div>
    );
  }
}

export default App;
