import React from "react";

const links = [
    {href: '#', className:"current", label:"Home"},
    {href: '#', className:"", label:"About"},
    {href: '#', className:"", label:"Services"},
    {href: '#', className:"", label:"Contact"},
]

function Navbar() {
    return <nav className="nav">
        <div className="container">
            <h1 className="logo"><a>My Website</a></h1>
            <ul>
                {links.map(link => <li><a href={link.href} className={link.className}>{link.label}</a></li>)}
            </ul>
        </div>
    </nav>;
}

export default Navbar;