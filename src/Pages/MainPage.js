import React from 'react'
import BCarousel from '../Components/BCarousel';
import Jumbotron from '../Components/Jumbotron';

const MainPage = () => {
    return (
        <div>
            <BCarousel/> 
            <h2 className='text-center'>Product Highlights</h2>
            <h2 className='text-center'>Most Popular Categories</h2>
            <Jumbotron></Jumbotron>
        </div>
    )
}

export default MainPage
