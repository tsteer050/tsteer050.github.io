import React from "react";
import "./DropdownButton.scss";

const DropdownButton = ({ toggleNavMenu, showNavMenu }) => {

    
    return (
        <div className="nav-btn">
            <div id="nav-icon4" className={showNavMenu ? "open" : ""} onClick={toggleNavMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default DropdownButton;

// <button className="nav-btn" onClick={toggleNavMenu}>
// |||
// </button>