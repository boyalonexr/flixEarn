import { useState } from 'react'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import './App.css'


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
      toggleActivePopup = {toggleActivePopup}
      active = {active}
     />
     <Footer 
      toggleActivePopup = {toggleActivePopup}
      active = {active}
     />
    </>
  )
}

export default App
