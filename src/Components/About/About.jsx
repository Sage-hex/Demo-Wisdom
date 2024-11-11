import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import AboutImage from "../../assets/about-left-image.png";
import KatyImage from '../../assets/KatyImage.png';
import MulaniImage from '../../assets/MulanImage.png';
import RayBandsImage from '../../assets/RayBandsImage.png';

const About = () => {
  return (
    <section className="w-full h-auto md:h-[300vh] lg:h-[200vh] flex items-center md:items-center justify-center border-2 border-black rounded-t-[50px] md:rounded-t-[200px]  lg:rounded-t-[300px] bg-blue-500">
      <div className="flex flex-col justify-center gap-[2.5rem] items-center  w-full md:w-[85%]  md:h-5/6  lg:rounded-t-[150px]">
      
      <div className="flex flex-col lg:flex-row items-center justify-center rounded-t-[0px] gap-[2.5rem] xl:gap-[3rem] w-[95%] h-[30%] md:w-[100%] md:h-[80%] xl:h-[40%] xl:w-[100%] lg:rounded-t-[150px] mt-[4rem] md:mt-0">
          <div className="w-full h-[50%] lg:w-[40%]  lg:h-[100%]  flex items-center justify-center rounded-t-[50px] md:rounded-t-[0]   md:rounded-tl-[150px] p-[1rem] bg-customWhite ">
            <img src={AboutImage} className="w-screen h-[90%] object-contain" alt="about-left-image" />
          </div>

          <div className="lg:w-[55%] flex flex-col justify-center md:justify-center items-center md:items-start h-full ">
		  <h1 className="inline-block text-sm md:text-2xl py-3 px-6 xl:py-2 xl:px-6 rounded-3xl md:rounded-full bg-customBlue text-customWhite font-normal mb-[1.5rem] xl:mb-[3rem] ">About us</h1>
		  <h2 className="text-2xl xl:text-4xl text-customWhite font-normal mb-4 xl:mb-[1.5rem]">Built to Empower Your Creative Journey</h2>
            <p className=" xl:text-[17px] md:text[16px] font-[nutino] text-customWhite mb-4 xl:mb-[2rem]">
              Designed to help you share, connect, and grow with the support of
              your biggest fans. Offer exclusive content, build a loyal
              community, and turn your creativity into income—all <br /> in one
              place.
            </p>
            <span className="font-[nutino] text-customYellow text-[18px] italic">See detail</span>
          </div>
        </div>


        <div className="flex flex-col items-center justify-start gap-[2rem]  w-[95%] h-[60%]">
            <div className="flex flex-col md:flex-row justify-between items-start gap-3 md:items-center w-full h-1/5">
              <div className="">
              <h2 className="capitalize text-customWhite text-3xl xl:text-4xl mb-4">TOP SELLERS </h2>
              <p className="text-base xl:text-2xl text-customWhite">From podcasts to cosplay, pixel art to crochet.</p>
              </div>
              <div>
            <span className="text-customWhite text-base font-bold font-[nutino] italic">See more</span>

              </div>
            </div>
            <div className=" w-full h-auto md:h-4/5 flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="h-2/6 md:h-full md:w-4/12 flex flex-col">
                <div className="">
					<img src={KatyImage} className="object-contain" alt="katy-image" />
				</div>
                <div className="flex gap-4 items-center mt-4 justify-start text-xl lg:text-3xl">
                  <AiOutlineArrowRight />
                  <h2>Katy’s Page</h2>
				  
                </div>
				<span className="px-9 lg:px-11  text-[18px] md:text-[13px] font-[nutino]">120+ Followers</span>
              </div>
			  <div className="h-full md:w-4/12 flex flex-col">
                <div>
					<img src={RayBandsImage} className="object-contain"  alt="katy-image" />
				</div>
                <div className="flex gap-4 items-center mt-4 justify-start text-xl lg:text-3xl">
                  <AiOutlineArrowRight />
                  <h2>RayBands Fx</h2>
				  
                </div>
				<span className="px-9 lg:px-11 lg:text-[18px] md:text-[13px] font-[nutino]">120+ Followers</span>
              </div>
			  <div className="h-full md:w-4/12 flex flex-col">
                <div>
					<img src={MulaniImage} className="object-contain"  alt="katy-image" />
				</div>
                <div className="flex gap-4 items-center text-xl mt-4 lg:text-3xl justify-start">
                  <AiOutlineArrowRight />
                  <h2 >Mulan</h2>
				  
                </div>
				<span className="px-9 lg:px-11 text-[18px] md:text-[13px] font-[nutino]">14k Followers</span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
