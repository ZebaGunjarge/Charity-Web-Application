import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from './components/DonationHeader.jsx';
import header from './components/header.css';


import Home from './components/Home.jsx';
import hero from './components/hero.css';

import About from './components/About.jsx';
import about from './components/about.css';

import Donation from './components/Donation';
import NaturalCalamity from './components/NaturalCalamity';
//import FormRadio1 from './components/FormRadio1.js';
import Education from './components/Education';
import Medical from './components/Medical';
import Animal from './components/Animal';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Home />

        <header />
        <hero />

        <About />
        <about />
        
        <NaturalCalamity />
        <Education />
        <Medical />
        <Animal />
        <Donation />
      </div>
    );
  }
}

export default App;
