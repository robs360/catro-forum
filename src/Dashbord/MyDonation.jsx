import React, { useContext, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Authentication/Authprovider";

const MyDonation = () => {
    const navigate = useNavigate()
    const {user}=useContext(AuthContext)
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/donators', {
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
                console.log(data)
                const filterData = data.filter(item => item.donator === user?.email)
                setInfo(filterData)
            })
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/donators/${id}`, {
            method: 'DELETE',
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
                Swal.fire("Refund will Procced");
                fetch('http://localhost:5000/donators', {
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
                        console.log(data)
                        const filterData = data.filter(item => item.donator === user?.email)
                        setInfo(filterData)
                    })
            })
    }
    return (
        <div>
            <div className="shadow-lg rounded-md">
                <h1 className="text-2xl md:text-3xl
                     font-medium text-center">See Your Donation</h1>
                <p className="text-center p-2 rounded-md bg-[#ffffff80] text-[17px] mt-3">The best course
                    of action may involve returning the pet to the animal
                    shelter or rescue organization <br /> that you adopted from .
                    If this isn't the case or isn't possible,
                    rehoming the pet yourself may be the best choice.</p>
            </div>
            <div className="mt-4 w-full">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="">Image</th>
                            <th className="">Donation</th>
                            <th className="">Pet Name</th>
                            <th className="">Refund</th>

                        </tr>
                        {
                            info.map(item => <tr>
                                <th><img src={item.image}
                                    className="block mx-auto rounded-[50%] w-[50px] h-[45px] my-1"
                                    alt="" srcset="" /> </th>
                                <th>{item.amount}</th>
                                <th>{item.pet_name}</th>
                                <th><button onClick={() => handleDelete(item._id)}><FaTrash className="text-2xl block mx-auto"></FaTrash></button></th>
                            </tr>)
                        }
                    </thead>
                </table>
            </div>
        </div>
    )
}
export default MyDonation