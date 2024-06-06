import React, { useEffect, useState } from "react";

import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaPlus } from "react-icons/fa";
const Dashboard = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        fetch('http://localhost:5000/pet',{
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(res=>{
            if(!res.ok){
                
                navigate('/log')
            }
            else{
                return res.json()
            }
        })
        .then(data=>console.log('as'))
    },[])
    return (
        <div className="w-[96%] mx-auto mb-14 flex justify-between gap-5 mt-5">
            <div className="md:w-[270px] p-3 rounded-md bg-orange-400 shadow-2xl min-h-[80vh]">
                <li className="my-1  text-[19px] font-medium list-none mx-auto p-1 items-center">

                    <NavLink to="/dash"
                        className={({ isActive, isPending }) =>
                            isPending ? "flex items-center" : isActive ? "bg-gray-400 flex p-1 items-center rounded-md" : "flex items-center"
                        }>
                        <FaPlus className="mr-2"></FaPlus>
                        Add a pet</NavLink></li>
                <li className="my-1  text-[19px] mt-4 font-medium list-none mx-auto p-1 items-center">

                    <NavLink to="/dash/myadded_pet"
                        className={({ isActive, isPending }) =>
                            isPending ? "flex items-center" : isActive ? "bg-gray-400 flex p-1 items-center rounded-md" : "flex items-center"
                        }>
                        <FaPlus className="mr-2"></FaPlus>
                        My added pet</NavLink></li>
                <li className="my-1  text-[19px] mt-4 font-medium list-none mx-auto p-1 items-center">

                    <NavLink to="/dash/createcamp"
                        className={({ isActive, isPending }) =>
                            isPending ? "flex items-center" : isActive ? "bg-gray-400 flex p-1 items-center rounded-md" : "flex items-center"
                        }>
                        <FaPlus className="mr-2"></FaPlus>
                        Create Donation</NavLink></li>
                <li className="my-1  text-[19px] mt-4 font-medium list-none mx-auto p-1 items-center">

                    <NavLink to="/dash/mycamp"
                        className={({ isActive, isPending }) =>
                            isPending ? "flex items-center" : isActive ? "bg-gray-400 flex p-1 items-center rounded-md" : "flex items-center"
                        }>
                        <FaPlus className="mr-2"></FaPlus>
                        My Donation Campaign</NavLink></li>
                <li className="my-1  text-[19px] mt-4 font-medium list-none mx-auto p-1 items-center">

                    <NavLink to="/dash/adopreq"
                        className={({ isActive, isPending }) =>
                            isPending ? "flex items-center" : isActive ? "bg-gray-400 flex p-1 items-center rounded-md" : "flex items-center"
                        }>
                        <FaPlus className="mr-2"></FaPlus>
                        My Adopttion request</NavLink></li>
                <li className="my-1  text-[19px] mt-4 font-medium list-none mx-auto p-1 items-center">

                    <NavLink to="/dash/mydonation"
                        className={({ isActive, isPending }) =>
                            isPending ? "flex items-center" : isActive ? "bg-gray-400 flex p-1 items-center rounded-md" : "flex items-center"
                        }>
                        <FaPlus className="mr-2"></FaPlus>
                        My Donation</NavLink></li> <br />

                <div>
                    <h1 className="text-xl font-medium
                       text-center">_______Admin_______</h1>
                </div>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Dashboard