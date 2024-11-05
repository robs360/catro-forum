import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import banner2 from '../assets/images/update.webp'
import Swal from "sweetalert2";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Update = () => {
    const [short, setDes] = useState('')
    const [value1, setValue] = useState('')
    const singleData = useLoaderData()
    console.log(singleData)
    const navigate = useNavigate()
    const bannerStyle = {
        backgroundImage: `url(${banner2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const petName = e.target.petName.value;
        const petCategory = e.target.category.value;
        const email = e.target.userEmail.value;
        const location = e.target.location.value;
        const date = e.target.date.value;
        const shortDes = e.target.shortDes.value;

        const petAge = e.target.petAge.value;
        const image = e.target.image.value;
        const info = {
            petName, petAge, petCategory, location, date, email, shortDes,
            value1, image
        }
        console.log(info)
        
        fetch(`https://catro-server.vercel.app/updatepet/${singleData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('jwt_token')}`
            },
            body: JSON.stringify(info)
        })
            .then(res => {
                if (!res.ok) {
                    navigate('/log')
                    return
                }
                res.json()
            })
            .then(data => {
                Swal.fire("Updated Successfully");
            })

    }
    return (
        <div className="w-full min-h-[80vh] rounded-md p-2" style={bannerStyle}>
            <div>
                <h1 className="text-2xl md:text-3xl
                     font-medium text-center">Let's Update As Your Wish</h1>
                <p className="text-center p-2 rounded-md bg-[#ffffff80] text-[17px] mt-3">The best course
                    of action may involve returning the pet to the animal
                    shelter or rescue organization <br /> that you adopted from .
                    If this isn't the case or isn't possible,
                    rehoming the pet yourself may be the best choice.</p>
            </div>
           <form  onSubmit={handleSubmit} action="">
           <div className="border-2 border-green-500 w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-7 p-2">
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Pet Name:</h1>
                    <input type="text" name="petName" defaultValue={`${singleData.name}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Email:</h1>
                    <input type="text" name="userEmail" defaultValue={`${singleData.email}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Category:</h1>
                    <input type="text" name="category" defaultValue={`${singleData.category}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Pet Age:</h1>
                    <input type="text" name="petAge" defaultValue={`${singleData.age}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Date:</h1>
                    <input type="text" name="date" defaultValue={`${singleData.date}`} placeholder="Format YYYY-MM-DD" className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Location:</h1>
                    <input type="text" name="location" defaultValue={`${singleData.location}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Short Description:</h1>
                    <input type="text" onChange={(e) => {
                        setDes(e.target.value)
                    }} name="shortDes" defaultValue={`${singleData.title}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>

                <div>
                    <h1 className="text-[18px] font-medium mr-2">Upload Image:</h1>
                    <input type="text" name="image" defaultValue={`${singleData.image}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                      
            </div>
            <div className="bg-white">
            <h1 className="text-[18px] font-medium mr-2">Description:</h1>
                    <ReactQuill theme="snow" name='try' value={value1} onChange={setValue} />
                </div>
                <div className="w-[300px] mt-8 mx-auto">
                    <button type="submit" className="text-xl p-2 rounded-md
                       font-medium text-white bg-black w-full">Submit</button>
                </div>
           </form>
        </div>
    )
}
export default Update