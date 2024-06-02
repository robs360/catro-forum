import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import swip1 from '../assets/images/swip1.jpg'
import swip2 from '../assets/images/swip2.jpg'
import swip4 from '../assets/images/swip4.jpg'
const Banner=()=>{
    return(
        <div className='w-[96%] mx-auto mt-9 -z-50'>
        <Carousel centerMode="center" centerSlidePercentage={100} className='w-full -z-50'>
            <div className='h-[65vh] md:h-[90vh] '>
                <img className='rounded-md' src={swip2} />
            </div>
            <div className='h-[65vh] md:h-[90vh] z-40'>
                <img className='rounded-md' src={swip1} />
            </div>
            <div className='h-[65vh] md:h-[90vh] z-40'>
                <img className='rounded-md bg-center' src={swip4} />
            </div>
      
           
        </Carousel>
    </div>
    )
}
export default Banner