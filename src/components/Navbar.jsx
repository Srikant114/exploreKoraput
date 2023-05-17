import React, { useState } from "react";
import "../styles/Navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const clickToggler = () => setToggle(!toggle);

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Explore Koraput</h1>

            <div className="menu-icons" onClick={clickToggler}>
                <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={toggle ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i> {item.title}
                            </Link>
                        </li>
                    );
                })}
                <button>Sign Up</button>
            </ul>
        </nav>
    );
};

export default Navbar;