import React from 'react';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import FlightSearch from './components/FlightSearch';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
   <Header /> 
   <MainBanner />
   <FlightSearch />
   <HowItWorks /> 
   <Footer />
    </div>
  );
}

export default App;
