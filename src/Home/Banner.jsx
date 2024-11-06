import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './style.css'
import swip2 from '../assets/images/banner6.jpg'
import key from '../assets/images/key.png'
import man from '../assets/images/man.png'
import symbol from '../assets/images/symbol2.svg'
import { FaKey } from 'react-icons/fa';
const Banner = () => {
    const bgStyle = {
        backgroundImage: ` url(${swip2})`,  // Replace with your image path
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: window.innerWidth < 740 ? 'left' : 'center',
    };

    return (
        <div style={bgStyle} className='w-full mx-auto min-h-[70vh] p-3'>
            <div className='p-3 rounded-md mt-5'>
                <div className='w-[360px] md:w-[460px] md: mx-auto mt-20 p-3 text-black md:text-white bg-white opacity-70 md:bg-transparent md:opacity-100'>
                    <img src={symbol} className='w-[90px] h-[90px]  block mx-auto' alt="" />
                    <h1 className='font-medium text-3xl text-center my-2'>CatroPet</h1>
                    <p className='mt-2 text-center'>All American Pet Photo Day encourages
                        pet owners to share their favorite pet photos on July 11.
                        Be sure to charge your camera and be prepared to take adorable pictures of your pets!</p>

                    <div className='my-5'>
                        <button className='font-medium block mx-auto animated-border
                           text-white bg-orange-400 md:bg-orange-300 px-4 shadow-lg py-2 rounded-md'>Learn More</button>
                    </div>
                </div>

            </div>

            <div className='relative top-12 hidden md:flex justify-evenly'>

                <div className='w-[220px] z-10 p-2 h-[170px] bg-white shadow-2xl rounded-md'>
                    <img src={symbol} className='w-[30px] h-[30px] block mx-auto' alt="" />
                    <p className='text-[15px] font-medium text-center mt-2'>Plus ThemeForest is part of Envato Market. Signing up to an account
                         on ThemeForest will let you access the whole network.</p>
                </div>
                <div className='w-[220px] z-10 p-2 h-[170px] bg-orange-300 shadow-2xl rounded-md'>
                    <FaKey className='text-xl text-black block mx-auto'></FaKey>
                    <p className='text-[15px] font-medium text-center mt-2'>Plus ThemeForest is part of Envato Market. Signing up to an account
                         on ThemeForest will let you access the whole network.</p>
                </div>
                <div className='w-[220px] z-10 p-2 h-[170px] bg-white shadow-2xl rounded-md'>
                    <img src={man} className='w-[30px] h-[30px] block mx-auto' alt="" />
                    <p className='text-[15px] font-medium text-center mt-2'>Plus ThemeForest is part of Envato Market. Signing up to an account
                         on ThemeForest will let you access the whole network.</p>
                </div>

            </div>
        </div>
    )
}
export default Banner