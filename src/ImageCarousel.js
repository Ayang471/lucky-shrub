import React from 'react'
import './Carousel.css'
import { list } from './ImageList'
import Banner from './Banner'

function ImageCarousel() {
  return (
    <div className='carousel'>
      <div className='shapes'>
      </div>
      <div className='carousel-list'>
        {list.map((item, index) => (
          <div className='list' key={index}>
            <img src={item.image} alt="plants" />
          </div>
        ))}
      </div>
      <div className='bottom-shapes'>
      </div>
      <Banner />
    </div>
  )
}

export default ImageCarousel

