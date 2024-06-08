import React, { useContext, useEffect, useState } from "react";

import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaPlus, FaUserShield } from "react-icons/fa";
import { AuthContext } from "../Authentication/Authprovider";
const Dashboard = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const [admin, setAdmin] = useState('')
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/isadmin/${user?.email}`, {
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('jwt_token')}`
                }
            })
                .then(res => {
                    if (!res.ok) {

                        navigate('/log')
                    }
                    else {
                        return res.json()
                    }
                })
                .then(data => {
                    setAdmin(data)
                    console.log(data)
                })
        }
    }, [user?.email])
    useEffect(() => {
        fetch('http://localhost:5000/pet', {
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('jwt_token')}`
            }
        })
            .then(res => {
                if (!res.ok) {

                    navigate('/log')
                }
                else {
                    return res.json()
                }
            })
            .then(data => console.log('as'))
    }, [])
    console.log(admin)
    if (!admin) {
        return <p className="text-center mt-5 text-[17px] font-medium">
            Loading...</p>
    }
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

                    <NavLink to="/dash/adoptionreq"
                        className={({ isActive, isPending }) =>
                            isPending ? "flex items-center" : isActive ? "bg-gray-400 flex p-1 items-center rounded-md" : "flex items-center"
                        }>
                        <FaPlus className="mr-2"></FaPlus>
                        Adopttion request</NavLink></li>
                <li className="my-1  text-[19px] mt-4 font-medium list-none mx-auto p-1 items-center">

                    <NavLink to="/dash/mydonation"
                        className={({ isActive, isPending }) =>
                            isPending ? "flex items-center" : isActive ? "bg-gray-400 flex p-1 items-center rounded-md" : "flex items-center"
                        }>
                        <FaPlus className="mr-2"></FaPlus>
                        My Donation</NavLink></li> <br />

                {
                    admin.admin && (
                        <div>
                            <h1 className="text-xl font-medium
                       text-center">_______Admin_______</h1>
                            <li className="my-1  text-[19px] mt-4 font-medium list-none mx-auto p-1 items-center">

                                <NavLink to="/dash/admin/alluser"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "flex items-center" : isActive ? "bg-gray-400 flex p-1 items-center rounded-md" : "flex items-center"
                                    }>
                                    <FaUserShield className="mr-2"></FaUserShield>
                                    All User</NavLink></li>
                                    <li className="my-1  text-[19px] mt-4 font-medium list-none mx-auto p-1 items-center">

                                <NavLink to="/dash/admin/allpet"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "flex items-center" : isActive ? "bg-gray-400 flex p-1 items-center rounded-md" : "flex items-center"
                                    }>
                                    <FaUserShield className="mr-2"></FaUserShield>
                                    All Pet</NavLink></li>
                                    <li className="my-1  text-[19px] mt-4 font-medium list-none mx-auto p-1 items-center">

                                <NavLink to="/dash/admin/donation"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "flex items-center" : isActive ? "bg-gray-400 flex p-1 items-center rounded-md" : "flex items-center"
                                    }>
                                    <FaUserShield className="mr-2"></FaUserShield>
                                    All Donation</NavLink></li>
                        </div>
                    )
                }

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Dashboard