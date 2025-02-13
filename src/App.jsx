import { useState } from 'react'
import React from 'react'
import Home from './Pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Booking from './Pages/Booking/Booking'
import ConfirmedBooking from './components/ConfirmedBookings/ConfirmedBooking'
import UnderConstruction from './Pages/UnderConstruction/UnderConstruction'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { FetchAPI, submitAPI } from './Api/FetchAPI'


function App() {

const updateTimes = (availableTimes, date) => {
  const response = FetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...FetchAPI(new Date()),
];


  const [availableTimes, dispatchOnDateChange] = React.useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const navigate = useNavigate();

  const submitData = (formData) => {
    const response = submitAPI(formData);
    if (response) navigate("/confirmedBooking");
  };







    
  

  return (
    <>
    <Header/>
    <main>
    <Routes>
  <Route path="/Reservation" element={<Booking availableTimes = {availableTimes}  dispatchOnDateChange={dispatchOnDateChange}
              submitData={submitData}></Booking>}/>
    <Route path="/confirmedBooking" element={<ConfirmedBooking></ConfirmedBooking>}/>
    <Route path="/" element={<Home></Home>}/>
  <Route path="/about" element={<UnderConstruction></UnderConstruction>}/>
  <Route path="/menu" element={<UnderConstruction></UnderConstruction>}/>
  <Route path="/order_online" element={<UnderConstruction></UnderConstruction>}/>
  <Route path="/login" element={<UnderConstruction></UnderConstruction>}/>
    </Routes>
  </main>
  <Footer></Footer>
      </>
    
  )
}

export default App
