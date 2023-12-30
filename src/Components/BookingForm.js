import { useState } from "react";
import styles from "./BookingForm.module.css";
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const occasions = ["Birthday", "Anniversary"];
const validationSchema = Yup.object().shape({
    resDate: Yup.date().required('date is required'),
    resTime: Yup.string().required('time is required'),
    guests: Yup.number().required('number of guests is required').positive(),
    occasion: Yup.string().required('occasion is required').oneOf(occasions),
});

const initialValues = {
    resDate: new Date().toISOString().split('T')[0],
    resTime: '',
    guests: 0,
    occasion: occasions[0],
};

const BookingForm = ({ availableTimes, submitData, dispatchOnChange }) => {
  const { booking, bookingForm, formInput, bookingTitle } = styles;

  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [guests, setGuests] = useState(1);
  const [time, setTime] = useState(availableTimes[0]);
  initialValues['resTime'] = availableTimes[0];
  const [occasion, setOccasion] = useState(occasions[0]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatchOnChange(e.target.value);
  };

  return (
    <section className={booking}>
      <h1 className={bookingTitle}>Book Now!</h1>
      <Formik
       initialValues={initialValues}
       validationSchema={validationSchema}
       onSubmit={(e, { setSubmitting }) => {
        submitData({ date, time, guests, occasion });
       }}
     >
      {formik => ( <form className={bookingForm} style={styles} onSubmit={formik.handleSubmit}>
        <label htmlFor="resDate">Choose date</label>
        <input className={formInput} type="date" min="2023-12-29" max="2024-01-30" id="resDate" data-testid="resDate" {...formik.getFieldProps('resDate')} required value={date} onChange={(e) => {formik.handleChange(e); handleDateChange(e) } } />
        <ErrorMessage name="resDate" />
        <label htmlFor="resTime">Choose time</label>
        <select className={formInput} id="resTime" data-testid="resTime" required {...formik.getFieldProps('resTime')} value={time} onChange={(e) => {formik.handleChange(e); setTime(e.target.value)}}>
          {availableTimes.map((element, index) => <option key={index} value={element}>{element}</option>)}
        </select>
        <ErrorMessage name="resTime" />
        <label htmlFor="guests">Number of guests</label>
        <input className={formInput} type="number" min="1" max="10" required placeholder="1" id="guests" data-testid="guests" {...formik.getFieldProps('guests')} value={guests} onChange={(e) => {formik.handleChange(e); setGuests(e.target.value)}} />
        <ErrorMessage name="guests" />
        <label htmlFor="occasion">Occasion</label>
        <select className={formInput} id="occasion" data-testid="occasion" required {...formik.getFieldProps('occasion')} value={occasion} onChange={(e) => {formik.handleChange(e); setOccasion(e.target.value)}}>
          {occasions.map((element, index) => <option key={index}>{element}</option>)}
        </select>
        <ErrorMessage name="occasion" />
        <button aria-label="Submit" data-testid="submit" disabled={!formik.isValid} className={formInput} type="submit" >Make your reservation</button>
      </form> )}
      </Formik>
    </section>
  )
}

export default BookingForm