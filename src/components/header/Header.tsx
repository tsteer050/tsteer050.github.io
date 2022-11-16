import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownButton from "./DropdownButton/DropdownButton.tsx";
import "./Header.scss";

const Header = () => {
    const [showNavMenu, setShowNavMenu] = useState(false);

    const toggleNavMenu = () => {
        setShowNavMenu(!showNavMenu);
    }

    return (
        <header>
            <nav className={showNavMenu ? "responsive_nav" : ""}>
                <Link to={"/"} style={{ textDecoration: "none" }} onClick={() => setShowNavMenu(false)}>
                    Home
                </Link>
                <Link to={"/about"} style={{ textDecoration: "none" }} onClick={() => setShowNavMenu(false)}>
                    About
                </Link>
                <h1 style={{ userSelect: "none" }}>TREVOR STEER</h1>
                <a 
                    href="https://google.com"
                    rel="noreferrer noopener"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                    onClick={() => setShowNavMenu(false)}
                >
                    Listen
                </a>
                <Link to={"/contact"} style={{ textDecoration: "none" }} onClick={() => setShowNavMenu(false)}>
                    Contact
                </Link>
            </nav>
            <DropdownButton toggleNavMenu={toggleNavMenu} showNavMenu={showNavMenu} />
        </header>
    )
};

export default Header;
