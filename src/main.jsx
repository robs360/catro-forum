import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/home.jsx';
import Login from './Authentication/Login.jsx';
import Register from './Authentication/Register.jsx';
import AuthProvider from './Authentication/Authprovider.jsx';
import Patlisting from './User/patlisting.jsx';
import Private from './Authentication/Private.jsx';
import Details from './User/Details.jsx';
import Donationcamp from './User/Donatoncamp.jsx';
import Detailsdonation from './User/Detailsdonation.jsx';
import Dashboard from './Dashbord/Dashboard.jsx';
import AddPet from './Dashbord/AddPet.jsx';
import Myadded from './Dashbord/Myadded.jsx';
import Update from './Dashbord/Update.jsx';
import Createcampaign from './Dashbord/CreateCampaign.jsx';
import MyCampaign from './Dashbord/MyCampaign.jsx';
import UpdateCampaign from './Dashbord/UpdateCampaign.jsx';
import MyDonation from './Dashbord/MyDonation.jsx';
import AdoptionREQ from './Dashbord/AdoptionREQ.jsx';
import AllUser from './Admin/AllUser.jsx';
import AllPet from './Admin/AllPet.jsx';
import PetUpdate from './Admin/Petupdate.jsx';
import AllDonation from './Admin/AllDonation.jsx';
import CampaignUpdate from './Admin/CampaignUpdate.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
         path:'/',
         element:<Home></Home>
      },
      {
        path:'/log',
        element:<Login></Login>
     },
     {
      path:'/reg',
      element:<Register></Register>
     },
     {
      path:'/patlist',
      element:<Patlisting></Patlisting>
     },
     {
      path:'/donation',
      element:<Donationcamp></Donationcamp>
     },
    
     {
      path:'/details/:id',
      element:<Private><Details></Details></Private>,
      loader:({params})=>fetch(`https://catro-server.vercel.app/pat/${params.id}`)
     },
     {
      path:'/donation/details/:id',
      element:<Private><Detailsdonation></Detailsdonation></Private>,
      loader:({params})=>fetch(`https://catro-server.vercel.app/campaign/${params.id}`)
     },
     {
      path:'/dash',
      
      element:<Private><Dashboard></Dashboard></Private>,
      children:[
         {
           index:true,
           element:<Private><AddPet></AddPet></Private>
         },
         {
          path:'/dash/myadded_pet',
          element:<Private><Myadded></Myadded></Private>
         },
         {
          path:'/dash/update/:id',
          element:<Private><Update></Update></Private>,
          loader:({params})=>fetch(`https://catro-server.vercel.app/pat/${params.id}`)
         },
         {
           path:'/dash/createcamp',
           element:<Private><Createcampaign></Createcampaign></Private>
         },
         {
          path:'/dash/mycamp',
          element:<Private><MyCampaign></MyCampaign></Private>
         },
         {
          path:'/dash/updatecamp/:id',
          element:<Private><UpdateCampaign></UpdateCampaign></Private>,
          loader:({params})=>fetch(`https://catro-server.vercel.app/campaign/${params.id}`)
         },
         {
          path:'/dash/mydonation',
          element:<Private><MyDonation></MyDonation></Private>
         },
         {
          path:'/dash/adoptionreq',
          element:<Private><AdoptionREQ></AdoptionREQ></Private>
         },
         {
          path:'/dash/admin/alluser',
          element:<Private><AllUser></AllUser></Private>
         },
         {
          path:'/dash/admin/allpet',
          element:<Private><AllPet></AllPet></Private>
         },
         {
           path:'/dash/admin/petupdate/:id',
           element:<Private><PetUpdate></PetUpdate></Private>,
           loader:({params})=>fetch(`https://catro-server.vercel.app/pat/${params.id}`)
         },
         {
           path:'/dash/admin/donation',
           element:<Private><AllDonation></AllDonation></Private>
         },
         {
          path:'/dash/admin/campupdate/:id',
          element:<Private><CampaignUpdate></CampaignUpdate></Private>,
          loader:({params})=>fetch(`https://catro-server.vercel.app/campaign/${params.id}`)
         }
      ]
     },
    ]
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
