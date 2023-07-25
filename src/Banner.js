import React from 'react'
import plant from './assets/transparent-background1.png'
import './Banner.css'

function Banner() {
    return (
        <div className='plants'>
            <img src={plant} alt='hero' />
                <div className='Banner text'>
                    <h1>
                        <i>Our Mission</i>
                        <span>is to transform any place into an oasis you can be proud of.</span>
                    </h1>
                </div>
        </div>
    )
}

export default Banner