import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Imahe from './components/Imahe'
import Travel from './components/Travel'


function App() {
  return (
    <div>
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Imahe />
      <Travel />
     
    </div>
  );
}

export default App;