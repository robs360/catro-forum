import { Carousel } from "react-responsive-carousel"
import star from '../assets/images/star.png'
import user1 from '../assets/images/user1.avif'
import user2 from '../assets/images/user2.avif'
import user3 from '../assets/images/user4.avif'
import user4 from '../assets/images/user5.avif'

const Review=()=>{
   
    return(
        <Carousel autoPlay={true} infiniteLoop={true} interval={2000}  className="md:w-[500px] mb-16">
        <div className="w-[330px] rounded-md p-2 bg-[#ffffff] shadow-xl">
              <div className="">
                   <img src={user1} alt="" srcset="" />
                   <h1>Bear grills</h1>
              </div>
              <div className="flex space-x-2 my-3">
                  <img src={star} className="w-[26px] h-[26px]" alt="" srcset="" />
                  <img src={star} className="w-[26px] h-[26px]" alt="" srcset="" />
                  <img src={star} className="w-[26px] h-[26px]" alt="" srcset="" />
                  <img src={star} className="w-[26px] h-[26px]" alt="" srcset="" />
                  <img src={star} className="w-[26px] h-[26px]" alt="" srcset="" />
              </div>
              <p className="font-medium">User reviews provide social proof, influencing potential
                 customers by showcasing real experiences and opinions</p>
        </div>
        <div className="w-[330px] rounded-md p-2 bg-[#ffffff] shadow-xl">
              <div className="">
                   <img src={user4} alt="" srcset="" />
                   <h1>Virat</h1>
              </div>
              <div className="flex space-x-2 my-3">
                  <img src={star} className="w-[26px] h-[26px]" alt="" srcset="" />
                  <img src={star} className="w-[26px] h-[26px]" alt="" srcset="" />
                  <img src={star} className="w-[26px] h-[26px]" alt="" srcset="" />
                  <img src={star} className="w-[26px] h-[26px]" alt="" srcset="" />
                 
              </div>
              <p className="font-medium">User reviews provide social proof, influencing potential
                 customers by showcasing real experiences and opinions</p>
        </div>
        <div className="w-[330px] rounded-md p-2 bg-[#ffffff] shadow-xl">
              <div>
                   <img src={user3} className="h-[240px]" alt="" srcset="" />
                   <h1>Shahadat</h1>
              </div>
              <div className="flex space-x-2 my-3">
                  <img src={star} className="w-[26px] h-[26px]" alt="" srcset="" />
                  <img src={star} className="w-[26px] h-[26px]" alt="" srcset="" />
                  <img src={star} className="w-[26px] h-[26px]" alt="" srcset="" />
                  <img src={star} className="w-[26px] h-[26px]" alt="" srcset="" />
                  <img src={star} className="w-[26px] h-[26px]" alt="" srcset="" />
              </div>
              <p className="font-medium">User reviews provide social proof, influencing potential
                 customers by showcasing real experiences and opinions</p>
        </div>
        <div className="w-[330px] rounded-md p-2 bg-[#ffffff] shadow-xl">
              <div>
                   <img src={user2}  alt="" srcset="" />
                   <h1>Monem</h1>
              </div>
              <div className="flex space-x-2 my-3">
                  <img src={star} className="w-[26px] h-[29px]" alt="" srcset="" />
                  <img src={star} className="w-[26px] h-[29px]" alt="" srcset="" />
                  <img src={star} className="w-[26px] h-[29px]" alt="" srcset="" />
                  <img src={star} className="w-[26px] h-[29px]" alt="" srcset="" />
                 
              </div>
              <p className="font-medium">User reviews provide social proof, influencing potential
                 customers by showcasing real experiences and opinions</p>
        </div>
    </Carousel>
    )
}
export default Review