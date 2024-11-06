import React from 'react';
import Button from '../../Button/Button';
import { TbArrowBigDownFilled } from "react-icons/tb";
import leftImage from '../../../assets/hand-bulb.png';
import rightImage from '../../../assets/girl-on-pencil-skate.png';

const Hero = () => {
  return (
    <section className='w-full pt-[10vh] bg-white min-h-screen flex justify-center items-center'>
      <div className="w-11/12 h-full flex flex-col justify-between mt-56 sm:mt-20 md:mt-40 gap-14 items-center">

        {/* This is the top section with heading and description */}
        <div className='w-full flex flex-col items-center justify-center mb-8'>
          <p className="text-[#1A1A1A] text-xl md:text-6xl text-center mb-6 font-[pangolin]">
            Create, Connect, Get Paid
          </p>
          <h1 className="text-[10rem] sm:text-6xl md:text-7xl lg:text-[5rem] font-bold text-center text-customPink">
            Fuel your passion!
          </h1>
        </div>
        
        {/* This is the middle section containing images and text */}
        <div className='w-full flex flex-col md:flex-row items-center justify-between'>
  
          {/* This is the left image */}
          <div className='md-w-[20%] md:w-1/4 flex justify-center md:justify-start mb-6 md:mb-0'>
            <img src={leftImage} alt="Hand with Bulb" className='w-3/4 h-auto' />
          </div>
  
          {/* This section contains text and button */}
          <div className='md-w-[60%] md:w-1/2 text-center px-4 mb-6 md:mb-0 flex flex-col items-center justify-center'>
            <h2 className='text-5xl font-normal mb-4 leading-[3.2rem]'>
              Your creativity <br /> deserves to be <br /> rewarded
            </h2>
            <p className='text-gray-700 mb-6 mt-14 font-thin text-3xl font-[nutino]'>
              Join a community of creators turning creativity into income, one <br /> supporter at a time.
            </p>
            <Button text='Get Started' className='mt-8' />
            <div className="mt-8">
              <TbArrowBigDownFilled 
                size={50} 
                className="mx-auto text-pink-500 text-5xl animate-bounce-infinite"
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-iteration="infinite"
                data-aos-easing="ease-in-out"
              />
            </div>
          </div>
  
          {/* This is the right image */}
          <div className='md-w-[20%] md:w-1/4 flex justify-center md:justify-end'>
            <img src={rightImage} alt="Girl on Pencil Skate" className='w-3/4 h-auto' />
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;
