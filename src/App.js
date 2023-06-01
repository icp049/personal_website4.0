import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'

function App() {
  return (
    <div>
      <Home />
      <Navbar />
      <About />
      <Resume />
     
    </div>
  );
}

export default App;