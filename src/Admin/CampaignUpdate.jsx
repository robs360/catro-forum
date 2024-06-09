import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import img1 from '../assets/images/img1.avif'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.webp'
import img4 from '../assets/images/img4.avif'
import Swal from "sweetalert2";
const CampaignUpdate=()=>{
    const singleData=useLoaderData();
    const navigate=useNavigate();
    console.log(singleData)
    const handleSubmit=(e)=>{
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
        fetch(`http://localhost:5000/updatecampaign/${singleData._id}`, {
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
    return(
        <div>
            <div>
                <h1  className="text-2xl md:text-3xl
                     font-medium text-center">Update It</h1>
                       <p className="text-center p-2 rounded-md bg-[#ffffff80] text-[17px] mt-3">The best course
                    of action may involve returning the pet to the animal
                    shelter or rescue organization <br /> that you adopted from .
                    If this isn't the case or isn't possible,
                    rehoming the pet yourself may be the best choice.</p>
                <div className="my-5 hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                      <img src={img1} alt="" className="w-[120px] h-[120px] rounded-md mx-auto" />
                      <img src={img2} alt="" className="w-[120px] h-[120px] rounded-md mx-auto" />
                      <img src={img3} alt="" className="w-[120px] h-[120px] rounded-md mx-auto" />
                      <img src={img4} alt="" className="w-[120px] h-[120px] rounded-md mx-auto" />
                </div>
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
    )
}
export default CampaignUpdate