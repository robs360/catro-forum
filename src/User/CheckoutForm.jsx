import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/Authprovider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm=({singleData})=>{
    const navi=useNavigate()
    const {user}=useContext(AuthContext)
    const [error,setError]=useState('')
    const [clientSecret, setClientsecret] = useState('');
    const stripe = useStripe();
    const elements = useElements()
    useEffect(() => {
        if (singleData.maximum_donation > 0) {
            const price = { sum:singleData?.maximum_donation }
            fetch('https://catro-server.vercel.app/create-payment-intent', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(price)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setClientsecret(data.clientSecret)
                })
        }
    }, [singleData?.maximum_donation])
    const handleSubmit=async (e)=>{
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error is ', error)
            setError(error.message)
        }
        else {
            console.log('Payment method is', paymentMethod)
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log("it is error")
        }
        else{
            console.log('It is payment Intent ',paymentIntent)
            if(paymentIntent.status==='succeeded'){
                Swal.fire({
                    title: `Your donation succeeded and transaction id is ${paymentIntent.id}`,
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
            }
            const information={
                amount:singleData.maximum_donation,
                author:singleData.email,
                donator:user?.email,
                image:singleData.pet_image,
                pet_name:singleData.category
            }
            fetch('https://catro-server.vercel.app/donators',{
                method:'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('jwt_token')}`
                },
                body:JSON.stringify(information)
            })
            .then(res=>{
                if(!res.ok){
                    navi('/log')
                }
                else{
                    return res.json()
                }
            })
            .then(data=>console.log(data))
        }
    }
    return(
        <form onSubmit={handleSubmit}>
              <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                            
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="w-[100px] mt-4 text-xl italic 
            font-medium bg-orange-400 rounded-md" disabled={!stripe || !clientSecret}>Pay</button>
            <p className="text-red-500 text-center">{error}</p>
            <h1 className="my-3 text-[17px]">You have to pay:{singleData.maximum_donation}</h1>
        </form>
    )
}
export default CheckoutForm