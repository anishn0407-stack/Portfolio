import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Achievements from './components/Achievements'
import Connect from './components/Connect'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Achievements></Achievements>
      <Projects></Projects>
      <About></About>
      <Connect></Connect>
    </>
  )
}

export default App
