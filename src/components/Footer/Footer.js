import React from 'react'
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className='Footer'>
            <p className='Footer-P'>Marcel Barrios</p>
            <p className='Footer-P'>copyright {currentYear}</p>
            <ul className="Footer-Links">
                <li><a href="https://github.com/MarcelBarrios" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/marcelbarrios" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com/marcelbarrios" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
        </div>
    )
}

export default Footer