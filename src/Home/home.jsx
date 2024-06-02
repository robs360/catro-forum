
import React from "react";
import Banner from "./Banner";
import con from '../assets/images/contect.jpeg'
import Swipercom from "./Swiper";
import Title from "./Title";
import banner2 from '../assets/images/nature.jpg'
import banner from '../assets/images/banner.jpg'
import save1 from '../assets/images/save1.avif'
import save2 from '../assets/images/save6.avif'
import save3 from '../assets/images/save5.avif'
import bg from '../assets/images/gb2.avif'
import bg3 from '../assets/images/bg3.jpg'
import about from '../assets/images/about.jpeg'
import team from '../assets/images/team.jpeg'
import star from '../assets/images/star.png'
import { FaAddressBook, FaEnvelope, FaPhone } from "react-icons/fa";
import Review from "./Review";
import review from '../assets/images/rev.jpg'
const Home = () => {
    const bannerStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    const bannerStyle2 = {
        backgroundImage: `url(${bg3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div>
            <Banner></Banner>
            <Title banner2={`${banner2}`}
                heading={"What Are You Searching For"}
                subheading={"There are 33 species in the genus Paeonia, almost all of which are native to temperate Eurasia. However, there are two that are native to the western part of North America.And they don’t look much like the easily recognized bush peonies. In the Pacific Northwest there’s a Brown’s peony that grows in high elevations whose name aptly describes its looks. And there’s a similar looking California peony that grows in the southern part of that state."}></Title>
            <Swipercom></Swipercom>
            <Title heading={"Awareness About Pats"}
                subheading={"It is a test that quantifies the link between oral language development and phonological awareness. You'll discern how your students manipulate sounds, and identify their strengths and weaknesses in sound awareness skills"}
                banner2={`${banner}`}></Title>
            <div className="w-[96%] mx-auto py-5" style={bannerStyle}>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <img src={save1} className="w-[350px] md:w-[450px] mx-auto rounded-md" alt="" srcset="" />
                    <div className="mx-auto p-2 w-[350px] bg-gray-100 rounded-md opacity-85">
                        <ol>
                            <p className="mt-3 text-center">Spay or neuter your own cats before they're 5 months old.
                                Volunteer to socialize feral kittens.
                                Download this flyer to spread the word about community cats and TNR.
                                Volunteer to help at a spay/neuter event for community cats.</p>
                            <p className="mt-3 text-center">You may see them hanging outside a neighbor
                                ’s home, lurking around the dumpsters behind
                                a local restaurant or grocery store, o
                                r loitering around a commercial lot.</p>
                        </ol>
                        <button className="text-xl font-semibold block mt-6
                        bg-black text-white rounded-md p-2">Give Information</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 my-10">
                    <div className="mx-auto p-2 bg-gray-100 w-[350px] rounded-md opacity-85">
                        <ol>
                            <p className="mt-3 text-center">Spay or neuter your own cats before they're 5 months old.
                                Volunteer to socialize feral kittens.
                                Download this flyer to spread the word about community cats and TNR.
                                Volunteer to help at a spay/neuter event for community cats.</p>
                            <p className="mt-3 text-center">You may see them hanging outside a neighbor
                                ’s home, lurking around the dumpsters behind
                                a local restaurant or grocery store, o
                                r loitering around a commercial lot.</p>
                        </ol>
                        <button className="text-xl font-semibold block mt-6
                        bg-black text-white rounded-md p-2">Give Information</button>
                    </div>
                    <img src={save2} className="w-[350px] md:w-[450px] h-[360px] mx-auto rounded-md" alt="" srcset="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <img src={save3} className="w-[350px] md:w-[450px] mx-auto rounded-md" alt="" />
                    <div className="mx-auto p-2 w-[350px] bg-gray-100 rounded-md opacity-85">
                        <ol>
                            <p className="mt-3 text-center">Spay or neuter your own cats before they're 5 months old.
                                Volunteer to socialize feral kittens.
                                Download this flyer to spread the word about community cats and TNR.
                                Volunteer to help at a spay/neuter event for community cats.</p>
                            <p className="mt-3 text-center">You may see them hanging outside a neighbor
                                ’s home, lurking around the dumpsters behind
                                a local restaurant or grocery store, o
                                r loitering around a commercial lot.</p>
                        </ol>
                        <button className="text-xl font-semibold block mt-6
                        bg-black text-white rounded-md p-2">Give Information</button>
                    </div>
                </div>
            </div>

            <div className="w-[92%] mx-auto my-12 shadow-xl py-3">
                <h1 className="text-3xl text-center font-semibold">Know About Us</h1>
                <p className="text-center text-[17px] font-medium my-7">
                    An About Us page is a section on a website that provides information <br />
                    about a company, organization, or individual. It's an
                    opportunity to tell your brand's story, share your <br />
                    vision, introduce team members, <br />
                    and outline your history, values, and achievements.
                </p>

            </div>
            <div className="my-12 w-[96%] mx-auto">
                <h1 className="text-8xl md:text-9xl font-medium">About</h1>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="p-1 w-[350px] mx-auto">
                        <h1 className="text-8xl md:text-9xl font-medium">Us</h1>
                        <p className="text-[17px] font-medium mt-5">Find Our Team Here</p>
                        <p className="mt-6 text-[17px] font-medium">
                            Include your unique value proposition. Find your company's UVP (unique value proposition) and draw attention to it by building your About Us page around it.
                        </p>
                    </div>
                    <div className="p-1 w-[320px] mx-auto lg:w-[370px]">
                        <img src={about} className="w-full mt-3 h-[320px] rounded-md" alt="" srcset="" />
                    </div>
                    <div className="p-1 mx-auto">
                        <img src={team} className="rounded-md mt-3 h-[180px] md:w-[330px] lg:w-[360px]" alt="" srcset="" />
                        <p className="mt-2 text-[17px] font-medium">An animal rescuer is someone who works in animal <br />
                            care or service to take care of animals <br />
                            who experience unhealthy or dangerous living conditions</p>
                    </div>
                </div>
                <div className="mt-10 w-[96%] mx-auto flex justify-evenly flex-wrap
                 border-t-[3px] border-yellow-300 pt-7 gap-6">
                    <div className="w-[350px] p-1">
                        <h1 className="text-2xl font-semibold">50+ Projects</h1>
                        <p className="text-[17px] mt-2 font-medium">PETA operates under
                            the simple principle that animals are not ours to experiment on, eat,
                            wear, use for entertainment, or abuse in any other way.</p>
                    </div>
                    <div className="w-[350px]">
                        <h1 className="text-2xl font-semibold">20+ Awards</h1>
                        <p className="text-[17px] mt-2 font-medium"> An About Us page is a section on a website that provides information <br />
                            about a company, organization, or individual</p>
                    </div>
                    <div className="w-[350px]">
                        <h1 className="text-2xl font-semibold">96% Success </h1>
                        <p className="text-[17px] mt-2 font-medium">PETA operates under
                            the simple principle that animals are not ours to experiment on, eat,
                            wear, use for entertainment, or abuse in any other way.</p>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="w-[350px] flex space-x-2">
                            <img src={star} className="w-[35px] h-[35px]" alt="" srcset="" />
                            <img src={star} className="w-[35px] h-[35px]" alt="" srcset="" />
                            <img src={star} className="w-[35px] h-[35px]" alt="" srcset="" />
                            <img src={star} className="w-[35px] h-[35px]" alt="" srcset="" />
                            <img src={star} className="w-[35px] h-[35px]" alt="" srcset="" />

                        </div>
                    </div>
                </div>
            </div>

            <Title subheading={`Aided by thorough investigative work, consumer protests, and international ${<br></br>}  media coverage, PETA brings together members of the scientific, corporate, and legislative`}
                heading={"Get In Touch"} banner2={`${banner}`}></Title>
            <div className="w-[96%] mx-auto">
                <h1 className="text-3xl mb-12 text-center font-medium">
                    Fill Your Identity
                </h1>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    <div className="w-[354px]">
                        <input type="text" placeholder="Your Name" className="p-1 w-full border-2 border-black 
                             rounded-md h-[48px]" name="" id="" />
                        <input type="email" placeholder="Your Email" className="p-1 my-8 w-full border-2 border-black 
                             rounded-md h-[48px]" name="" id="" />
                        <input type="number" placeholder="Mobile Number" className="p-1 mb-8 w-full border-2 border-black 
                             rounded-md h-[48px]" name="" id="" />
                        <input type="number" placeholder="Address" className="p-1 mb-8 w-full border-2 border-black 
                             rounded-md h-[48px]" name="" id="" />
                    </div>
                    <div>
                        <img src={con} className="w-[350px] md:w-[420px] h-[330px]" alt="" srcset="" />
                    </div>
                </div>
                <div className="w-full min-h-[42vh] flex flex-wrap gap-5
                    justify-evenly mt-5 rounded-md py-5" style={bannerStyle2}>
                    <div className="w-[340px] h-[260px] p-4 rounded-md shadow-xl bg-[#ffffff]">
                         <FaEnvelope className=" mt-2 text-2xl"></FaEnvelope>
                         <h1>Our email</h1>
                          <h1>catropat@gmail.com</h1>
                          <p className="font-medium mt-6">They explain why a visitor should 
                            contact you and describe how you can
                             help to solve your visitors' problems.</p>
                    </div>
                    <div className="w-[340px] h-[260px] rounded-md p-4 bg-[#ffffff]">
                    <FaPhone className="text-2xl mt-2"></FaPhone>
                    <h1>Our Phone</h1>
                    
                          <h1>018234..234</h1>
                         <p className="mt-6 font-medium">They include an email and phone number
                             so that the visitors 
                             could quickly find the required information. </p>
                    </div>
                    <div className="w-[340px] h-[260px] p-4 rounded-md bg-[#ffffff]">
                          <FaAddressBook className="text-2xl mt-2"></FaAddressBook>
                          <h1>Our Address</h1>
                    
                    <h1>Chittagong/agrabad.11/9</h1>
                   <p className="mt-6 font-medium">They include an email and phone number
                       so that the visitors 
                       could quickly find the required information. </p>
                    </div>
                </div>
            </div>
            <div className="w-[92%] mx-auto my-20 shadow-xl py-3">
                <h1 className="text-3xl text-center font-semibold">Some Of Our User Say</h1>
                <p className="text-center text-[17px] font-medium my-7">
                    An About Us page is a section on a website that provides information <br />
                    about a company, organization, or individual. It's an
                    opportunity to tell your brand's story, share your <br />
                    vision, introduce team members, <br />
                    and outline your history, values, and achievements.
                </p>

            </div>
             <div className="flex flex-col justify-center space-x-8 md:flex-row w-[96%] mx-auto">

                  <img src={review} alt="" className="h-[370px] rounded-md" srcset="" />
                  <Review></Review>

             </div>
        </div>
    )
}
export default Home