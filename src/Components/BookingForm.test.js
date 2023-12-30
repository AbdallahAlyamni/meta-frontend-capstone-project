import { waitFor, act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import BookingPage from './BookingPage';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../assets/mockAPI'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const updateTimes = (state, action) =>{
    if (action.type === "update_available_times"){
        const res = fetchAPI(new Date(action.payload));
        return res.length !== 0 ? res : state
    }
}

const initializeTimes = () => [...fetchAPI(new Date())];

test('Renders the BookingForm heading', () => {
    render(
        <Router>
            <Routes>
                <Route path="*" element= {<BookingPage  />}/>
            </Routes>
        </Router>
    );
    const headingElement = screen.getByText("Book Now!");
    expect(headingElement).toBeInTheDocument();
});

test('Initialize available times', () => {
    const initialize_times = initializeTimes();
    expect(initialize_times).toBeInstanceOf(Array);
    expect(initialize_times).not.toHaveLength(0);
});

test('updateTimes with date have available times', () => {
    const updated_times = updateTimes(null,
        {type: 'update_available_times', payload: new Date().toISOString().split('T')[0]}
        );
    expect(updated_times).toBeInstanceOf(Array);
    expect(updated_times).not.toHaveLength(0);
});

test('write submited date to localStorage', async () => {
    localStorage.clear();
    const res = await submitAPI({ date:'2023-12-29', time:'14:00' });
    if (res) {
        localStorage.setItem('2023-12-29 14:00', 'taken');
    }
    const dateAvailableTimes = localStorage.getItem('2023-12-29 14:00')
    expect(dateAvailableTimes).toEqual('taken');
});

test('read submited date to localStorage', async () => {
    localStorage.clear();
    const res = await submitAPI({ date:'2023-12-29', time:'14:00' });
    if (res) {
        localStorage.setItem('2023-12-29 14:00', 'taken');
    }
    const dateAvailableTimes = localStorage.getItem('2023-12-29 14:00')
    expect(dateAvailableTimes).toEqual('taken');
});


test('Submission is disabled if guest less than 1 and more than 10', async () => {
    const handleSubmit = jest.fn();
    const updateTimes = (state, data) => {
        const res = fetchAPI(new Date(data));
        return res.length !== 0 ? res : state
    }
    const initializeTimes =  [...fetchAPI(new Date())];
    render(
        <BookingForm availableTimes={initializeTimes} dispatchOnChange={updateTimes} submitData={handleSubmit} />
    );
    const user = userEvent.setup();
    await user.type(screen.getByTestId('guests'), '{backspace}');
    await user.type(screen.getByTestId('guests'), '0');
    await user.click(screen.getByTestId('submit'));
    await waitFor(() =>
        expect(handleSubmit).not.toHaveBeenCalled()
    )
});