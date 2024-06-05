import React, { useEffect, useState } from "react";
import axios from "axios";
import vedio from '../assets/images/data9.jpg'
import { Link } from "react-router-dom";
const Donationcamp=()=>{
    const [info,setInfo]=useState([]);
    useEffect(()=>{
         axios.get('http://localhost:5000/campaign')
         .then(res=>setInfo(res.data))
    },[])
    const bannerStyle = {
        backgroundImage: `url(${vedio})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return(
        <div className="my-14 w-[96%] mx-auto">
              <div className="w-[92%] mx-auto my-14 shadow-xl py-2">
                <h1 className="text-3xl text-center font-semibold">See All The Donation Campaign</h1>
                <p className="text-center text-[17px] font-medium my-4">
                    An About Us page is a section on a website that provides information <br />
                    about a company, organization, or individual. It's an
                    opportunity to tell your brand's story, share your <br />
                    vision, introduce team members, <br />
                    and outline your history, values, and achievements.
                </p>

            </div>
            <div className="w-full min-h-[50vh] gap-7 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={bannerStyle}>
                {
                    info?.map(item=><div className="w-[356px] flex flex-col
                    mx-auto rounded-md p-2 bg-[#ffffff80]">
                            <img src={item.pet_image} className="w-full 
                            rounded-md h-[330px]" alt="" srcset="" />
                            <div className="flex justify-between mt-2 
                            text-[16px] font-medium">
                                <h1><span className="text-gray-700">Category:</span>:{item.category}</h1>
                                <h1><span className="text-gray-700">Max Donation:</span>{item.maximum_donation}</h1>
                            </div>
                            <div className=" mt-2 
                            text-[16px] font-medium">
                                <h1><span className="text-gray-700">Last Date Of Donation:</span>{item.last_date_of_donation}</h1>
                            </div>
                            <div className=" mt-2 
                            text-[16px] font-medium">
                                <h1><span className="text-gray-700">Short Description:</span>{item.short_description}</h1>
                            </div>
                            <Link to={`/donation/details/${item._id}`}><button className="w-full p-2 bg-black text-xl font-medium
                            mt-3 rounded-md text-white italic">Details</button></Link>
                    </div>)
                }
            </div>
        </div>
    )
}
export default Donationcamp