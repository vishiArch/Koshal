import React from 'react'
import Menu from './components/Menu'
import Project from './components/Project'
import About from './components/About'
import Target from './components/Target'
import Invest from './components/Invest'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Menu/>
      <Project/>
      <About/>
      <Target/>
      <Invest/>
      <Footer/>
    </div>
  )
}

export default App