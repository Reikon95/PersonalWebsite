import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Techs from './components/Techs';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Techs/>
      <FAQ/>
    </div>
  );
}

export default App;
