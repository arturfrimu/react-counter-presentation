import React, {useState} from "react";

function Navbar(props) {
    const [currentLink, setCurrentLink] = useState('Home');
    return <nav className="nav">
        <div className="container">
            <h1 className="logo"><a>My Website</a></h1>
            <ul>
                {props.links.map((link) => <li>
                    <a href={"#"} className={currentLink === link.label ? "current" : ""}
                       onClick={() => setCurrentLink(link.label)}>{link.label}</a>
                </li>)}
            </ul>
        </div>
    </nav>;
}

export default Navbar;