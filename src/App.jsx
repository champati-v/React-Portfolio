import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ParticlesComponent from './components/Particle'
import './App.css';
import About from './components/About'

const App = () => {
  return (
    <div>
    <ParticlesComponent id="particles" />
    <Header/>
    <div className='pt-5 relative'>
      <Hero/>
    </div>
    <About/>
    <Projects/>
    </div>
  )
}

export default App