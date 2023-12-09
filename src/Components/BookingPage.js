import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "./BookingForm"

function BookingPage(props) {
    return (
        <>
            <Header/>

            <BookingForm availableTimesState={props.availableTimesState} availableTimesDispatch={props.availableTimesDispatch} />

            <Footer/>
        </>
    );
  }
  export default BookingPage;