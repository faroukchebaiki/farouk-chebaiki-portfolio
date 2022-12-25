import React from "react";

const ContactWithMe = () => {
  return (
    <div
      id="Contact"
      className={`p-4 xl:container mx-auto flex lgMax:items-center lgMax:flex-col justify-center justify-between mb-4 `}
    >
      {/* Left Side  */}
      <div className='left lgMax:text-center'>
        <div className='flex flex-col mx-auto heading mb-[50px] sm:mb-[80px]'>
          <h2 className='text-[25px] sm:text-[30px] font-mulish capitalize font-[600] leading-[45px] tracking-[0.03em] titles'>
            <span className='py-2'>Let’s</span>{" "}
            start a project <br className='hidden lg:block' />
            together !
          </h2>
          <p className='text-[16px] mt-[27px] !font-jost leading-[28px] tracking-[0.03em] subtitles'>
            Have Any project on mind ? Let’s start together to make it{" "}
            <br className='hidden sm:block' /> live . Don’t like form ?{" "}
            <a
              href='mailto:farouk.chebaiki@gmail.com'
              target='_blanc'
              className='secondec'
            >
              send email
            </a>
            .
          </p>
          <img
            className='-mt-10 -z-10 lgMax:w-full lgMax:max-w-[610px] lgMax:mx-auto block'
            src={require("../../Assets/Images/contact.png")}
            alt='vector'
          />
        </div>
      </div>
    </div>
  );
};

export default ContactWithMe;
