import React from 'react'
import Header from '../../components/Header/Header'
import BookingForm from '../../components/BookingForm/BookingForm'
import Footer from '../../components/Footer/Footer'


function Booking() {
  const resTime = [
    { value: '17:00', label: '17:00' },
    { value: '18:00', label: '18:00' },
    { value: '19:00', label: '19:00' },
    { value: '20:00', label: '20:00' },
    { value: '21:00', label: '21:00' },
  ]
  return (
    <>
    <Header></Header>
    <BookingForm resTime={resTime}></BookingForm>
    <Footer></Footer>
    </>
  )
}

export default Booking