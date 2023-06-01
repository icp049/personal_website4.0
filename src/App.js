import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <Home />
      <Navbar />
      <About />
      <Resume />
      <Projects />
     
    </div>
  );
}

export default App;