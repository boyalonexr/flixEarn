import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react'
import Header from './Components/Header'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import MovieDetails from './Components/MovieDetails'
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

     <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path="/movie/:key" element={<MovieDetails />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
     </Routes>

     <MobileNavBar 
      toggleActivePopup = {toggleActivePopup}
      active = {active}
     />
    </>
  )
}

export default App
