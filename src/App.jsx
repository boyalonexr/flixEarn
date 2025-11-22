import { useState } from 'react'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import Section1 from './Components/Section1'
import Subscription from './Components/Subscription'
import Partners from './Components/Partners'
import Footer from './Components/Footer'
import './App.css'
import MobileNavBar from './Components/MobileNavBar'


function App() {
  const [ active, setActive] = useState(false)

  function toggleActivePopup(type ) {
      setActive(prev => (prev === type ? null : type))
  }


  return (
    <>
     <Header 
      toggleActivePopup = {toggleActivePopup}
      active = {active}
     />
     <Navigation 
      active = {active}
     />
     <Hero />
     <Section1 />
     <Subscription />
     <Partners />
     <Footer />
     <MobileNavBar 
      toggleActivePopup = {toggleActivePopup}
      active = {active}
     />
    </>
  )
}

export default App
