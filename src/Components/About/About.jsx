import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import AboutImage from "../../assets/about-left-image.png";
import KatyImage from '../../assets/KatyImage.png';
import MulaniImage from '../../assets/MulanImage.png';
import RayBandsImage from '../../assets/RayBandsImage.png';

const About = () => {
  return (
    <section className="w-full h-[200vh] flex items-center justify-center border-4 border-black rounded-t-[300px] bg-blue-500">
      <div className="w-[85%] h-5/6 bg-red-500 rounded-t-[150px] ">
        <div className="md:flex items-center justify-center p-[5rem] gap-[7rem] h-[45%] rounded-t-[150px] border-2 border-black">
          <div className="w-[40%] h-[85%]  flex items-center justify-center rounded-tl-[100px] p-[1rem] bg-white border-2 border-black">
            <img src={AboutImage} alt="about-left-image" />
          </div>

          <div className="w-[55%] h-full border-2 border-black">
            <h1 className=" inline-block py-2 px-4 rounded-2xl bg-customBlue text-customWhite leading-normal" >About us</h1>
            <h2>Built to Empower Your Creative Journey</h2>
            <p>
              Designed to help you share, connect, and grow with the support of
              your biggest fans. <br /> Offer exclusive content, build a loyal
              community, and turn your creativity into income—all <br /> in one
              place.
            </p>
            <span>See detail</span>
          </div>
        </div>


        <div>
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
        </div>
      </div>
    </section>
  );
};

export default About;
