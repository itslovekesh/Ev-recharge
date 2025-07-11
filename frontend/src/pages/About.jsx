import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Recharze.EV is a user-friendly website that helps electric vehicle (EV) owners find the  charging stations and book charging slots, reducing long queues and wait times. By integrating with Google Maps, it provides precise location details and real-time slot availability. Recharze.EV enhances the EV charging experience, making it more convenient and efficient, especially for long-distance travel.</p>
         
          <b className='text-gray-800'>Our Vision</b>
          <p>To revolutionize the electric vehicle charging experience by providing seamless access to charging stations through real-time technology and location services. We aim to create a future where EV owners can travel without the worry of finding or waiting for available charging slots, promoting the widespread adoption of eco-friendly transportation solutions. Our commitment is to enhance convenience, reduce wait times, and support the global shift towards sustainable energy.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted charging points in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >To make EV charging quick, convenient, and seamless, empowering drivers with real-time access to available slots and locations, supporting a greener future.</p>
        </div>
      </div>

    </div>
  )
}

export default About
