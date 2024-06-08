import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import './modal.css'
import Swal from "sweetalert2";
import { FaPlus } from "react-icons/fa";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe('pk_test_51PM2J8EJ4sCmNGOlp0lWIj1nIJAit6cK07PhE5dCR453mHFf9O0F8uj4mHcNqrQlOCdJqOSSOBovhBNOFkNqxA5k00FrwVLVQr')
const Detailsdonation = () => {
    const singleData = useLoaderData()
    const [modal, setModal] = useState(false);
    const handleCheck = () => {
        const today = new Date()
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const currentDate = year + "-" + month + "-" + date;
        console.log('today date is ', currentDate)
        console.log(singleData.last_date_of_donation)
        if (singleData.last_date_of_donation < currentDate) {
            Swal.fire("Sorry! Donation time is over");
            return
        }
        else {
            setModal(true)
        }
    }
    return (
        <div className="w-[96%] mx-auto flex justify-between md:flex-row 
        
        gap-5 flex-col mt-10 p-5 bg-gray-300 rounded-md">
            <div>
                <img src={singleData.pet_image} className="h-[440px] rounded-md" alt="" srcset="" />
            </div>
            <div className="w-full md:w-[52%] bg-white p-2 rounded-md">
                <div>

                    <p className="text-[17px]">
                        <span className="text-[18px] font-medium border-b-2
                        border-black">Description : </span>
                        {singleData.long_description} Animals are
                        multicellular, eukaryotic organisms in the biological kingdom Animalia
                        , With few exceptions, animals consume
                        organic material, breathe oxygen, have
                        myocytes and are able to move, can
                        reproduce sexually, and grow from a
                        hollow sphere of cells, the blastula, during embryonic development.</p>
                    <p className="text-[17px] font-medium mt-4"> <span className="text-[18px] font-medium border-b-2
                        border-black">Shorts Description:</span> {singleData.short_description}</p>
                </div>
                <div className="mt-5 border-t-2 border-b-2 
                 flex justify-between border-gray-400 py-3">
                    <h1 className="text-[17px] font-medium  
                     ">Mximum Donation:{singleData.maximum_donation} tk</h1>
                    <h1 className="text-[17px] font-medium  
                     ">Last Donation Date:{singleData.last_date_of_donation}</h1>
                </div>
                <div className="mt-5 border-b-2 
                 flex justify-between border-gray-400 py-3">
                    <h1 className="text-[17px] font-medium  
                     ">Added Date:{singleData.date} tk</h1>
                    <button onClick={handleCheck} className="text-xl p-2 italic text-white
                     bg-black w-[100px] rounded-md font-medium">Donate</button>
                    {
                        modal && (
                            <div className="modal">
                                <div className="overlay"></div>
                                <div className="modal-content">
                                   {
                                     singleData.status==='unpause'?( <div>
                                        <h1 className="text-center text-2xl
                                    font-semibold my-3">Your Donation platform</h1>
                                        <Elements stripe={stripePromise}>
                                            <CheckoutForm singleData={singleData}></CheckoutForm>
                                        </Elements>
                                        <h1 className="font-medium mt-2">Category:{singleData.category}</h1>
                                    </div>):(<p className="text-red-500 text-center mt-4
                                       text-[17px] font-medium">
                                        Sorry! Donation is Pause in this Moment
                                    </p>)
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
    )
}
export default Detailsdonation