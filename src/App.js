import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Footer from './components/Footer.js'



function App() {
  return (
    <div>  
      <Home />
      <Navbar />
     <About/>
      <Projects />
      <Resume/>
      <Footer/> 
    </div>
  );
}

export default App;