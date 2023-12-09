import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

const updateTimes = (state, action) =>{
    if (action.type === "update_available_times") return (['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
}

const initializeTimes = () => {
    return (['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
}

test('Renders the BookingForm heading', () => {
    render(<BookingForm initializeTimes={initializeTimes()} updateTimes={updateTimes} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});