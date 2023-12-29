import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Main() {

    return (
        <main>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/booking" element={<BookingPage />}></Route>
                    <Route path="/booking-confirmation" element={<ConfirmedBooking />}></Route>
                </Routes>
            </Router>
        </main>
    );
}
export default Main;