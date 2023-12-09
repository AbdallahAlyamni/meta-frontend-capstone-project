import bannerImage from "../assets/restauranfood.jpg";

function CallToAction() {
    return (
        <section className="banner">
        <div className="banner-text">
            <h1 className="display-title text-primary-2">Little Lemon</h1>
            <h3 className="sub-title text-white">Chicago</h3>
            <p className="lead-text text-white">We are family owned Mediterranean restaurant, focused on traditional recipes served with modern twist.</p>
            <button className="button-primary">Reserve a Table</button>
        </div>
        <div className="flex">
            <img src={bannerImage} alt="restaurant food"/>
        </div>
    </section>
    );
  }
  export default CallToAction;