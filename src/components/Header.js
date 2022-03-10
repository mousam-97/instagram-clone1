import React from 'react';
import logo from "../assets/images/logo.svg";
import user from "../assets/images/user.jpg";

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} className="logo" alt="header logo" />
            </div>
            <div className="header__user">
                <img src={user} alt="header user" className="user"/>
            </div>
            
        </div>
    );
}

export default Header;