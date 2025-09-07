// src/POPOSList.js

import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.js'
import { useState } from 'react'

function POPOSList() {
    const [query, setQuery] = useState('')

    // deconstruct hours here
    const spaces = data
        .filter(obj => obj.title.toLowerCase().includes(query.toLowerCase()) || obj.address.toLowerCase().includes(query.toLowerCase()))
        .map(({ id, title, address, images, hours }) => {
            // const spaces = data.map(({ title, address, images, hours }, i) => {        return (
            return (
                <POPOSSpace
                    id={id} // use id here
                    key={`${title}-${id}`}
                    name={title}
                    address={address}
                    image={images[0]}
                    hours={hours}
                />
            )
        })

    return (
        <div className="POPOSList">
            <form>
                <input
                    value={query}
                    placeholder="search"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {spaces}
        </div>
    )
}

export default POPOSList