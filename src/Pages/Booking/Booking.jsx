import React from 'react'
import Header from '../../components/Header/Header'
import BookingForm from '../../components/BookingForm/BookingForm'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from "react-router-dom";

 

function Booking(props) {

  


  return (
    <>
    <Header></Header>
    <BookingForm  availableTimes={props.availableTimes}
                  dispatchOnDateChange={props.dispatchOnDateChange}
                  submitData={props.submitData}></BookingForm>
    <Footer></Footer>
    </>
  )
}

export default Booking