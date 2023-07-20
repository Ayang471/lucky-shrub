import React from 'react'
import oasis from './assets/bottomimage.png'
import './BookOasis.css'

function BookOasis() {
    return (
        <div className='book-oasis'>
                <div className='row'>
                    <div className='col'>
                        <img src={oasis} alt='oasis' />
                    </div>
                    <div className='col'>
                        <h1>Book Our Oasis for your Dream land.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Sit lacus et turpis porttitor facilisi lectus egestas nisl. Elementum aliquet eu et mauris vulputate nibh. </p>
                        <button>Book Now</button>
                    </div>
                </div>
        </div>
    )
}

export default BookOasis