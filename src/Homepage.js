import React from 'react'
import HeroSection from './HeroSection'
import PlantsSection from './PlantsSection'
import './HeroSection.css'
import ExploreMoreSection from './ExploreMoreSection'
import BookOasis from './BookOasis'
import ImageCarousel from './ImageCarousel'


function Homepage() {
  return (
    <div className='homepage'>
        <HeroSection />
        <ImageCarousel />
        <PlantsSection />
        <ExploreMoreSection />
        <BookOasis />
    </div>
  )
}

export default Homepage