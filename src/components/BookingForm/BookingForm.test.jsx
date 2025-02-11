import { describe, expect, test } from 'vitest'
import { fireEvent, getByLabelText, render, screen } from "@testing-library/react";
import {vi} from 'vitest'
import BookingForm from "./BookingForm";



/*describe("BookingForm", () => {
    it("should render properly", () => {
      render(<BookingForm availableTimes={[1,2,3]}/>);
      const headingElement = screen.getByText("BOOKING");
      expect(headingElement).toBeInTheDocument();
    });
  });*/
describe("BookingForm", ()=>{


  test("Submit Button is disabled while the fields are not filled in", () => {
    const handleSubmit = vi.fn();
    
    render(<BookingForm availableTimes={[1,2,3]}/>);
    const linkElement = screen.getByText(/BOOKING/i);
    
    const submitBtn = screen.getByRole("button");
    fireEvent.click(submitBtn);

    expect(linkElement).toBeInTheDocument();
    expect(handleSubmit).not.toHaveBeenCalled()
    expect(submitBtn).toHaveAttribute("disabled")
  });

  test("Submit Button is working when the fields are  filled in", () => {
    const handleSubmit = vi.fn();
    render(<BookingForm availableTimes={[1,2,3]}/>);
    

    const fName = screen.getByLabelText("First Name *");
    fireEvent.change(fName, {target:{value:"john"}})

    const lName = screen.getByLabelText("Last Name *");
    fireEvent.change(lName, {target:{value:"john"}})

    const email = screen.getByLabelText("Email *");
    fireEvent.change(email, {target:{value:"john@gmail.com"}})

    const phone = screen.getByLabelText("Phone *");
    fireEvent.change(phone, {target:{value:"john"}})

    const date = screen.getByLabelText("Date *");
    fireEvent.change(date, {target:{value:"10.10.2025"}})

    const time = screen.getByLabelText("Time *");
    fireEvent.change(time, {target:{value:"17:30"}})

 

    const submitBtn = screen.getByRole("button");
    fireEvent.click(submitBtn);

    expect(lName.value).toBe("john");
    expect(fName.value).toBe("john");
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(date).toBeInTheDocument();
   
    //expect(handleSubmit).toBeCalled();
    expect(submitBtn).not.toHaveAttribute("disabled")
  });
})




 // test('Renders the BookingForm heading', () => {
   //   render(<BookingForm />);
      
  //})