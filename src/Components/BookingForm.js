import { useReducer, useState } from "react";

function BookingForm(props) {
    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const [availableTimesState, availableTimesDispatch] = useReducer(props.updateTimes, props.initializeTimes);

    const handleResTimeChange = (e) => {
        setResTime(e.target.value);
        availableTimesDispatch({type: 'update_available_times', value: e.target.value});
    }
    return (
        <>
            <div className="booking-banner">
                <h1 className="display-title text-primary-2" >
                    Book Now
                </h1>
            </div>

            <form>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={resDate} onChange={e => {setResDate(e.target.value)} }/>

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={resTime} onChange={ handleResTimeChange }>
                    {availableTimesState.map(availableTime => {
                        return (
                            <option key={availableTime} value={availableTime}>{availableTime}</option>
                        );
                    })}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => {setGuests(e.target.value)} } />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => {setOccasion(e.target.value)} }>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    );
}
export default BookingForm;