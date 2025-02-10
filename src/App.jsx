import { useState } from 'react'
import React from 'react'
import Home from './Pages/Home/Home'
import Booking from './Pages/Booking/Booking'
import ConfirmedBooking from './components/ConfirmedBooking'
import UnderConstruction from './Pages/UnderConstruction/UnderConstruction'
import { Route, Routes, useNavigate } from 'react-router-dom'


function App() {

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}



  const fetchAPI = function(date){
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() > 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};


const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetchAPI(new Date()),
];


  const [state, dispatchOnDateChange] = React.useReducer(
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
    <Routes>
      <Route path="/Reservation" element={<Booking availableTimes = {state}  dispatchOnDateChange={dispatchOnDateChange}
                  submitData={submitData}></Booking>}/>
      <Route path="/confirmedBooking" element={<ConfirmedBooking></ConfirmedBooking>}/>
      </Routes>
    <UnderConstruction/>
    </>
  )
}

export default App
