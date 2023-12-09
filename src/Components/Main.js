import bannerImage from "../assets/restauranfood.jpg";
import GreekSaladImage from "../assets/greek salad.jpg";
import ProfileImage from "../assets/profile.jpg";
function Main() {
    return (
      <main>
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
        <section className="week-specials">
            <div className="section-header">
                <h1 className="display-title text-black">This Week Specials!</h1>
                <div><button className="button-primary flex">Online Menu</button></div>
            </div>
            <div className="dishes">
                <div className="dish-card">
                    <img src={GreekSaladImage} alt="Greek salad" />
                    <div className="card-body">
                        <div className="dish-title">
                            <span className="dish-card-title">Greek salad</span>
                            <span className="dish-card-price">$12.99</span>
                        </div>
                        <p className="dish-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <button className="dish-button">Order a delivery</button>
                    </div>
                </div>
                <div className="dish-card">
                    <img src={GreekSaladImage} alt="Greek salad" />
                    <div className="card-body">
                        <div className="dish-title">
                            <span className="dish-card-title">Greek salad</span>
                            <span className="dish-card-price">$12.99</span>
                        </div>
                        <p className="dish-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <button className="dish-button">Order a delivery</button>
                    </div>
                </div>
                <div className="dish-card">
                    <img src={GreekSaladImage} alt="Greek salad" />
                    <div className="card-body">
                        <div className="dish-title">
                            <span className="dish-card-title">Greek salad</span>
                            <span className="dish-card-price">$12.99</span>
                        </div>
                        <p className="dish-description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <button className="dish-button">Order a delivery</button>
                    </div>
                </div>
            </div>
        </section>
        <section className="testimonials">
            <h1 className="display-title text-black">Testimonials</h1>
            <div className="cards">
                <div className="testimonial-card">
                    <span className="rating">5</span>
                    <div className="testimonial-person">
                        <img width={64} src={ProfileImage} alt="" />
                        <span>John Doe</span>
                    </div>
                    <p className="review-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis, tellus a luctus pretium, mi augue maximus risus, id aliquet leo orci vel mi.
                    </p>
                </div>
                <div className="testimonial-card">
                    <span className="rating">5</span>
                    <div className="testimonial-person">
                        <img width={64} src={ProfileImage} alt="" />
                        <span>John Doe</span>
                    </div>
                    <p className="review-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis, tellus a luctus pretium, mi augue maximus risus, id aliquet leo orci vel mi.
                    </p>
                </div>
                <div className="testimonial-card">
                    <span className="rating">5</span>
                    <div className="testimonial-person">
                        <img width={64} src={ProfileImage} alt="" />
                        <span>John Doe</span>
                    </div>
                    <p className="review-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis, tellus a luctus pretium, mi augue maximus risus, id aliquet leo orci vel mi.
                    </p>
                </div>
                <div className="testimonial-card">
                    <span className="rating">5</span>
                    <div className="testimonial-person">
                        <img width={64} src={ProfileImage} alt="" />
                        <span>John Doe</span>
                    </div>
                    <p className="review-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis, tellus a luctus pretium, mi augue maximus risus, id aliquet leo orci vel mi.
                    </p>
                </div>
            </div>
        </section>
        <section className="about">
            <div className="banner-text">
                <h1 className="display-title">Little Lemon</h1>
                <h3 className="sub-title">Chicago</h3>
                <p className="section-title">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </div>
            <div className="flex">
                <img src={bannerImage} alt="restaurant food"/>
                <img src={bannerImage} alt="restaurant food"/>
            </div>
        </section>
      </main>
    );
  }
  export default Main;