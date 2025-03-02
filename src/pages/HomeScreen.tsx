import React, { useState, useEffect } from 'react';
import logo1 from '../assets/images/user1.png';
import logo2 from '../assets/images/user2.png';
import logo3 from '../assets/images/user3.png';
import background from '../assets/bg.png';
import Slider from '../components/Slider/Slider';
import adobe from '../assets/company logo/adobe.svg';
import amazon from '../assets/company logo/amazon.svg';
import atlassian from '../assets/company logo/atlassian.svg';
import DeutscheBank from '../assets/company logo/Deutsche_Bank.png';
import cisco from '../assets/company logo/cisco.svg';
import google from '../assets/company logo/google.svg';
import masterCard from '../assets/company logo/masterCard.svg';
import microsoft from '../assets/company logo/microsoft.svg';
import uber from '../assets/company logo/uber.svg';

export default function HomeScreen() {

  const [search, setsearch] = useState('');

  function onChange(e) {
    setsearch(e.target.value);
  }

  return (<>
    <div className="flex h-screen w-full flex-col justify-center items-center" style={{backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className='flex h-screen flex-col gap-4 justify-center items-center'>
        <h1 className="text-6xl lg:text-8xl text-slate-900 flex justify-center font-bold">Anubhav</h1>
        <p className="text-3xl lg:text-4xl text-[#414141] flex justify-center">Stories of Success</p>
        <div className='flex items-center gap-4'>
          <div className='flex'>
            <img src={logo2} alt="random" className="w-12 mr-[-16px] rounded-full border-4 border-white" />
            <img src={logo1} alt="random" className="w-12 mr-[-16px] rounded-full border-4 border-white" />
            <img src={logo3} alt="random" className="w-12 mr-[-16px] rounded-full border-4 border-white" />
            <div className='w-12 h-12 flex justify-center items-center font-medium bg-white text-gray-800  rounded-full border-4 border-white shadow-xl shadow-gray-200 p-4'>3k+</div>
          </div>
          <p className='text-xl text-gray-800'>Articles written</p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for your dreams"
            className="border-2 w-[300px] lg:w-[400px] border-gray-500 rounded-full pl-4 pr-4 py-2 focus:outline-none  focus:border-transparent transition duration-250 ease-in-out"
            onChange={onChange}
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <svg width="24" height="24" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8333 28.6509C22.8289 28.6509 28.5 22.9798 28.5 15.9842C28.5 8.9886 22.8289 3.31754 15.8333 3.31754C8.83769 3.31754 3.16663 8.9886 3.16663 15.9842C3.16663 22.9798 8.83769 28.6509 15.8333 28.6509Z" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M29.8333 29.9842L27.1666 27.3175" stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
        </div>
      </div>
      <Slider></Slider>
    </div>
  </>
  )
}