import React from "react";

function Navbar() {
    return <nav className="nav">
        <div className="container">
            <h1 className="logo"><a>My Website</a></h1>
            <ul>
                <li><a href="#" className="current">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>;
}

export default Navbar;