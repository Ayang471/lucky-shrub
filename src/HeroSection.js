import React from 'react'
import Hero from './assets/transparent-background1.png'
import './HeroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Border from './Border';

function HeroSection() {
  return (
    <div className='HeroSection'>
      <div classNamr='container'>
        <div className='row'>
          <div className='col texts'>
            <h1>Lorem ipsum dolor sit amet consectetur. </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sit lacus et turpis porttitor facilisi lectus egestas nisl.
            </p>
            <button>Explore
              <FontAwesomeIcon icon={faArrowRight} className='arrowRight' />
            </button>
          </div>
          {/*<div className='col'>
            <img src={Hero} alt='hero' />
            <Border />
          </div>
          */}
        </div>
      </div>
    </div>
  )
}

export default HeroSection