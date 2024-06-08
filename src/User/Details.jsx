import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import star from '../assets/images/star.png'
import sp from '../assets/images/special1.jpeg'
import sp1 from '../assets/images/special2.jpeg'
import sp2 from '../assets/images/special4.jpeg'
import './modal.css'
import { AuthContext } from "../Authentication/Authprovider";
import { FaPlus, FaStar } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
const Details = () => {
    const singleData = useLoaderData()
    const { user } = useContext(AuthContext)
    const [modal, setModal] = useState(false);
    console.log(singleData)
    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const userEmail = e.target.email.value;
        const number = e.target.num.value;
        const address = e.target.address.value;
        const author = singleData.email
        const adoptInfo = {
            name, userEmail, number, address,
            petId: singleData._id, category: singleData.category,
            petName: singleData.name, author
        }
        axios.post('http://localhost:5000/adopt', adoptInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className="w-[96%] mx-auto my-14">
            <div className="p-3 py-4 bg-gray-100 flex-col md:flex-row rounded-md flex items-center justify-center">
                <div>
                    <h1 className="text-[18px] font-medium italic">Help</h1>
                    <p className="text-[17px] font-medium">018348..23 Always Ready</p>
                    <p className="text-[17px] font-medium">Office:Dhaka,gulshan,3/b8</p>
                    <div className="flex space-x-2 my-3">
                        <FaStar className="text-4xl text-black"></FaStar>
                        <FaStar className="text-4xl text-black"></FaStar>
                        <FaStar className="text-4xl text-black"></FaStar>
                        <FaStar className="text-4xl text-black"></FaStar>
                        <FaStar className="text-4xl text-black"></FaStar>

                    </div>
                    <h1 className="text-[18px] font-medium italic
                     mt-2">Derect Call or Email for Adopt</h1>
                    <p className="text-[17px] font-medium">Number:01834831323</p>
                    <p className="text-[17px] font-medium">Email:www.Programminghero.com</p>
                </div>
                <img src={singleData.image} className="w-[95%] md:w-[40%]  h-[400px]
                 rounded-md mx-auto" alt="" srcset="" />
                <div className="hidden md:grid grid-cols-2 gap-3">

                    <img src={singleData.image} className="rounded-md w-[110px] h-[120px]" alt="" srcset="" />
                    <img src={sp} className="rounded-md w-[110px] h-[120px]" alt="" srcset="" />
                    <img src={sp1} className="rounded-md w-[110px] h-[120px]" alt="" srcset="" />
                    <img src={sp2} className="rounded-md w-[110px] h-[120px]" alt="" srcset="" />
                </div>
            </div>
            <div className="flex justify-between mt-4 md:flex-row flex-col gap-6 items-center">
                {/* details */}
                <div className="w-full md:w-[49%] ">
                    <div className="font-medium w-full text-gray-500">
                        <h1 className="text-3xl font-medium text-black mb-5">Descirption</h1>
                        {singleData.description}</div>

                    <div className="font-medium w-full text-gray-500">
                        <h1 className="text-3xl mt-6
                               font-medium text-black mb-6"> Short Description</h1>
                        <p>{singleData.title}</p>
                    </div>
                </div>
                <div className="w-full md:w-[350px] bg-gray-300 rounded-md p-3">
                    <div className="w-full rounded-md bg-white p-2">
                        <div className="flex justify-between text-gray-500 border-b-[1px] pb-4 border-gray-400">
                            <div>
                                <h1 className="text-[18px] font-medium
                                    ">Name</h1>
                                <h1 className="text-[18px] mt-2 font-medium
                                    ">{singleData.name}</h1>

                            </div>
                            <div className="w-[100px] text-gray-500">
                                <h1 className="text-[18px] font-medium
                                    ">Category</h1>
                                <h1 className="text-[18px] mt-2 font-medium
                                    ">{singleData.category}</h1>

                            </div>
                        </div>
                        <div className="flex justify-between mt-6 text-gray-500 pb-4 border-b-[1px] border-gray-400">
                            <div>
                                <h1 className="text-[18px] font-medium
                                    ">Location</h1>
                                <h1 className="text-[18px] mt-2 font-medium
                                    ">{singleData.location}</h1>

                            </div>
                            <div className="w-[100px] text-gray-500">
                                <h1 className="text-[18px] font-medium
                                    ">Date</h1>
                                <h1 className="text-[18px] mt-2 font-medium
                                    ">{singleData.date}</h1>

                            </div>

                        </div>
                        <div className="flex justify-between mt-4 text-gray-500 items-center">
                            <h1 className="text-[18px] font-medium
                                    ">Age</h1>
                            <h1 className="w-[100px] text-[18px] font-medium
                                    ">{singleData.age} Years</h1>
                        </div>
                        <button onClick={() => {
                            setModal(true)
                        }} className="w-full text-white text-xl bg-black font-medium
                        italic p-2 rounded-lg mt-5">Adopt</button>
                        {
                            modal && (
                                <div className="modal">
                                    <div className="overlay"></div>
                                    <div className="modal-content">
                                     {
                                        singleData.status==='Not Adopted'?(   <div>
                                            <h1 className="text-center text-2xl
                                        font-semibold my-3">Let's Adopt it</h1>
                                            <form onSubmit={handleSubmit}>
                                                <input className="w-[300px] h-[42px] rounded-md
                                             border-2 border-gray-400 p-1
                                            " name="name" type="text" value={user?.displayName} placeholder="Your Name" />
                                                <input className="w-[300px] h-[42px] rounded-md 
                                            border-2 border-gray-400 mt-3 p-1
                                            " type="email" name="email" value={user?.email} placeholder="Your Email" />
                                                <input className="w-[300px] h-[42px] rounded-md 
                                            border-2 border-gray-400 mt-3 p-1
                                            " type="number" name="num" placeholder="Your Phone Number" />
                                                <input className="w-[300px] h-[40px] rounded-md 
                                            border-2 border-gray-400 mt-3 p-1
                                            " type="text" name="address" placeholder="Your Address" />
                                                <button className="w-[300px] h-[42px] rounded-md bg-black
                                            text-[18px] font-semibold text-white mt-3">Submit</button>
                                            </form>
                                            <h1 className="text-[18px] font-medium mt-2">Category:{singleData.category}</h1>
                                        </div>):(<p className="text-center
                                         text-red-400 mt-3 text-[17px] font-medium">Sorry! It has already Adopted</p>)
                                     }
                                        <button className="absolute -top-2 -right-2
                                         bg-white flex items-center justify-center
                                        rounded-[50%] w-[30px] h-[30px]" onClick={() => {
                                                setModal(false)
                                            }}>
                                            <FaPlus className="text-2xl rotate-45"></FaPlus>
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details