import { Link } from "react-router-dom"
import logo from '../assets/images/logo.jpeg'
import { Datepicker } from "flowbite-react"

const Footer = () => {
    const today = new Date();
   
    const month = today.getMonth()+1;
const year = today.getFullYear();
const date = today. getDate();
const currentDate = month + "/" + date + "/" + year;
    return (


        <footer className="bg-black opacity-70 rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="rounded-[50%] w-[36px] h-[36px]" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">CatroPat</span>
                    </a>
                    <ul className="flex flex-wrap space-x-4 items-center mb-6 text-sm font-medium sm:mb-0 text-white">
                        <Link to={'/'}>
                            <li>Home</li>
                        </Link>
                        <Link to={'/patlist'}><li>Pat Listing</li></Link>
                        <Link to={'/donation'}><li>Donation</li></Link>
                        <Link to={'/reg'}><li>Register</li></Link>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-white sm:text-center ">{currentDate}  <a href="https://flowbite.com/" className="hover:underline">CatroPat™</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}
export default Footer