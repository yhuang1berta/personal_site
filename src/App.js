import React from 'react';
import "./App.css";
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Skills from './components/Skills/Skills';
import Qualification from './components/Qualification/Qualification';

const App = () => {
  return (
    <div>
      <Header />
      <div className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
      </div>
      {/* <h1 style={{fontSize: "100px", textAlign: "center"}}>Even though I think typing on Whatsapp is easier</h1> */}
    </div>
  );
};

export default App;