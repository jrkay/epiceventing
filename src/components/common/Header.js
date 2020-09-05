import React from 'react';

const Header = () => {
    const activeStyle = { color: "blue"};

    return (
        <nav>
            <a href="http://www.hfshc.com/" target="_newwindow" activeStyle={activeStyle} exact>Hurricane Farms</a> {" | "}
            <a href="http://www.trainsaur.com/racing" target="_newwindow" activeStyle={activeStyle} exact>Epic Racing</a>
        </nav>
    )
}

export default Header;