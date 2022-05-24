import './App.css';

import React from 'react';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Content from "./Content";

const links = [
    {href: '#', className:"", label:"Home"},
    {href: '#', className:"", label:"About"},
    {href: '#', className:"", label:"Services"},
    {href: '#', className:"", label:"Contact"},
]

const App = () => {
    return (
        <div>
            <Navbar links={links}/>
            <Hero/>
            <Content/>
        </div>
    );
};

export default App;

