import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import img1 from '../assets/images/fish1.avif'
import img2 from '../assets/images/cat1.png'
import img3 from '../assets/images/data9.jpg'
import img4 from '../assets/images/update.webp'
import Swal from "sweetalert2";
const UpdateCampaign = () => {
    const singleData = useLoaderData()
    console.log(singleData)
    const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        const category = e.target.category.value;
        const max_donation = e.target.max.value;
        const last_date = e.target.date.value;
        const image = e.target.image.value;
        const shorts_des = e.target.short_des.value;
        const email = e.target.email.value;
        const info = {
            category, max_donation, last_date, image, shorts_des,
            email
        }
        console.log(info)
        console.log(singleData._id)
        fetch(`https://catro-server.vercel.app/updatecampaign/${singleData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('jwt_token')}`
            },
            body:JSON.stringify(info)
        })
        .then(res=>{
            if(!res.ok){
                navigate('/log')
            }
            else{
                return res.json()
            }
        })
        .then(data=>{
            Swal.fire("Updated Successfully");
            console.log(data)
        })
    }
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-5 items-center">
            <div>
                <div>
                    <h1 className="text-2xl md:text-3xl
                     font-medium text-center">Update Your Campaign</h1>
                    <p className="text-center p-2 rounded-md bg-[#ffffff80] text-[17px] mt-3">The best course
                        of action may involve returning the pet to the animal
                        shelter or rescue organization <br /> that you adopted from .
                        If this isn't the case or isn't possible,
                        rehoming the pet yourself may be the best choice.</p>
                </div>
                <form onSubmit={handleSubmit} action="">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="mt-4 mx-auto">
                            <h1 className="text-[18px] font-medium mr-2">Category:</h1>
                            <input type="text" name="category" defaultValue={`${singleData.category}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        <div className="mt-4 mx-auto">
                            <h1 className="text-[18px] font-medium mr-2">Email:</h1>
                            <input type="text" name="email" defaultValue={`${singleData.email}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        <div className="mt-4 mx-auto">
                            <h1 className="text-[18px] font-medium mr-2">Image:</h1>
                            <input type="text" name="image" defaultValue={`${singleData.pet_image}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        <div className="mt-4 mx-auto">
                            <h1 className="text-[18px] font-medium mr-2">Short Description:</h1>
                            <input type="text" name="short_des" defaultValue={`${singleData.short_description}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        <div className="mt-4 mx-auto">
                            <h1 className="text-[18px] font-medium mr-2">Last Date:</h1>
                            <input type="text" name="date"
                                defaultValue={`${singleData.last_date_of_donation}`} placeholder="Format YYYY-MM-DD" className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        <div className="mt-4 mx-auto">
                            <h1 className="text-[18px] font-medium mr-2">Maximum Donation:</h1>
                            <input type="text" name="max" defaultValue={`${singleData.maximum_donation}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                    </div>
                    <div className="w-[260px] mx-auto mt-8">
                        <button type="submit" className="h-[42px] w-full rounded-md
                         text-xl bg-black text-white font-medium">
                            Submit
                        </button>
                    </div>
                </form>

            </div>
            <div className="hidden md:flex">
                <div className="grid grid-cols-2 gap-4">
                    <div >
                        <img src={img1} className="w-[140px] h-[130px]
                        rounded-md" alt="" srcset="" />
                    </div>
                    <div>
                        <img src={img2} className="w-[140px] h-[130px]
                        rounded-md" alt="" srcset="" />
                    </div>
                    <div>
                        <img src={img3} className="w-[140px] h-[130px]
                        rounded-md" alt="" srcset="" />
                    </div>
                    <div>
                        <img src={img4} className="w-[140px] h-[130px]
                        rounded-md" alt="" srcset="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default UpdateCampaign