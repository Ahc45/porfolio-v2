import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      
      {/* Valorant Background Elements */}
      <div className="valorant-bg-elements">
        <div className="tactical-shapes">
          <div className="tactical-shape tactical-shape-1"></div>
          <div className="tactical-shape tactical-shape-2"></div>
          <div className="tactical-shape tactical-shape-3"></div>
          <div className="tactical-shape tactical-shape-4"></div>
        </div>
        <div className="scan-lines"></div>
        <div className="global-bg-text developer-text">DEVELOPER</div>
        <div className="global-bg-text engineer-text">ENGINEER</div>
        <div className="global-bg-text fullstack-text">FULLSTACK</div>
      </div>
      
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
