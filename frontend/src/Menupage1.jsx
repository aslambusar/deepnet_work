import React, { useState } from "react";
import "./Menupage.css";


const Menupage1 = () => {

    const url = "https://deepnet-work-backend.onrender.com"
    // State for managing menus and their items
    const [menus, setMenus] = useState([
        {
            name: "Drinks",
            description: "A wide variety of refreshing drinks.",
            items: [
                { name: "LYCHEETINI", description: "A sweet and tangy cocktail.", price: "$12" },
                { name: "SWEET HEAT", description: "A spicy and sweet drink.", price: "$14" },
                { name: "Moet Spritz", description: "Aperol, St Germain, fresh lime juice.", price: "$20" }
            ]
        },
        {
            name: "Snacks",
            description: "Tasty bites to accompany your drink.",
            items: [
                { name: "Cheese Nachos", description: "Crispy nachos with melted cheese.", price: "$8" },
                { name: "French Fries", description: "Golden, crispy fries.", price: "$5" },
                { name: "Chicken Wings", description: "Spicy and tangy chicken wings.", price: "$10" }
            ]
        }
    ]);

    // State for tracking selected menu
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

    // State for managing the new menu form
    const [newMenu, setNewMenu] = useState({ name: "", description: "" });
    const [isFormVisible, setIsFormVisible] = useState(false);

    // State for managing the new item form
    const [newItem, setNewItem] = useState({ name: "", description: "", price: "" });
    const [isItemFormVisible, setIsItemFormVisible] = useState(false);

    // Handle new menu form submission
    const handleAddMenu = () => {
        if (newMenu.name.trim() && newMenu.description.trim()) {
            setMenus([...menus, { ...newMenu, items: [] }]);
            setNewMenu({ name: "", description: "" });
            setIsFormVisible(false);
        } else {
            alert("Please provide both a menu name and description.");
        }
    };

    // Handle new item form submission
    const handleAddItem = () => {
        if (newItem.name.trim() && newItem.description.trim() && newItem.price.trim()) {
            const updatedMenus = [...menus];
            updatedMenus[selectedMenuIndex].items.push({ ...newItem });
            setMenus(updatedMenus);
            setNewItem({ name: "", description: "", price: "" });
            setIsItemFormVisible(false);
        } else {
            alert("Please provide all item details: name, description, and price.");
        }
    };

    return (
        <div className="container-fluid menu-page">
            {/* Navigation */}
            <div className="container-fluid">
                <ul className="navigation-ul">
                    <li className="navigation-li"><a href="#">Home</a></li>
                    <li className="navigation-li"><a href="#">Menu</a></li>
                    <li className="navigation-li"><a href="#">Make a Reservation</a></li>
                    <li className="navigation-li"><a href="#">Contact</a></li>
                </ul>
            </div>

            {/* Header Section */}
            <header className="bg-dark text-white text-center header-section">
                <div className="container">
                    <h1 className="display-4">MENU</h1>
                    <p className="lead">
                        Please take a look at our menu featuring food, drinks, and snacks. If you’d
                        like to place an order, use the "Order Online" button located below the menu.
                    </p>
                </div>
            </header>

            {/* Menu Navigation Section */}
            <div className="menu-navigation text-center py-3">
                <div className="btn-group" role="group">
                    {menus.map((menu, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`btn ${selectedMenuIndex === index ? "btn-primary" : "btn-outline-primary"}`}
                            onClick={() => setSelectedMenuIndex(index)}
                        >
                            {menu.name}
                        </button>
                    ))}
                </div>
                <button
                    className="btn btn-success mt-3"
                    onClick={() => setIsFormVisible(!isFormVisible)}
                >
                    {isFormVisible ? "Cancel" : "Add New Menu"}
                </button>
                <button
                    className="btn btn-warning mt-3 ms-3"
                    onClick={() => setIsItemFormVisible(!isItemFormVisible)}
                >
                    {isItemFormVisible ? "Cancel" : "Add New Item"}
                </button>
            </div>

            {/* New Menu Form */}
            {isFormVisible && (
                <div className="container mt-4">
                    <h3 className="text-center">Add a New Menu</h3>
                    <div className="form-group">
                        <label>Menu Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={newMenu.name}
                            onChange={(e) => setNewMenu({ ...newMenu, name: e.target.value })}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Description:</label>
                        <textarea
                            className="form-control"
                            value={newMenu.description}
                            onChange={(e) => setNewMenu({ ...newMenu, description: e.target.value })}
                        />
                    </div>
                    <button className="btn btn-primary mt-3" onClick={handleAddMenu}>
                        Add Menu
                    </button>
                </div>
            )}

            {/* New Item Form */}
            {isItemFormVisible && (
                <div className="container mt-4">
                    <h3 className="text-center">Add a New Item to {menus[selectedMenuIndex].name}</h3>
                    <div className="form-group">
                        <label>Item Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={newItem.name}
                            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Description:</label>
                        <textarea
                            className="form-control"
                            value={newItem.description}
                            onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Price:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={newItem.price}
                            onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                        />
                    </div>
                    <button className="btn btn-warning mt-3" onClick={handleAddItem}>
                        Add Item
                    </button>
                </div>
            )}

            {/* Display Menu Items */}
            <section className="menu-items py-5" >
                <div className="container items-menu">
                    <h2 className="text-center text-uppercase mb-4">{menus[selectedMenuIndex].name}</h2>
                    <p className="text-center mb-4">{menus[selectedMenuIndex].description}</p>
                    <div className="row">
                        {menus[selectedMenuIndex].items.length > 0 ? (
                            menus[selectedMenuIndex].items.map((item, index) => (
                                <div key={index} className="col-md-4 text-center mb-4">
                                    <h5>{item.name}</h5>
                                    <p>{item.description}</p>
                                    <p><strong>{item.price}</strong></p>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No items available in this menu.</p>
                        )}
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

export default Menupage1;
