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
  <Card></Card>
  <Testimonials></Testimonials>
  
  <About></About>