import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slide1 from '../assets/images/slide1.jpeg'
import slide2 from '../assets/images/slide2.jpeg'
import slide3 from '../assets/images/slide3.jpg'
import slide4 from '../assets/images/slide4.jpg'
import { Link } from "react-router-dom";
const Swipercom = () => {
    return (
        <Link to={'/patlist'}>
            <div className="w-[96%] mx-auto my-20">
                <Swiper
                    spaceBetween={10}

                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={
                        {
                            370: {
                                slidesPerView: 1
                            },
                            520: {
                                slidesPerView: 2
                            },
                            970: {
                                slidesPerView: 3
                            }
                        }
                    }
                >
                    <SwiperSlide className="">
                        <img src={slide1} className="h-[355px] rounded-md mx-auto" alt="" srcset="" />

                        <p className="text-center -mt-12 text-white">Microscopic images reveal the severe <br />
                            infestation of tapeworms and <br />
                            roundworms in cats,</p>
                    </SwiperSlide>
                    <SwiperSlide className="mx-auto"><img src={slide2}
                        className="h-[355px] rounded-md mx-auto" alt="" srcset="" />

                        <p className="text-center -mt-12 text-white">Microscopic images reveal the severe <br />
                            infestation of tapeworms and <br />
                            roundworms in Dolpins,</p>
                    </SwiperSlide>
                    <SwiperSlide className="mx-auto"><img src={slide3}
                        className="h-[355px] rounded-md mx-auto" alt="" srcset="" />

                        <p className="text-center -mt-12 text-white">Microscopic images reveal the severe <br />
                            infestation of tapeworms and <br />
                            roundworms in Rabbits,</p>
                    </SwiperSlide>
                    <SwiperSlide className="mx-auto"><img src={slide4}
                        className=" rounded-md mx-auto h-full" alt="" srcset="" />
                        <h1 className="font-semibold text-2xl 
                 text-white text-center "></h1>
                        <p className="text-center -mt-12 text-black">Microscopic images reveal the severe <br />
                            infestation of tapeworms and <br />
                            roundworms in cats,</p>
                    </SwiperSlide>


                </Swiper>
            </div>
        </Link>
    )
}
export default Swipercom