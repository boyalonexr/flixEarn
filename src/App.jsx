import { useState } from 'react'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
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
     <Footer />
     <MobileNavBar 
      toggleActivePopup = {toggleActivePopup}
      active = {active}
     />
    </>
  )
}

export default App
