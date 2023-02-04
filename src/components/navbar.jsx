import React from 'react';

export default function NavBar() {
    return (
        <nav className="navbar">
            <span className="navbar-heading">
            <img className="navbar-logo" src="../../public/troll-face.png" />
            <h1>Meme Generator</h1>
            </span>
            <span><h2 className='course-name'>React Course - Project 3</h2></span>
        </nav>
    )
}