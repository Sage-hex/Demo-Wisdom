import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import AboutImage from "../../assets/about-left-image.png";
import KatyImage from '../../assets/KatyImage.png';
import MulaniImage from '../../assets/MulanImage.png';
import RayBandsImage from '../../assets/RayBandsImage.png';

const About = () => {
  return (
    <section className="w-full h-[300vh] lg:h-[200vh] flex items-start md:items-center justify-center border-4 border-black md:rounded-t-[200px]  lg:rounded-t-[300px] bg-blue-500">
      <div className="flex flex-col justify-between items-center  w-full md:w-[85%]  h-5/6 border-[8px] border-green-500 lg:rounded-t-[150px] ">
	  <div className="flex flex-col  lg:flex-row items-center justify-center sm:rounded-t-[0px] gap-[2.5rem] xl:gap-[3rem] w-full md:w-[100%]  rounded-lg rounded-lg h-auto xl-[40%] xl:w-[100%]  lg:rounded-t-[150px] border-[5px] border-red-500">
          <div className="w-full h-[50%] lg:w-[45%]  lg:h-[100%]  flex items-center justify-center  md:rounded-tl-[150px] p-[1rem] bg-customWhite">
            <img src={AboutImage} className="w-screen h-[90%] object-contain" alt="about-left-image" />
          </div>

          <div className="lg:w-[55%] flex flex-col justify-center md:justify-start items-center md:items-start h-full ">
		  <h1 className="inline-block text-sm md:text-3xl py-3 px-6 xl:py-4 xl:px-12 rounded-3xl md:rounded-full bg-customBlue text-customWhite font-normal mb-[1.5rem] xl:mb-[3rem] ">About us</h1>
		  <h2 className="text-3xl xl:text-4xl text-customWhite font-normal mb-4 xl:mb-[1.5rem]">Built to Empower Your Creative Journey</h2>
            <p className=" xl:text-[15px] md:text[16px] font-[nutino] text-customWhite mb-4 xl:mb-[2rem]">
              Designed to help you share, connect, and grow with the support of
              your biggest fans. Offer exclusive content, build a loyal
              community, and turn your creativity into income—all <br /> in one
              place.
            </p>
            <span className="font-[nutino] text-customYellow text-[18px] italic">See detail</span>
          </div>
        </div>


        <div className="flex flex-col items-center justify-start border-[8px] border-black w-full h-[50%]">
          {/* <div className="w-11/12 border-[8px] border-green-500 "> */}
            <div className="border-[5px] border-red-500 w-full h-1/3">
              <div>
              <h1>TOP SELLERS </h1>
              <p>From podcasts to cosplay, pixel art to crochet.</p>
              </div>
              <div>
            <span>See more</span>

              </div>
            </div>
            <div className="border-4 border-yellow-500 w-full">
              <div>
                <div>
					<img src={KatyImage} className="w-20" alt="katy-image" />
				</div>
                <div className="flex">
                  <AiOutlineArrowRight />
                  <h2>Katy’s Page</h2>
				  
                </div>
				<span>120+ Followers</span>
              </div>
			  <div>
                <div>
					<img src={RayBandsImage} className="w-20"  alt="katy-image" />
				</div>
                <div className="flex">
                  <AiOutlineArrowRight />
                  <h2>RayBands Fx</h2>
				  
                </div>
				<span>120+ Followers</span>
              </div>
			  <div>
                <div>
					<img src={MulaniImage} className="w-20"  alt="katy-image" />
				</div>
                <div className="flex">
                  <AiOutlineArrowRight />
                  <h2>Mulan</h2>
				  
                </div>
				<span>14k Followers</span>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
