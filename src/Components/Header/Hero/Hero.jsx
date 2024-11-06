// // src/components/HeroSection.jsx
// import React from 'react';

// const HeroSection = ({
//   title,
//   subtitle,
//   tagline,
//   description,
//   buttonText,
//   onButtonClick,
//   leftImage,
//   rightImage
// }) => {
//   return (
//     <section className="flex justify-center items-center py-12 bg-gray-50">
//       {/* Centered Container with Grid Background */}
//       <div className="w-full max-w-4xl bg-gray-50 bg-grid-large py-16 px-8 text-center">
//         {/* Title */}
//         {title && <h2 className="text-5xl font-bold text-pink-500 mb-4">{title}</h2>}

//         {/* Subtitle */}
//         {subtitle && <p className="text-xl font-medium text-gray-700 mb-6">{subtitle}</p>}

//         {/* Tagline */}
//         {tagline && <p className="text-2xl font-extrabold text-gray-800 mb-4">{tagline}</p>}

//         {/* Description */}
//         {description && <p className="text-gray-500 max-w-lg mx-auto mb-8">{description}</p>}

//         {/* Button */}
//         {buttonText && (
//           <button 
//             className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full mb-10"
//             onClick={onButtonClick}
//           >
//             {buttonText}
//           </button>
//         )}

//         {/* Images */}
//         <div className="flex justify-center items-center mt-10 space-x-10">
//           {leftImage && <img src={leftImage} alt="Left Illustration" className="w-32 h-32" />}
//           {rightImage && <img src={rightImage} alt="Right Illustration" className="w-32 h-32" />}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// Hero.jsx (with responsive adjustments)
import React from 'react';
import Button from '../../Button/Button';
import { TbArrowBigDownFilled } from "react-icons/tb";
import leftImage from '../../../assets/hand-bulb.png';
import rightImage from '../../../assets/girl-on-pencil-skate.png';


const Hero = () => {
  return (
    <section className='w-full pt-[10vh] bg-white min-h-screen flex justify-center items-center'>
    <div className="w-11/12 h-full flex flex-col justify-between mt-56 sm:mt-20 md:mt-40 gap-14 items-center">


        
        {/* Top Section */}
        <div className='w-full flex flex-col items-center justify-center mb-8'>
        <p className="text-[#1A1A1A] text-xl md:text-6xl text-center mb-6 font-[pangolin]">
  Create, Connect, Get Paid
</p>
          <h1 className='text-[10rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center md:text-left text-customPink'>Fuel your passion!</h1>
        </div>
        
        {/* Middle Section */}
        <div className='w-full flex flex-col md:flex-row items-center justify-between'>
  
  {/* Left Image */}
  <div className='md-w-[20%] md:w-1/4 flex justify-center md:justify-start mb-6 md:mb-0'>
    <img src={leftImage} alt="Hand with Bulb" className='w-3/4 h-auto' />
  </div>
  
  {/* Text and Button */}
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
  
  {/* Right Image */}
  <div className='md-w-[20%] md:w-1/4 flex justify-center md:justify-end'>
    <img src={rightImage} alt="Girl on Pencil Skate" className='w-3/4 h-auto' />
  </div>
  
</div>

        
      </div>
    </section>
  );
};

export default Hero;
