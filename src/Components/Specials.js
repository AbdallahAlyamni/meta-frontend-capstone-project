import GreekSaladImage from "../assets/greek salad.jpg";

function Specials() {
    return (
        <section className="week-specials">
            <div className="section-header">
                <h1 className="display-title text-black">This Week Specials!</h1>
                <div><button aria-label="Online Menu" className="button-primary flex">Online Menu</button></div>
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
                        <button aria-label="Order a delivery" className="dish-button">Order a delivery</button>
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
                        <button aria-label="Order a delivery" className="dish-button">Order a delivery</button>
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
                        <button aria-label="Order a delivery" className="dish-button">Order a delivery</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Specials;