// src/POPOSSpace.js
import React from 'react'
// import logo from './logo.svg'
import "./POPOSSpace.css";
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
    // Get the
    const { name, image, address, hours, id } = props
    return (
        <div className="POPOSSpace">
            <Link to={`/details/${id}`} className='POPOSSpace-title'>
                {name}
            </Link>
            <Link to={`/details/${id}`}>
                <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="300" height="300" alt="Hello" />
            </Link>
            <div className="POPOSSpace-info">
                <div>{address}</div>
                <div><i>{hours}</i></div>
            </div>
        </div>
    )
}

export default POPOSSpace