import React from 'react'
import { ExploreMoreList } from './ExploreMoreList'
import './ExploreMore.css'

function ExploreMoreSection() {
    return (
        <div className='ExploreMoreSection'>
            <h1>Explore More</h1>
            <div className='row'>
            {ExploreMoreList.map((list, index) => (
                    <div className='col' key={index}>
                        <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                            <img src={list.icon} alt='icons' />
                            <h3 className="uk-card-title">{list.title}</h3>
                            <p>{list.desc}</p>
                        </div>
                    </div>
            ))}
            </div>
        </div>
    )
}

export default ExploreMoreSection