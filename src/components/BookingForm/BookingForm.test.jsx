import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { fireEvent, getByLabelText, getByTestId, render, screen, waitFor } from "@testing-library/react";

import BookingForm from "./BookingForm";



/*describe("BookingForm", () => {
    it("should render properly", () => {
      render(<BookingForm availableTimes={[1,2,3]}/>);
      const headingElement = screen.getByText("BOOKING");
      expect(headingElement).toBeInTheDocument();
    });
  });*/
describe("BookingForm", ()=>{
  
    const handleSubmit = vi.fn();
    const dispatchOnDateChange = vi.fn();
    const submitData = vi.fn();
    test("Submit Button is disabled while the fields are not filled in", () => {
    render(<BookingForm availableTimes={['17:00', '17:30']} 
      dispatchOnDateChange={dispatchOnDateChange}
      submitData={submitData}/>);
    
    
    const linkElement = screen.getByText(/BOOKING/i);
    
    const submitBtn = screen.getByTestId("submit-button");
    fireEvent.click(submitBtn);

    expect(linkElement).toBeInTheDocument();
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitBtn).toHaveAttribute("disabled")
  });

  test("Submit Button is working when the fields are  filled in", async () => {
    const handleSubmit = vi.fn();
    render(<BookingForm availableTimes={['17:00', '17:30']} 
      dispatchOnDateChange={dispatchOnDateChange}
      submitData={submitData}/>);
    
    

    const fName = screen.getByLabelText("First Name *");
    fireEvent.change(fName, {target:{value:"john"}})

    const lName = screen.getByLabelText("Last Name *");
    fireEvent.change(lName, {target:{value:"johns"}})

    const email = screen.getByLabelText("Email *");
    fireEvent.change(email, {target:{value:"john@gmail.com"}})

    const phone = screen.getByLabelText("Phone *");
    fireEvent.change(phone, {target:{value:"088566432"}})

    const date = screen.getByLabelText("Date *");
    fireEvent.change(date, {target:{value:"10.10.2025"}})

    const time = screen.getByLabelText("Time *");
    fireEvent.change(time, {target:{value:"17:30"}})

    //render(<BookingForm availableTimes={[1,2,3]}/>);

    const submitBtn = screen.getByTestId("submit-button");
    fireEvent.click(submitBtn)

    await waitFor(()=>{  ;

    expect(lName.value).toBe("johns");
    expect(fName.value).toBe("john");
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(date).toBeInTheDocument();
   
    expect(submitData).toHaveBeenCalled();
    

  })
    
  });
})




 // test('Renders the BookingForm heading', () => {
   //   render(<BookingForm />);
      
  //})