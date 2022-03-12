import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import user from "../assets/images/user.jpg";

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <div className="header__logo">
                    <img src={logo} className="logo" alt="header logo" />

                </div>
            </Link>
            <Link to="/profile">
                <div className="header__user">
                    <img src={user} alt="header user" className="user" />
                </div>
            </Link>
        </div>
    );
}

export default Header;