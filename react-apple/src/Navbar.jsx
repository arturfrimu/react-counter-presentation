import React from "react";

function Navbar(props) {
    return <nav className="nav">
        <div className="container">
            <h1 className="logo"><a>My Website</a></h1>
            <ul>
                {props.links.map(link => <li>
                    <a href={link.href} className={link.className}>{link.label}</a>
                </li>)}
            </ul>
        </div>
    </nav>;
}

export default Navbar;