import React from "react";
import { tw } from "twind";

const HeroSection = () => {
  return (
    <div
      
      id="heroSection"
      style={{
        background: "rgb(7,68,57)",
        backdropFilter: "blur(16px)",
        background: "radial-gradient(circle, rgba(7,68,57,1) 0%, rgba(15,23,42,1) 34%"
    }}
      className={`p-4 xl:container mx-auto flex lgMax:justify-center justify-between lgMax:items-center lgMax:flex-col hero mb-[80px] sm:mb-[150px] `}
    >
      {/* Left  */}
      <div className='mt-16 sm:mt-36 order-1 md:order-0'>
        <p style={{color:"#cbd5e1"}}
          className={tw`tracking-[0.1em] relative w-fit text-[16px] after:(w-[12px] h-[12px]  absolute) `}
        >
          Hi There ! I'm a 
         
        </p>
        <h1 style={{color:"#bbf7d0"}} className='text-[25px] sm:text-[35px] !font-jost font-extrabold  leading-[35px] sm:leading-[45px] tracking-[0.1em] mt-[18px] mb-[17px]'>
          <span>
            Full Stack Developer
          </span>{" "}
          &<br className='hidden sm:block' /> React Specialist
        </h1>
        <p style={{color:"#cbd5e1"}} className='mb-[30px] sm:mb-[39px] text-gray-900 leading-[26px] tracking-[0.01em] text-[15px]'>
          Nothing is impossible on the web, Let’s execute your idea into
          <br className='hidden sm:block' /> the website and start your business
          or startup today.
        </p>
        <div className='action flex flex-wrap'>
          <button
            type='button'
            className={tw`mr-[36px] my-2 transition-all duration-300 px-8 py-2 border greenb hover:bg-gray-100 font(nunito normal) text-primary rounded focus:( ring-4 ring-green-200 outline-8))`}
          >
            Hire Me
          </button>
          <button
            type='button'
            className={tw`transition-all my-2 duration-300 px-10 py-2 border(1 primary) hover:bg-green font(nunito normal) text-white  rounded focus:( ring-4 ring-green-200))`}
          >
            See My Projects
          </button>
        </div>
      </div>

      {/* Right  */}
      <div className='sm:mt-26 order-0 md:order-1'>
        <img
          src={require("../../Assets/Images/Hero_Image.png")}
          className={tw`my-6 lg:m-0 sm:w-[570px]`}
          alt=''
        />
      </div>
    </div>
  );
};

export default HeroSection;
