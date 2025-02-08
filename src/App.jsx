import { useState } from 'react'
import Home from './Pages/Home/Home'
import Booking from './Pages/Booking/Booking'
import UnderConstruction from './Pages/UnderConstruction/UnderConstruction'
import { Route, Routes } from 'react-router-dom'



function App() {
    
  

  return (
    <>
    <Routes>
      <Route path="/Reservation" element={<Booking ></Booking>}/>
      
      </Routes>
    <UnderConstruction/>
    </>
  )
}

export default App
