
import { Link, NavLink } from 'react-router-dom'
import logo from './assets/images/logo.jpeg'
const Nav = () => {
    return (
        <div className='w-full'>
            <div className="w-[96%] mx-auto bg-black flex
       items-center opacity-90 p-2 md:p-3 rounded-md justify-between">
                <div>
                    <h1 className='flex text-white items-center text-xl
                font-semibold'>CatroPat
                        <img src={logo} className='w-[35px] 
                    rounded-[50%] h-[35px] ml-2' alt="" srcset="" />
                    </h1>
                </div>
                <div className='flex text-white list-style-none space-x-3 items-center'>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-white text-[18px]" : isActive ? "text-black text-[17px] rounded-md bg-white px-1 font-semibold" : ""
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/patlist"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-white text-[18px]" : isActive ? "text-black text-[17px] rounded-md bg-white px-1 font-semibold" : ""
                        }
                    >
                        Pat Listing
                    </NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-white text-[18px]" : isActive ? "text-black text-[17px] rounded-md bg-white px-1 font-semibold" : ""
                        }
                    >
                        Donation
                    </NavLink>
                    <NavLink
                        to="/reg"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-white text-[18px]" : isActive ? "text-black text-[17px] rounded-md bg-white px-1 font-semibold" : ""
                        }
                    >
                        Register
                    </NavLink>
                </div>
                <div>
                    <Link to={"/log"}>
                        <button className='text-white py-1 px-3
                   rounded-md text-xl bg-orange-400 font-semibold'>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav