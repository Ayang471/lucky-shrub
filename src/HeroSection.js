import React from 'react'
import './HeroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function HeroSection() {
  return (
    <div className='HeroSection'>
      <div classNamr='container'>
          <div className='texts'>
            <h1>Lorem ipsum dolor.</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur. Sit lacus et turpis porttitor facilisi lectus egestas nisl. Elementum aliquet eu et mauris vulputate nibh. Egestas odio aliquet sit aliquet in nec auctor.
            </p>
            <button>Explore
              <FontAwesomeIcon icon={faArrowRight} className='arrowRight' />
            </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection