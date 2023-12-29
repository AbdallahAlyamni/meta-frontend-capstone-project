import { useState } from "react";
import styles from "./BookingForm.module.css";

const occasions = ["Birthday", "Anniversary"];

const BookingForm = ({ availableTimes, submitData, dispatchOnChange }) => {
  const { booking, bookingForm, formInput, bookingTitle } = styles;

  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [guests, setGuests] = useState(1);
  const [time, setTime] = useState(availableTimes[0]);
  const [occasion, setOccasion] = useState(occasions[0]);

  const isFieldsValid = () => {
    return date && time && guests && occasion
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitData({ date, time, guests, occasion });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatchOnChange(e.target.value);
  };

  return (
    <section className={booking} onSubmit={handleFormSubmit}>
      <h1 className={bookingTitle}>Book Now!</h1>
      <form className={bookingForm} style={styles} >
        <label htmlFor="res-date">Choose date</label>
        <input className={formInput} type="date" id="res-date" required value={date} onChange={handleDateChange} />
        <label htmlFor="res-time">Choose time</label>
        <select className={formInput} id="res-time" required value={time} onChange={(e) => setTime(e.target.value)}>
          {availableTimes.map((element, index) => <option key={index}>{element}</option>)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input className={formInput} type="number" required placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
        <label htmlFor="occasion">Occasion</label>
        <select className={formInput} id="occasion" required value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          {occasions.map((element, index) => <option key={index}>{element}</option>)}
        </select>
        <button disabled={!isFieldsValid()} className={formInput} type="submit" >Make your reservation</button>
      </form>
    </section>
  )
}

export default BookingForm