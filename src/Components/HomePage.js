import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";
import Header from './Header';
import Footer from './Footer';

function HomePage() {
    return (
        <>
            <Header />
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
            <Footer />
        </>
    );
}
export default HomePage;