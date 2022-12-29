import React from "react";
import { tw } from "twind";

const WorkingProcess = (props) => {
  return (
    <div
      {...props}
      className={`p-4 xl:container mx-auto workingProcess mb-[80px] sm:mb-[150px]  ${props.className}`}
    >
      {/* Heading  */}
      <div className='xl:container mx-auto heading mb-[50px] sm:mb-[80px]'>
        <h2
      className='text-[25px] text-center sm:text-[30px] !font-jost font-semibold w-fit mx-auto leading-[35px] sm:leading-[45px] tracking-[0.03em] mt-[18px] mb-[17px] titles'>
          <span className='py-2'>My </span> 
          Working Process
        </h2>
        <p style={{
        color: "rgb(243 244 246)"
     }} className='w-fit mx-auto text-center leading-[26px] tracking-[0.01em] subtitles'>
          Learn how I operate and how I execute projects.{" "}
        </p>
      </div>

      {/*Process*/}
      <div
        style={{
          backgroundImage: `url(${require("../../Assets/Images/services_bg.png")})`,
          backgroundRepeat: "no-repeat",
        }}
        className={tw`process flex flex-wrap justify-center gap-12 bg-fixed bg-left sm:!bg-none`}
      >
        <div
          data-aos='fade-up'
          data-aos-once='true'
          data-aos-delay='100'
         
          className='process-item z-10 p-4 mx-2 sm:m-0 px-6 shadow-service w-[480px] glass'
        >
          <div className='header flex-row-reverse sm:flex-row pt-2 pb-4 flex justify-between items-center'>
            <h3 className='text-[46px] leading-6 !font-jost font-semibold tracking-[0.01em] pl-5'>
              01
            </h3>
            <img
              className='w-[40%] mx-2 mr-4 h-[2px] hidden sm:block'
              src={require("../../Assets/Images/process.jpg")}
              alt='ProcessImage'
            />
            <h2 className='text-[19px] sm:text-[23px] whitespace-pre-wrap sm:whitespace-nowrap !font-jost font-[600] leading-[35px] sm:leading-[45px] tracking-[0.09em] mb-[17px]'>
              <span className='uppercase before:w-[110%] before:bg-green-40 before:h-[40%] pb-6)'>
                Discussion
              </span>
            </h2>
          </div>
          <p className='mx-auto text-justify text-[14px] leading-[23px] tracking-[0.01em]'>
          It is critical for me to grasp the project's demands and requirements. 
          For example, what are the main features and functions? When is the 
          project due? Are there any crucial dates, milestones, 
          or time constraints? and so forth
          </p>
        </div>

        <div
          data-aos='fade-up'
          data-aos-once='true'
          data-aos-delay='300'
          className='process-item bg-white z-10 p-4 mx-2 sm:m-0 px-6 shadow-service w-[480px] glass'
        >
          <div className='header pt-2 pb-4 flex justify-between items-center'>
            <h3  className='text-[46px] leading-6 !font-jost font-semibold tracking-[0.01em] text-gray-50 pl-5'>
              02
            </h3>
            <img
              className='w-full mx-2 mr-4 h-[2px] hidden sm:block'
              src={require("../../Assets/Images/process.jpg")}
              alt='ProcessImage'
            />
            <h2 className='text-[19px] sm:text-[23px] whitespace-pre-wrap sm:whitespace-nowrap !font-jost font-[600]  leading-[35px] sm:leading-[45px] tracking-[0.09em] mb-[17px]'>
              <span className='uppercase before:w-[110%] before:bg-green-40 before:h-[40%] pb-6)'>
                Planning
              </span>
            </h2>
          </div>
          <p className='mx-auto text-justify text-[14px] leading-[23px] tracking-[0.01em]'>
          Then I make a strategy for interior tasks, such as what is the best 
          approach to accomplish the job, what tips and techniques I should 
          use, and so on. Each project benefits greatly from careful planning.
          </p>
        </div>

        <div
          data-aos='fade-up'
          data-aos-once='true'
          data-aos-delay='500'
          
          className='process-item z-10 p-4 mx-2 sm:m-0 px-6 shadow-service w-[480px] glass'
        >
          <div className='header pt-2 pb-4 flex-row-reverse sm:flex-row flex justify-between items-center'>
            <h3 className='text-[46px] leading-6 !font-jost font-semibold tracking-[0.01em] text-gray-50 pl-5'>
              03
            </h3>
            <img
              className='w-full mx-2 mr-4 h-[2px] hidden sm:block'
              src={require("../../Assets/Images/process.jpg")}
              alt='ProcessImage'
            />
            <h2 className='text-[19px] whitespace-pre-wrap sm:whitespace-nowrap sm:text-[23px] !font-jost font-[600] leading-[35px] sm:leading-[45px] tracking-[0.09em] mb-[17px]'>
              <span className='uppercase  before:w-[106%] before:bg-green-40 before:h-[40%] pb-6)'>
                Design
              </span>
            </h2>
          </div>
          <p className='mx-auto text-justify text-[14px] leading-[23px] tracking-[0.01em]'>
          Websites market you 24 hours a day, seven days a week: no employee will do that.
           So, when I design a website, I try to give it my all to create an 
           excellent, clean, and service-related design. A good design can 
           help your company's quality.
          </p>
        </div>

        <div
          data-aos='fade-up'
          data-aos-once='true'
          data-aos-delay='700'
          className='process-item z-10 p-4 mx-2 sm:m-0 px-6 shadow-service w-[480px] glass'
        >
          <div className='header pt-2 pb-4 flex justify-between items-center'>
            <h3 className='text-[46px] leading-6 !font-jost font-semibold tracking-[0.01em] text-gray-50 pl-5'>
              04
            </h3>
            <img
              className='w-full mx-2 mr-4 h-[2px] hidden sm:block'
              src={require("../../Assets/Images/process.jpg")}
              alt='ProcessImage'
            />
            <h2 className='text-[19px] sm:text-[23px] whitespace-pre-wrap sm:whitespace-nowrap !font-jost font-[600] text-gray-900 leading-[35px] sm:leading-[45px] tracking-[0.09em] mb-[17px]'>
              <span className=' uppercase  before:w-[110%] before:bg-green-40 before:h-[40%] pb-6)'>
                Coding
              </span>
            </h2>
          </div>
          <p className='mx-auto text-justify text-[14px] leading-[23px] tracking-[0.01em]'>
          Because web languages are used to create websites, we must code for each one.
          Clean, developer-friendly, and W3C-validated coding can help to make your
          website dynamic and fully functional. I always code in a professional
           and efficient manner.
          </p>
        </div>

        <div
          data-aos='fade-up'
          data-aos-once='true'
          data-aos-delay='900'
          className='process-item z-10 p-4 mx-2 sm:m-0 px-6 shadow-service w-[480px] glass'
        >
          <div className='header pt-2 pb-4 flex justify-between flex-row-reverse sm:flex-row items-center'>
            <h3 className='text-[46px] leading-6 !font-jost font-semibold tracking-[0.01em] text-gray-50 pl-5'>
              05
            </h3>
            <img
              className='w-[10%] mx-2 mr-4 h-[2px] hidden sm:block'
              src={require("../../Assets/Images/process.jpg")}
              alt='ProcessImage'
            />
            <h2 className='text-[19px] sm:text-[23px] whitespace-pre-wrap sm:whitespace-nowrap !font-jost font-[600] text-gray-900 leading-[35px] sm:leading-[45px] tracking-[0.09em] mb-[17px]'>
              <span className='uppercase before:w-[110%] before:bg-green-40 before:h-[40%] pb-6)'>
                Submit for Review
              </span>
            </h2>
          </div>
          <p className='mx-auto text-justify text-[14px] leading-[23px] tracking-[0.01em]'>
          I give it to the client for evaluation after the design and coding are 
          finished. If it is essential to edit or revise after the client checks,
          I tell the customer to send them all in a list and I am pleased
          to do all the adjustments every time.
          </p>
        </div>

        <div
          data-aos='fade-up'
          data-aos-once='true'
          data-aos-delay='1100'
          className='process-item bg-white z-10 p-4 mx-2 sm:m-0 px-6 shadow-service w-[480px] glass'
        >
          <div className='header pt-2 pb-4 flex justify-between items-center'>
            <h3 className='text-[46px] leading-6 !font-jost font-semibold tracking-[0.01em] text-gray-50 pl-5'>
              06
            </h3>
            <img
              className='w-[25%] mx-2 mr-4 h-[2px] hidden sm:block'
              src={require("../../Assets/Images/process.jpg")}
              alt='ProcessImage'
            />
            <h2 className='text-[19px] sm:text-[23px] whitespace-pre-wrap sm:whitespace-nowrap !font-jost font-[600] text-gray-900 leading-[35px] sm:leading-[45px] tracking-[0.09em] mb-[17px]'>
              <span className='uppercase before:w-[110%] before:bg-green-40 before:h-[40%] pb-6)'>
                Website Ready
              </span>
            </h2>
          </div>
          <p className='mx-auto text-justify text-[14px] leading-[23px] tracking-[0.01em]'>
          After we have reviewed everything, we will proceed to the next phase,
          if everything is completed, I will publish it for everyone.{" "}
            <span className='secondec'>
            It's not as if a website is finished and the relationship with
            the client is over. I always provide lifelong assistance to my 
            clients and assist them when they encounter any website-related 
            issues.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
