import ProfileImage from "../assets/profile.jpg";

function CustomersSay() {
    return (
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
    );
}
export default CustomersSay;