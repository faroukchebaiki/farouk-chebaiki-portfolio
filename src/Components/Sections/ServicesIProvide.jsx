import React from "react";
import BugIcon from "../../Assets/Icons/Services/BugIcon";
import DesignIcon from "../../Assets/Icons/Services/DesignIcon";
import WebsiteIcon from "../../Assets/Icons/Services/WebsiteIcon";

const ServicesIProvide = (props) => {
  return (
    <div
      {...props}
      className={`p-4 min-w-full mx-auto w-full services mb-[80px] sm:mb-[150px] ${props.className}`}
    >
      {/* Heading  */}
      <div className='xl:container mx-auto heading mb-[50px] sm:mb-[80px]'>
        <h2 className='text-[25px] text-center sm:text-[30px] !font-jost font-semibold w-fit mx-auto leading-[35px] sm:leading-[45px] tracking-[0.1em] mt-[18px] mb-[17px] titles'>
          <span className='py-2'>Services</span> I{" "}
          Provide
        </h2>
        <p className='w-fit mx-auto text-center leading-[26px] tracking-[0.01em] subtitles'>
          Pick your needed service or contact me for free{" "}
          <br className='hidden sm:block' />
          consultancy
        </p>
      </div>

      {/* Services */}
      <div
        className='text-center xl:text-left bg-fixed sm:bg-scroll bg-right lg:bg-center overflow-hidden'
      >
        <div className='xl:container mx-auto w-fit services flex gap-6 smMax:gap-12 sm:gap-14 justify-center flex-wrap'>
          {/* Website Creation  */}
          <div
            data-aos='fade-right'
            data-aos-once='true'
            data-aos-delay='200'
            className='item mx-6 sm:m-0 z-40 w-fit p-4 transition-shadow focus-visible:bg-black duration-500 mdMax:shadow-service hover:shadow-service pt-14 pb-7 flex flex-col justify-center xl:justify-start items-center xl:items-start glass'
          >
            <WebsiteIcon />
            <h3 className='text-[20px] sm:text-[22px] !font-jost font-[500] text-gray-900 leading-[25px] sm:leading-[32px] tracking-[0.1em] mt-[18px] mb-[17px]'>
              Full Functional & <br className='hidden sm:block' />
              Dynamic Website Creation
            </h3>
            <p className='text-gray-900 text-[14px] leading-[26px] tracking-[0.01em]'>
              I can create any type of full functional & dynamic
              <br className='hidden sm:block' /> website such as business,
              ecommerce, blog/news,
              <br className='hidden sm:block' /> listing, lms etc.
            </p>
          </div>

          {/* Design Convert */}
          <div
            data-aos='fade-up'
            data-aos-once='true'
            data-aos-delay='600'
            className='item mx-6 sm:m-0 z-40 w-fit p-4 transition-shadow focus-visible:bg-black duration-500 mdMax:shadow-service hover:shadow-service pt-14 pb-7 flex flex-col justify-center xl:justify-start items-center xl:items-start glass'
          >
            <DesignIcon />
            <h3 className='text-[20px] w-full sm:text-[22px] !font-jost font-[500] text-gray-900 leading-[25px] sm:leading-[32px] tracking-[0.1em] mt-[18px] mb-[17px]'>
              Design to HTML & <br className='hidden sm:block' />
              CSS & JS or React
            </h3>
            <p className='w-fit text-gray-900 text-[14px] leading-[26px] tracking-[0.01em]'>
              I can convert any design like figma, psd, xd into{" "}
              <br className='hidden sm:block' /> responsive HTML and CSS and JS 
              or React UI<br className='hidden sm:block' /> using different libraries.
            </p>
          </div>

          {/* Bug Fix  */}
          <div
            data-aos='fade-left'
            data-aos-once='true'
            data-aos-delay='200'
            className='item mx-6 sm:m-0 z-40 bg-white w-fit p-4 transition-sha
          dow focus-visible:bg-black duration-500 mdMax:shadow-service hover:shadow-service pt-14 pb-7 flex flex-col justify-center xl:justify-start items-center xl:items-start glass'
          >
            <BugIcon />
            <h3 className='text-[20px] sm:text-[22px] w-full !font-jost font-[500] text-gray-900 leading-[25px] sm:leading-[32px] tracking-[0.1em] mt-[18px] mb-[17px]'>
              Bug Fixing & Website
              <br className='hidden sm:block' /> Maintenance
            </h3>
            <p className='text-gray-900 text-[14px] leading-[26px] tracking-[0.01em]'>
              Speed Optimization, Responsive issue, Bug,{" "}
              <br className='hidden sm:block' /> Hacking Website restore can be
              done by me <br className='hidden sm:block' /> without any problem
              with client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesIProvide;
