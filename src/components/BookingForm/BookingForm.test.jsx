import { expect, test } from 'vitest'
import { render, screen } from "@testing-library/react";

import BookingForm from "./BookingForm";



describe("BookingForm", () => {
    it("should render properly", () => {
      render(<BookingForm availableTimes={[1,2,3]}/>);
      const headingElement = screen.getByText("BOOKING");
      expect(headingElement).to.be.InTheDocument();
    });
  });




 // test('Renders the BookingForm heading', () => {
   //   render(<BookingForm />);
      
  //})