import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm/BookingForm";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Booking");
    expect(headingElement).toBeInTheDocument();
})
