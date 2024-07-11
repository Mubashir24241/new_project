// src/App.js
import React from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Overview />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
