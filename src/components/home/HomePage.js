import React from "react";
import {Link} from "react-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <h1>Home Page</h1>
        <p>Some Text</p>
        <Link to="about" className="btn btn-primary btn-lg">
            More
        </Link>
    </div>
);

export default HomePage;