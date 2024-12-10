import React from "react";
import "./Menupage.css";

const Menupage = () => {
    return (
        <div className="container-fluid menu-page">

            {/* Navigation  */}
            <div className="container-fluid">
                <ul className="navigation-ul">
                    <li className="navigation-li"><a href="">Home</a></li>
                    <li className="navigation-li"><a href="">Menu</a></li>
                    <li className="navigation-li"><a href="">Make a reservation</a></li>
                    <li className="navigation-li"><a href="">Contact</a></li>
                </ul>
            </div>
            {/* Header Section */}
            <header className="bg-dark text-white text-center">
                <div className="container">
                    <h1 className="display-4">MENU</h1>
                    <p className="lead">
                        Please take a look at our menu featuring food, drinks, and brunch. If you’d
                        like to place an order, use the "Order Online" button located below the menu.
                    </p>
                </div>
            </header>

            {/* Menu Navigation */}
            <div className="menu-navigation text-center py-3">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-outline-primary">FOOD</button>
                    <button type="button" className="btn btn-primary">DRINKS</button>
                    <button type="button" className="btn btn-outline-primary">BRUNCH</button>
                </div>
            </div>

            {/* Brunch Cocktails Section */}
            <section className="brunch-cocktails py-5">
                <div className="container">
                    <h2 className="text-center text-uppercase mb-4">Brunch Cocktails</h2>
                    <div className="row">
                        {/* Cocktail Item 1 */}
                        <div className="col-md-4 text-center mb-4">
                            <img src="/images/cocktail1.png" alt="Cinnamon Toast Crunch" className="img-fluid mb-3" />
                            <h5>Cinnamon Toast Crunch</h5>
                            <p>$16</p>
                            <p>
                                Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys,
                                egg white, cinnamon
                            </p>
                        </div>

                        {/* Cocktail Item 2 */}
                        <div className="col-md-4 text-center mb-4">
                            <img src="/images/cocktail2.png" alt="Bar 42 Mary" className="img-fluid mb-3" />
                            <h5>Bar 42 Mary</h5>
                            <p>$14</p>
                            <p>
                                Tito’s, tomato juice, Worcestershire, celery salt, black pepper, Tabasco,
                                fully loaded
                            </p>
                        </div>

                        {/* Cocktail Item 3 */}
                        <div className="col-md-4 text-center mb-4">
                            <img src="/images/cocktail3.png" alt="Moet Spritz" className="img-fluid mb-3" />
                            <h5>Moet Spritz</h5>
                            <p>$20</p>
                            <p>
                                Aperol, St Germain, botanical liquor, fresh lime juice, mini brut Moet
                                topper
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-dark text-white py-4">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <h5>CONNECT WITH US</h5>
                            <p>📞 +91 9567843340</p>
                            <p>✉ info@deepnetsoft.com</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h5>DEEP NET SOFT</h5>
                            <p>All rights reserved</p>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h5>FIND US</h5>
                            <p>First Floor, Geo Infopark, Infopark EXPY, Kakkanad</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Menupage;