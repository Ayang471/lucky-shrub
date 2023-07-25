import React from 'react'
import { plantList } from './PlantList'
import './PlantsSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function PlantsSection() {
    return (
        <div className='plants-section'>
            <h1>Find plants you'll love</h1>
            <div className='row' >
                {plantList.map((products, index) => (
                    <div className='col' key={index}>
                       <div>
                            <img src={products.image} alt='product' />
                       </div>
                    <div>
                        <p>{products.title}
                            <FontAwesomeIcon icon={faArrowRight} className='arrowRight' />
                         </p>
                    </div>
                    </div>
                ))}
            </div>
            <button className='ViewAllBtn'>View All Products</button>
        </div>
    )
}

export default PlantsSection