import React from 'react';
import { FaSearch } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import tick from "../../public/assests/tickmark.png";
import Calender from "../../public/assests/Calender.png";
import location from "../../public/assests/location.png";
import se from "../../public/assests/se.png";


const About = () => {
  return (
  <div className="">
    <div className='flex justify-evenly  mb-60'>
      <div className="relative">
        <div className='absolute inset-0 w-[350px] h-[550px] bg-gray-200 rounded-[20px] z-0 left-10 '></div>
        <img className='relative w-[361px] h-[550px] rounded-[20px] top-8' src="https://5.imimg.com/data5/SELLER/Default/2021/12/BL/OR/BM/18811883/dubai-tour-package-1000x1000.jpg" alt="" />
       </div>

      <div className="mt-24 mr-32">
        <h3 className='text-orange-500 font-semibold'>Way Choose Us?</h3>
        <h1 className='font-bold text-4xl'>Plan Your Trip With Us</h1>

        
          <div className=" flex mt-10  gap-10">
             <div className=" flex items-center"><img  className='size-6' src={tick} alt="" /></div> 
              <div className="">
              <h1 className='font-semibold text-2l'>Best Price Guranteed</h1>
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
             </div>              
          </div>
        
          <div className=" flex mt-10  gap-10">
             <div className="flex items-center"><img className='size-6' src={Calender} alt="" /></div> 
              <div className="">
              <h1 className='font-semibold text-2l'>Best Price Guranteed</h1>
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
             </div>              
          </div>
        
          <div className=" flex mt-10  gap-10">
             <div className="flex items-center"><img className='size-6' src={location} alt="" /></div> 
              <div className="">
              <h1 className='font-semibold text-2l'>Best Price Guranteed</h1>
              <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
             </div>              
          </div>
      </div>
    </div>


    <div className="mb-64">
      <div className="pl-48">
        <h2 className='text-orange-400 font-semibold text-1xl'>Famous Dictation!</h2>
        <h1 className='text-4xl font-bold'><span>Our Popular </span><span className='text-orange-400'> Dictation's</span></h1>
      </div>

      <div className="flex justify-evenly mx-56 my-16 drop-shadow-md ml-36 px-16">
        <div className="bg-white h-96 w-64 rounded-[25px] ">
          <div >
            <img className='w-64 h-64 rounded-t-[25px] ' src="https://images.unsplash.com/photo-1572025600482-08238b1ed5a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="pl-6 pt-6">
            <h1 className='font-semibold'>Lakshadweep</h1>
            <p className='font-semibold '><span className='text-orange-400 '>Rs. 45,000/-</span><span> Per person</span></p>
            </div>
            <div className="flex justify-evenly items-center pt-2 pr-6">
              <div className='flex items-center'><MdAccessTime /><h1>4Day's</h1></div>
              <div className='flex items-center'><MdPeopleAlt /><h1>10+</h1></div>
              <div className='flex items-center'><IoLocationSharp /><h1>india</h1></div>
            </div>
        </div>

        <div className="bg-white h-96 w-64 rounded-[25px]">
          <div >
            <img className='w-64 h-64  rounded-t-[25px] ' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRivvrPOy2DBsXMMqQJ54WeWwF6zgtFqs4C7EXJvq6yWn3So2Ih" alt="" />
          </div>
          <div className="pl-6 pt-6">
            <h1 className='font-semibold'>Kaziranga</h1>
            <p className='font-semibold '><span className='text-orange-400 '>Rs. 23,000/-</span><span> Per person</span></p>
            </div>
            <div className="flex justify-evenly items-center pt-2 pr-6">
              <div className='flex items-center'><MdAccessTime /><h1>6Day's</h1></div>
              <div className='flex items-center'><MdPeopleAlt /><h1>13+</h1></div>
              <div className='flex items-center'><IoLocationSharp /><h1>india</h1></div>
            </div>
        </div>

        <div className="bg-white h-96 w-64 rounded-[25px]">
          <div >
            <img className='w-64 h-64 rounded-t-[25px] ' src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4H6WqFrdMeifgIxGLvKt89MLXkWpi-T34gBNNwfvDmsqydZ-K" alt="" />
          </div>
          <div className="pl-6 pt-6">
            <h1 className='font-semibold'>Sun Temple</h1>
            <p className='font-semibold '><span className='text-orange-400 '>Rs. 19,000/-</span><span> Per person</span></p>
            </div>
            <div className="flex justify-evenly items-center pt-2 pr-6">
              <div className='flex items-center'><MdAccessTime /><h1>4Day's</h1></div>
              <div className='flex items-center'><MdPeopleAlt /><h1>10+</h1></div>
              <div className='flex items-center'><IoLocationSharp /><h1>india</h1></div>
            </div>
        </div>
      </div>
    </div>


    <div className="flex justify-evenly mb-44 ">
      <div className="">
        <h1 className='text-orange-500 font-semibold'>Way Choose Us?</h1>
        <h1 className='font-bold text-4xl pb-8'>Choose Dream Dictation For <br />Explore World</h1>
        <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim  <br />ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip ex ea  commodo consequat.</p>
        <button className='bg-orange-400 text-white rounded-[10px] my-10 w-32 h-12'>About Us</button>
        <div className="flex justify-between">
          <div className="">
            <h1 className='text-4xl font-semibold py-4'>14</h1>
            <h1 className='text-gray-500'>Year  <br />Experience</h1>
          </div>
          <div className="">
            <h1 className='text-4xl font-semibold py-4'>320+</h1>
            <h1 className='text-gray-500'>Distention <br />Collaboration</h1>
          </div>
          <div className="">
            <h1 className='text-4xl font-semibold py-4'>67+</h1>
            <h1 className='text-gray-500'>Satisfied <br />Customer</h1>
          </div>
        </div>
      </div>

      <div className="">
        <div className="relative">
          <div className="absolute w-[361px] h-[450px] bg-gray-200 rounded-[20px]  bottom-8 right-8 "></div>
          <img className='relative w-[361px] h-[450px] mt-16' src={se} alt="" />
        </div>
      </div> 

    </div>


  </div>    
  )
}

export default About;
