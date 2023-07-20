import React from 'react'
import HeroSection from './HeroSection'
import Banner from './Banner'
import PlantsSection from './PlantsSection'
import './HeroSection.css'
import ExploreMoreSection from './ExploreMoreSection'
import BookOasis from './BookOasis'

function Homepage() {
  return (
    <div className='homepage'>
        <HeroSection />
        <Banner />
        <PlantsSection />
        <ExploreMoreSection />
        <BookOasis />
    </div>
  )
}

export default Homepage