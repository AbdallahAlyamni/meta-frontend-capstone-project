import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "./BookingForm"
import { fetchAPI, submitAPI } from '../assets/mockAPI'
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

const updateTimes = (state, data) => {
    const res = fetchAPI(new Date(data));
    return res.length !== 0 ? res : state
}

const initializeTimes = (initTimes) => [...initTimes, ...fetchAPI(new Date())];

function BookingPage() {

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [isBooked, setIsBooked] = useState(false);
    const navigate = useNavigate();

    const submitData = (formData) => {
        const res = submitAPI(formData);
        if (res) setIsBooked(true);
    }

    if(isBooked){
        navigate("/booking-confirmation");
    }
    else{
        return (
            <>
                <Header />
                <div>
                    <BookingForm availableTimes={availableTimes} dispatchOnChange={dispatch} submitData={submitData} />
                </div>
                <Footer />
            </>
        );
    }

    // console.log("onBookingPage");
    // console.log(props.initializeTimes)
    // return (
    //     <>
    //         <Header/>

    //         <BookingForm initializeTimes={props.initializeTimes} updateTimes={props.updateTimes} />

    //         <Footer/>
    //     </>
    // );
}
export default BookingPage;