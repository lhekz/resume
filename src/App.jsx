import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav/Nav'
import Aboutme from './components/about/Aboutme'
import Contribution from './components/contributions/Contribution'
import Newcontributors from './components/NewContributors/Newcontributors'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    
      <div>
        <Nav/>
        <Aboutme/>
        <Contribution/>
        <Newcontributors/>
        <Portfolio/>
        <Footer/>
      
      </div>
      
     
      
    
  )
}

export default App
