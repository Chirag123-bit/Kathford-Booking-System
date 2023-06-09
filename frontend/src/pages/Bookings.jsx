import React from 'react'
import "./listing.css"
import HomeCard from '../components/Home/HomeCard'
import image1 from "../images/1.png"
import image2 from "../images/2.png"
import image3 from "../images/3.png"
import image4 from "../images/4.png"
import BookingCard from '../components/Home/BookingCard'


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

]

const Bookings = () => {
    return (
        <div id="listingpage" className='my-5'>
            <div id="listing-search-bar" className='text-center'>
                <h3>My Bookings</h3>
            </div>


            <div id="houses" className='d-flex justify-content-between container my-5 flex-wrap'>
                {houses.map((i) => {
                    return <BookingCard home={i} />
                })}

            </div>
        </div>
    )
}

export default Bookings