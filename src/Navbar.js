import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <ul>
                    <li><a href="#about">about</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
