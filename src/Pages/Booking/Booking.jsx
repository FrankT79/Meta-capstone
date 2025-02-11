import React from 'react'
import Header from '../../components/Header/Header'
import BookingForm from '../../components/BookingForm/Bookingform'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from "react-router-dom";

 

function Booking(props) {

  


  return (
    <>
    
    <BookingForm  availableTimes={props.availableTimes}
                  dispatchOnDateChange={props.dispatchOnDateChange}
                  submitData={props.submitData}></BookingForm>
    
    </>
  )
}

export default Booking