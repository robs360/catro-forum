
import { Link, NavLink } from 'react-router-dom'
import logo from './assets/images/logo.jpeg'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './Authentication/Authprovider'
import { FaBars, FaMoon, FaPlus, FaSignOutAlt, FaSun } from 'react-icons/fa'
import './App.css'
import '../src/Home/style.css'
import { Tooltip } from 'react-tooltip'
const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    const [visit, setVisit] = useState(false)
    const [visible, setVisible] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    useEffect(() => {
        if (isChecked) {
            document.body.style.backgroundColor = 'gray';
        } else {
            document.body.style.backgroundColor = 'white';
        }
    }, [isChecked]);
    const handleclicked = () => {
        logOut()
            .then(res => {

                setVisible(false)

            })
            .catch(error => console.error(error))
    }
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };


    const handleButtonClick = () => {
        // Delay the state update to allow the transition to take effect
        setVisit(false);
    };
    return (
        // 
        <div className='mt-2 w-full mx-auto z-50'>
            <div className="w-full bg-blue-900   flex
       items-center opacity-90 p-2 md:p-3 justify-between">
                <div>
                    <h1 className='flex text-orange-400 items-center text-xl
                font-semibold'>CatroPat
                        <img src={logo} className='w-[35px] 
                    rounded-[50%] h-[35px] ml-2' alt="" srcset="" />
                    </h1>
                </div>
                <div className='hidden md:flex text-white list-style-none space-x-9 items-center'>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-white text-[18px] font-medium" : isActive ? "text-black text-[17px] rounded-md bg-white px-1 font-semibold" : "text-[18px]"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/patlist"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-white text-[18px] font-medium" : isActive ? "text-black text-[17px] rounded-md bg-white px-1 font-semibold" : "text-[18px]"
                        }
                    >
                        Pat Listing
                    </NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-white text-[18px] font-medium" : isActive ? "text-black text-[17px] rounded-md bg-white px-1 font-semibold" : "text-[18px]"
                        }
                    >
                        Donation Campaign
                    </NavLink>
                    <NavLink
                        to="/reg"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-white text-[18px] font-medium" : isActive ? "text-black text-[17px] rounded-md bg-white px-1 font-semibold" : "text-[18px]"
                        }
                    >
                        Register
                    </NavLink>

                </div>
                <div className="flex md:hidden z-50">
                    <button onClick={() => {
                        if (visit) {
                            setVisit(false)
                        }
                        else {
                            setVisit(true)
                        }
                    }}>
                        {
                            visit ?
                                (<></>) :
                                (<FaBars className='z-50 text-xl text-white'></FaBars>)
                        }
                    </button>
                    {
                        visit ? (<div
                            className={`h-[100vh] w-[210px] p-3 z-50 bg-black absolute top-[10px] transition-all duration-1000 ease-in-out ${
                                visit ? "left-0" : "-left-[300px]"
                            }`}
                        >
                            {/* Button to hide the sidebar */}
                            <button>
                                <FaPlus
                                    onClick={handleButtonClick}
                                    className="z-50 p-2 text-4xl text-white rotate-45 absolute top-0 right-0 bg-gray-300 rounded-[50%]"
                                />
                            </button>

                            {/* Sidebar navigation links */}
                            <ul className="text-white flex flex-col">
                                <NavLink
                                    to={"/"}
                                    className={({ isActive }) =>
                                        `p-2 ${isActive ? "bg-gray-300 rounded-md font-medium text-orange-400" : ""}`
                                    }
                                >
                                    Home
                                </NavLink>
                                <NavLink className={({ isActive }) =>
                                        `p-2 ${isActive ? "bg-gray-300 rounded-md p-2 font-medium text-orange-400" : ""}`
                                    } to={"/patlist"} >
                                    Patlist
                                </NavLink>
                                <NavLink className={({ isActive }) =>
                                        `p-2 ${isActive ? "bg-gray-300 rounded-md p-2 font-medium text-orange-400" : ""}`
                                    } to={"/donation"}>
                                    Donation
                                </NavLink>
                                <NavLink className={({ isActive }) =>
                                        `p-2 ${isActive ? "bg-gray-300 rounded-md p-2 font-medium text-orange-400" : ""}`
                                    } to={"/reg"}>
                                    Register
                                </NavLink>
                            </ul>
                        </div>) : (<></>)
                    }

                </div>
                <div>
                    {
                        user ? (<button onClick={() => {
                            if (visible) {
                                setVisible(false)
                            }
                            else {
                                setVisible(true)
                            }
                        }}>

                            <img title={user?.displayName} data-tooltip-id="hello" src={user.photoURL} className="w-[36px]
                         h-[36px] rounded-[50%]" alt="" />
                            <Tooltip id="hello" />
                        </button>) : (<Link to={'/log'}>
                            <button
                                className="text-white animated-border  bg-orange-400 px-3 py-1 rounded-md shadow-lg btn text-xl font-semibold">
                                Login
                            </button>
                        </Link>)
                    }

                    {
                        visible ? (<div title={user.displayName} className="flex flex-col">
                            <ul className="flex flex-col gap-4 items-start absolute z-50 drp top-20">

                                <Link to={'/dash'}><button onClick={() => {
                                    setVisible(false)
                                }} className="text-black text-xl font-semibold">Dashboard</button></Link>

                                <button onClick={() => {
                                    handleclicked(); setVisible(false)
                                }} className="text-black space-x-3 z-50 text-xl font-semibold 
                     flex items-center">Logout
                                    <FaSignOutAlt className='text-xl ml-3 mt-1 
                                    text-red-500'></FaSignOutAlt>
                                </button>
                            </ul>
                        </div>) : (<div></div>)
                    }

                </div>
            </div>
        </div>
    )
}

export default Nav