import bannerImage from "../assets/restauranfood.jpg";

function Chicago() {
    return (
        <section className="about">
            <div className="banner-text">
                <h1 className="display-title">Little Lemon</h1>
                <h3 className="sub-title">Chicago</h3>
                <p className="section-title">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </div>
            <div className="flex">
                <img src={bannerImage} alt="restaurant food" />
                <img src={bannerImage} alt="restaurant food" />
            </div>
        </section>
    );
}
export default Chicago;