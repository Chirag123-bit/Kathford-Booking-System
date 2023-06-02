import React, { useState } from 'react'
import HomeCard from './HomeCard'
import "./featured.css"
import image1 from "../../images/1.png"
import image2 from "../../images/2.png"
import image3 from "../../images/3.png"
import image4 from "../../images/4.png"


const houses = [
    {
        id: 1,
        country: "Nepal",
        city: "Kathmandu",
        price: 20000,
        image: image1
    },
    {
        id: 2,
        country: "Nepal",
        city: "Kathmandu",
        price: 20000,
        image: image2
    },
    {
        id: 3,
        country: "Nepal",
        city: "Kathmandu",
        price: 20000,
        image: image3
    },
    {
        id: 4,
        country: "Nepal",
        city: "Kathmandu",
        price: 20000,
        image: image4
    },
]

const Featured = () => {
    return (
        <div id="featured-section" className='my-5'>
            <div className="container">
                <h3>Featured Houses</h3>

                <div id="houses" className='d-flex justify-content-between'>
                    {houses.map((i) => {
                        return <HomeCard home={i} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Featured