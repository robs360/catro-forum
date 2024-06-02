
import React from "react";
import Banner from "./Banner";

import Swipercom from "./Swiper";
import Title from "./Title";
import banner2 from '../assets/images/nature.jpg'
import banner from '../assets/images/banner.jpg'
const Home=()=>{
   
    return(
        <div>
            <Banner></Banner>
             <Title banner2={`${banner2}`}
             heading={"What Are You Searching For"} 
             subheading={"There are 33 species in the genus Paeonia, almost all of which are native to temperate Eurasia. However, there are two that are native to the western part of North America.And they don’t look much like the easily recognized bush peonies. In the Pacific Northwest there’s a Brown’s peony that grows in high elevations whose name aptly describes its looks. And there’s a similar looking California peony that grows in the southern part of that state."}></Title>
            <Swipercom></Swipercom>
            <Title heading={"Awareness About Pats"}
             subheading={"It is a test that quantifies the link between oral language development and phonological awareness. You'll discern how your students manipulate sounds, and identify their strengths and weaknesses in sound awareness skills"}
              banner2={`${banner}`}></Title>
              <div className="w-[96%] mx-auto">
                   <div>
                      <img src="" alt="" srcset="" />
                      <p></p>
                   </div>
                   <div>
                       <p></p>
                       <img src="" alt="" srcset="" />
                   </div>
                   <div>
                       <img src="" alt="" />
                       <p></p>
                   </div>
              </div>
        </div>
    )
}
export default Home