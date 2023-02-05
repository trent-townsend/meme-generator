import React from 'react';

export default function NavBar() {

    return (
        <nav className="navbar">
            <span className="navbar-heading">
            <img className="navbar-logo" src="troll-face.png"  />
            <h2>Meme Generator</h2>
            </span>
            <span><h2 className='course-name'>React Course - Project 3</h2></span>
        </nav>
    )
}