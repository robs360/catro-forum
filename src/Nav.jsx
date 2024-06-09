
import { Link, NavLink } from 'react-router-dom'
import logo from './assets/images/logo.jpeg'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './Authentication/Authprovider'
import { FaBars, FaMoon, FaPlus, FaSignOutAlt, FaSun } from 'react-icons/fa'
import './App.css'
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
    return (
        // 
        <div className='w-full mt-3'>
            <div className="w-[96%] mx-auto bg-gradient-to-b from-orange-300 to-orange-600  flex
       items-center opacity-90 p-2 md:p-3 rounded-md justify-between">
                <div>
                    <h1 className='flex text-white items-center text-xl
                font-semibold'>CatroPat
                        <img src={logo} className='w-[35px] 
                    rounded-[50%] h-[35px] ml-2' alt="" srcset="" />
                    </h1>
                </div>
                <div className='hidden md:flex text-white list-style-none space-x-5 items-center'>
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
                    <label className='flex items-center space-x-2'>
                        <FaSun></FaSun>
                        <input className='rounded-[50%]'
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <FaMoon></FaMoon>
                    </label>
                </div>
                <div className="flex md:hidden">
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
                                (<FaPlus className='text-xl text-white rotate-45'></FaPlus>) :
                                (<FaBars className='text-xl text-white'></FaBars>)
                        }
                    </button>
                    {
                        visit ? (<div className="flex flex-col absolute menu z-50">
                            <ul className="flex flex-col gap-4 z-50">
                                <Link to={'/'}>
                                    <li>Home</li>
                                </Link>
                                <Link to={'/patlist'}><li>Pat Listing</li></Link>
                                <Link to={'/donation'}><li>Donation</li></Link>
                                <Link to={'/reg'}><li>Register</li></Link>
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
                                className="text-white btn text-xl font-semibold">
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