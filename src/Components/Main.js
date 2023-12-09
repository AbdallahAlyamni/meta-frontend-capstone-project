import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const updateTimes = (state, action) =>{
    if (action.type === "update_available_times") return (['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
}

const initializeTimes = async () => {
    const initialDate = Date();
    // eslint-disable-next-line no-undef
    let times = await fetchAPI(initialDate);
    return (times);
}

function Main() {

    return (
        <main>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/booking" element={<BookingPage initializeTimes={initializeTimes()} updateTimes={updateTimes} />}></Route>
                </Routes>
            </Router>
        </main>
    );
}
export default Main;