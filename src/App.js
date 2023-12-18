import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Social from './components/Social';

import About from './components/About';
import Project from './components/Project';
import Experience from './components/Experience';
import Chat from './components/Chat';
import Footeur from './components/Footeur';

function App() {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-black to-gray-700'>
     <Navbar/>
     <Chat/>
     <Home/>
     <About/>
     <Project/>
     <Experience/>
     <Footeur/>
     <Social/>
    </div>
  );
}

export default App;
