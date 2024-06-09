import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/Authprovider";
import { FaEdit, FaPlus } from "react-icons/fa";
import pause from '../assets/images/pause.png'
import unpause from '../assets/images/unpause.png'
import Swal from "sweetalert2";
import '../User/modal.css'
const MyCampaign = () => {
    const { user } = useContext(AuthContext)
    console.log(user.email)
    const navigate = useNavigate()
    const [info, setInfo] = useState([])
    const [modal,setModal]=useState(false);
    const [don,setDon]=useState([])
    useEffect(() => {
        fetch('https://catro-server.vercel.app/mycampaign', {
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
                const filterData = data.filter(item => item.email === user?.email)
                setInfo(filterData)
            })
    }, [])
    
    useEffect(()=>{
        fetch('https://catro-server.vercel.app/donators',{
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
        .then(data=>{
            
            const filterData=data.filter(item=>item.author===user?.email)
            setDon(filterData)
        })
    },[])
    console.log(don)
    const handleClicked = (id) => {
        fetch(`https://catro-server.vercel.app/update/campaign/status/${id}`, {
            method: 'PUT',
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
        .then(data=>{
            if(data.acknowledged){
                fetch(`https://catro-server.vercel.app/campaign/${id}`)
                .then(res=>res.json())
                .then(num=>{
                    if(num.status==='unpause'){
                        Swal.fire("Donation is open now");
                    }
                    else{
                        Swal.fire("Donation is close now");
                    }
                })
            }
            console.log(data)
        })
    }
    return (
        <div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>

                        <th className="">Pet Name</th>
                        <th className="">Max Donation</th>
                        <th className="">Donation Proress</th>
                        <th className="">Edit</th>
                        <th className="">Pause</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        info?.map(item => <tr className="">

                            <td>
                                <h1 className="text-[17px] text-center font-medium">{item.category}</h1>
                            </td>
                            <td>
                                <h1 className="text-[17px] text-center font-medium">{item.maximum_donation}</h1>
                            </td>

                            <td>
                                100%
                                <div className="bg-blue-600 h-2.5 w-[100px] rounded-full" style={{ width: '100%' }}></div>
                            </td>
                            <td>
                                <Link to={`/dash/updatecamp/${item._id}`}><FaEdit className="block mx-auto text-2xl"></FaEdit></Link>
                            </td>
                            <td>
                                <button onClick={() => handleClicked(item._id)} className="block mx-auto my-2"><img src={unpause}
                                    className="w-[32px] h-[32px]" alt="" srcset="" /></button>
                            </td>
                            
                        </tr>)
                    }
                  
                </tbody>

            </table>
            <button onClick={()=>{
                setModal(true)
            }} className="block mx-auto w-[220px] text-xl text-white p-1
             font-medium rounded-md bg-black mt-5">View Donators</button>
              {
                            modal&&(
                                <div className="modal">
                                <div className="overlay"></div>
                                <div className="modal-content">
                                       <h1 className="text-center text-2xl
                                        font-semibold my-3">See Your All Donators</h1>
                                        {
                                            don.length?(<>
                                             {
                                                don.map(item=> <div className="py-4 flex space-x-4
                                                 p-2 border-gray-400 border-2">
                                                    <h1 className="text-black">Donator Email:{item.email}</h1>
                                                    <h1 className="text-black">Donatioin Amound:{item.amount}</h1>
                                                </div>

                                                )
                                             }
                                            </>):(<>
                                             <p className="text-[18px] text-center text-red-500">Sorry! No Donation Yet</p>
                                            </>)
                                        }
                                       
                                        <button className="absolute -top-2 -right-2
                                         bg-white flex items-center justify-center
                                        rounded-[50%] w-[30px] h-[30px]" onClick={()=>{
                                            setModal(false)
                                        }}>
                                           <FaPlus className="text-2xl rotate-45"></FaPlus>
                                        </button>
                                </div>
                            </div>
                            )
                        }
        </div>
    )
}
export default MyCampaign