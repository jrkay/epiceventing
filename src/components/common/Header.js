import React from 'react';
import {NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = { color: "blue"};

    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink> {" | "}
            <NavLink to="/" activeStyle={activeStyle} exact>Epic Racing</NavLink> {" | "}
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink> {" | "}
            <NavLink to="/" activeStyle={activeStyle} exact>Stallions</NavLink> {" | "}
            <NavLink to="/" activeStyle={activeStyle} exact>Mares</NavLink>
        </nav>
    )
}

export default Header;