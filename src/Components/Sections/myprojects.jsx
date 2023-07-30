import React from "react";
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
          <span className='py-2'>My </span> {" "}
          Projects
        </h2>
        <p className='w-fit mx-auto text-center leading-[26px] tracking-[0.01em] subtitles'>
        This is some examples of my work.
        </p>
      </div>

      {/* Services */}
      <div
        className='text-center xl:text-left bg-fixed sm:bg-scroll bg-right lg:bg-center overflow-hidden'
      >
        <div className='xl:container mx-auto w-fit services flex gap-6 smMax:gap-12 sm:gap-14 justify-center flex-wrap'>

{/* 1. Interactive Web Quiz Application */}
<div
  data-aos='fade-right'
  data-aos-once='true'
  data-aos-delay='200'
  className='item mx-6 sm:m-0 z-40 w-fit p-4 transition-shadow focus-visible:bg-black duration-500 mdMax:shadow-service hover:shadow-service pt-14 pb-7 flex flex-col justify-center items-center text-center glass'
>
  <WebsiteIcon /> {/* Replace with the appropriate icon for a quiz application */}
  <h3 className='text-[20px] sm:text-[22px] !font-jost font-[500] text-gray-900 leading-[25px] sm:leading-[32px] tracking-[0.1em] mt-[18px] mb-[17px]'>
    Interactive Web Quiz Application
  </h3>
  <p className='text-gray-900 text-[14px] leading-[26px] tracking-[0.01em]'>
    Build an interactive web quiz app. Users select quizzes,
    <br className='hidden sm:block' />
     answer questions, and receive feedback.
    <br className='hidden sm:block' />
    Implement scoring, timer, and admin interface.
  </p>
</div>

{/* 2. Real-time Chat Application */}
<div
  data-aos='fade-right'
  data-aos-once='true'
  data-aos-delay='200'
  className='item mx-6 sm:m-0 z-40 w-fit p-4 transition-shadow focus-visible:bg-black duration-500 mdMax:shadow-service hover:shadow-service pt-14 pb-7 flex flex-col justify-center items-center text-center glass'
>
  <WebsiteIcon /> {/* Replace with the appropriate icon for a chat application */}
  <h3 className='text-[20px] sm:text-[22px] !font-jost font-[500] text-gray-900 leading-[25px] sm:leading-[32px] tracking-[0.1em] mt-[18px] mb-[17px]'>
    Real-time Chat Application
  </h3>
  <p className='text-gray-900 text-[14px] leading-[26px] tracking-[0.01em]'>
    Develop a real-time chat app. Implement user 
    <br className='hidden sm:block' />
    authentication, online status, and message receipts.
    <br className='hidden sm:block' />
    Use WebSockets for responsive messaging.
  </p>
</div>

{/* 3. E-Commerce Website */}
<div
  data-aos='fade-right'
  data-aos-once='true'
  data-aos-delay='200'
  className='item mx-6 sm:m-0 z-40 w-fit p-4 transition-shadow focus-visible:bg-black duration-500 mdMax:shadow-service hover:shadow-service pt-14 pb-7 flex flex-col justify-center items-center text-center glass'
>
  <WebsiteIcon /> {/* Replace with the appropriate icon for an e-commerce website */}
  <h3 className='text-[20px] sm:text-[22px] !font-jost font-[500] text-gray-900 leading-[25px] sm:leading-[32px] tracking-[0.1em] mt-[18px] mb-[17px]'>
    E-Commerce Website
  </h3>
  <p className='text-gray-900 text-[14px] leading-[26px] tracking-[0.01em]'>
    Build a fully functional e-commerce website. Implement
    <br className='hidden sm:block' />
     user authentication, product search, and a user-friendly
     <br className='hidden sm:block' /> 
     shopping cart. Experience with online transactions.
  </p>
</div>

{/* 4. Weather App */}
<div
  data-aos='fade-right'
  data-aos-once='true'
  data-aos-delay='200'
  className='item mx-6 sm:m-0 z-40 w-fit p-4 transition-shadow focus-visible:bg-black duration-500 mdMax:shadow-service hover:shadow-service pt-14 pb-7 flex flex-col justify-center items-center text-center glass'
>
  <WebsiteIcon /> {/* Replace with the appropriate icon for a weather app */}
  <h3 className='text-[20px] sm:text-[22px] !font-jost font-[500] text-gray-900 leading-[25px] sm:leading-[32px] tracking-[0.1em] mt-[18px] mb-[17px]'>
    Weather App
  </h3>
  <p className='text-gray-900 text-[14px] leading-[26px] tracking-[0.01em]'>
    Create a weather app. Fetch real-time weather data and 
    <br className='hidden sm:block' />
    display forecasts, temperature graphs, and alerts.
  </p>
</div>

{/* 5. Social Media Dashboard */}
<div
  data-aos='fade-right'
  data-aos-once='true'
  data-aos-delay='200'
  className='item mx-6 sm:m-0 z-40 w-fit p-4 transition-shadow focus-visible:bg-black duration-500 mdMax:shadow-service hover:shadow-service pt-14 pb-7 flex flex-col justify-center items-center text-center glass'
>
  <WebsiteIcon /> {/* Replace with the appropriate icon for a social media dashboard */}
  <h3 className='text-[20px] sm:text-[22px] !font-jost font-[500] text-gray-900 leading-[25px] sm:leading-[32px] tracking-[0.1em] mt-[18px] mb-[17px]'>
    Social Media Dashboard
  </h3>
  <p className='text-gray-900 text-[14px] leading-[26px] tracking-[0.01em]'>
    Create a social media dashboard. Analyze user 
    <br className='hidden sm:block' />
    engagement, metrics, and reach from various platforms.
    <br className='hidden sm:block' />
    Implement data visualization.
  </p>
</div>

{/* 6. Task Manager */}
<div
  data-aos='fade-right'
  data-aos-once='true'
  data-aos-delay='200'
  className='item mx-6 sm:m-0 z-40 w-fit p-4 transition-shadow focus-visible:bg-black duration-500 mdMax:shadow-service hover:shadow-service pt-14 pb-7 flex flex-col justify-center items-center text-center glass'
>
  <WebsiteIcon /> {/* Replace with the appropriate icon for a task manager */}
  <h3 className='text-[20px] sm:text-[22px] !font-jost font-[500] text-gray-900 leading-[25px] sm:leading-[32px] tracking-[0.1em] mt-[18px] mb-[17px]'>
    Task Manager
  </h3>
  <p className='text-gray-900 text-[14px] leading-[26px] tracking-[0.01em]'>
    Build a task manager app. Allow users to create,
    <br className='hidden sm:block' />
     update, and organize tasks. Implement filtering, 
     <br className='hidden sm:block' />
     sorting, and task status updates.
  </p>
</div>



         
        </div>
      </div>
    </div>
  );
};

export default ServicesIProvide;
