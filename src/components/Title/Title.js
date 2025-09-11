import React from 'react'
import './Title.css';
import { NavLink } from 'react-router-dom'
import RandomSpace from '../RandomSpace/RandomSpace'

function Title() {
    return (
        <div className="Title">
            <header className="Title-Header">
                <div className="Title-Text">
                    <h1>SFPOPOS</h1>
                    <div className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</div>
                </div>
                <nav className="Title-Nav">
                    <NavLink
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                        to="/">List</NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                        to="/about">About</NavLink>
                    <RandomSpace />
                </nav>
            </header>
        </div>
    )
}

export default Title
