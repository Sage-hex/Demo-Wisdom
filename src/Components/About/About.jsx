import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import AboutImage from "../../assets/about-left-image.png";
import KatyImage from '../../assets/KatyImage.png';
import MulaniImage from '../../assets/MulanImage.png';
import RayBandsImage from '../../assets/RayBandsImage.png';

const About = () => {
  return (
    <section className="w-full h-[300vh] lg:h-[200vh] flex items-center justify-center border-4 border-black  lg:rounded-t-[300px] bg-blue-500">
      <div className=" w-full lg:w-[80%] h-5/6 bg-red-500 border-[8px] border-green-500 lg:rounded-t-[150px] ">
	  <div className="flex flex-col lg:flex-row items-center justify-center sm:rounded-t-[0px] gap-[2.5rem] lg:gap-[7rem] w-full h-auto lg:h-[35%] md:rounded-t-[150px] border-[8px] border-yellow-500">
          <div className="w-[100%] h-[50%] md:w-[45%] md:h-[100%]  border-2 border-red-500 flex items-center justify-center md:rounded-tl-[150px] p-[1rem] bg-customWhite ">
            <img src={AboutImage} className="w-screen h-[90%] object-contain" alt="about-left-image" />
          </div>

          <div className="md:w-[55%] flex flex-col justify-center md:justify-start items-center md:items-start h-full">
		  <h1 className="inline-block text-sm md:text-3xl py-3 px-6 md:py-6 md:px-12 rounded-3xl md:rounded-full bg-customBlue text-customWhite font-normal mb-[3rem] md:mb-[4rem]">About us</h1>
		  <h2 className="text-3xl xl:text-6xl md:text-2xl text-customWhite font-normal mb-[2.5rem]">Built to Empower Your Creative Journey</h2>
            <p className=" xl:text-[18px] md:text[16px] font-[nutino] text-customWhite mb-[2rem]">
              Designed to help you share, connect, and grow with the support of
              your biggest fans. <br /> Offer exclusive content, build a loyal
              community, and turn your creativity into income—all <br /> in one
              place.
            </p>
            <span className="font-[nutino] text-customYellow text-[18px] italic">See detail</span>
          </div>
        </div>


        {/* <div>
          <div>
            <div>
              <h1>TOP SELLERS </h1>
              <p>From podcasts to cosplay, pixel art to crochet.</p>
            </div>
            <span>See more</span>
            <div>
              <div>
                <div>
					<img src={KatyImage} alt="katy-image" />
				</div>
                <div className="flex">
                  <AiOutlineArrowRight />
                  <h2>Katy’s Page</h2>
				  
                </div>
				<span>120+ Followers</span>
              </div>
			  <div>
                <div>
					<img src={RayBandsImage} alt="katy-image" />
				</div>
                <div className="flex">
                  <AiOutlineArrowRight />
                  <h2>RayBands Fx</h2>
				  
                </div>
				<span>120+ Followers</span>
              </div>
			  <div>
                <div>
					<img src={MulaniImage} alt="katy-image" />
				</div>
                <div className="flex">
                  <AiOutlineArrowRight />
                  <h2>Mulan</h2>
				  
                </div>
				<span>14k Followers</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
