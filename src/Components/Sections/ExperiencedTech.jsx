import React from "react";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import Bootstrap from "../../Assets/Icons/Skills/Bootstrap";
import Express from "../../Assets/Icons/Skills/express";
import Redux from "../../Assets/Icons/Skills/Redux";
import Reduxsaga from "../../Assets/Icons/Skills/ReduxSaga";
import Js from "../../Assets/Icons/Skills/Js";
import MongoDb from "../../Assets/Icons/Skills/MongoDb";
import Node from "../../Assets/Icons/Skills/node";
import ReactIcon from "../../Assets/Icons/Skills/ReactIcon";
import Sass from "../../Assets/Icons/Skills/Sass";
import Postgresql from "../../Assets/Icons/Skills/postgresql";
import Firebase from "../../Assets/Icons/Skills/firebase";
import Git from "../../Assets/Icons/Skills/git";

const ExperiencedTech = (props) => {
  return (
    <div
      {...props}
      className={`p-4 xl:container mx-auto experience mb-[80px] sm:mb-[150px] ${props.className}`}
    >
      {/* Heading  */}
      <div className='heading mb-[50px] sm:mb-[50px]'>
        <h2 className='text-[24px] text-center sm:text-[30px] !font-jost font-semibold w-fit mx-auto leading-[35px] sm:leading-[45px] tracking-[0.1em] mt-[18px] mb-[17px] titles'>
          <span className='py-2'>
            Technologies
          </span>{" "}
          I{" "}
          <span>
            have Experience
          </span>
        </h2>
        <p className='w-fit mx-auto text-center leading-[26px] tracking-[0.01em] subtitles'>
        I am familiar with a wide range of technologies and tools, but I am particularly {" "}
          <br className='hidden sm:block' />
          skilled in the following.
        </p>
        <h2 className='text-[22px] text-left sm:text-[24px] !font-jost w-fit mx-auto lg:mr-auto  leading-[40px] sm:leading-[45px] tracking-[0.1em] mt-[18px] secondec'>
              <span className='py-1 pl-2'>
                FRONT
              </span>{" "}
              END
            </h2>
      </div>

      {/* Skills  */}
      <div className='skills'>
        <div className='expertise mx-auto flex gap-10 sm:gap-14 justify-center items-center flex-wrap'>
          <div
            data-aos='fade-up'
            data-aos-once='true'
            data-aos-delay='100'
            className='w-52 sm:w-fit whitespace-nowrap html p-3  flex gap-2 items-center skill'
          >
            <ImHtmlFive className='icon text-[22px] mr-2 text-red-400' />
            <h2 className=' font-semibold border-l-2 border-gray-300 pl-4 text-[20px]'>
              HTML 5
            </h2>
          </div>

          <div
            data-aos='fade-up'
            data-aos-once='true'
            data-aos-delay='300'
            className='w-52 sm:w-fit whitespace-nowrap css p-3  flex gap-2 items-center skill '
          >
            <IoLogoCss3 className='icon text-[25px] mr-2 text-blue-600' />
            <h2 className='font-semibold border-l-2 border-gray-300 pl-4 text-[20px]'>
              CSS 3
            </h2>
          </div>

          <div
            data-aos='fade-up'
            data-aos-once='true'
            data-aos-delay='500'
            className='w-52 sm:w-fit whitespace-nowrap js p-3  flex gap-2 items-center skill '
          >
            <Js />
            <h2 className='font-semibold border-l-2 border-gray-300 pl-4 text-[20px]'>
              JavaScript
            </h2>
          </div>

          <div
            data-aos='fade-up'
            data-aos-once='true'
            data-aos-delay='700'
            className='w-52 sm:w-fit whitespace-nowrap bootstrap p-3  flex gap-2 items-center skill '
          >
            <ReactIcon className='icon text-[22px] mr-2' />
              <h2 className='font-semibold border-l-2 border-gray-300 pl-4 text-[20px]'>
                React
              </h2>
          </div>

          <div
            data-aos='fade-up'
            data-aos-once='true'
            data-aos-delay='900'
            className='w-52 sm:w-fit whitespace-nowrap sass p-3  flex gap-2 items-center skill '
          >
            <Sass className='icon text-[22px] mr-2' />
            <h2 className='font-semibold border-l-2 border-gray-300 pl-4 text-[20px]'>
              Sass
            </h2>
          </div>

          <div
            data-aos='fade-up'
            data-aos-once='true'
            data-aos-delay='1100'
            className='w-52 sm:w-fit whitespace-nowrap tailwind p-3  flex gap-2 items-center skill '
          >
            <Bootstrap className='icon text-[22px] mr-2' />
            <h2 className='font-semibold border-l-2 border-gray-300 pl-4 text-[20px]'>
              Bootstrap
            </h2>
          </div>

          <div
            data-aos='fade-up'
            data-aos-once='true'
            data-aos-delay='1300'
            className='w-52 sm:w-fit whitespace-nowrap figma p-3  flex gap-2 items-center skill '
          >
            <Redux className='icon text-[22px] mr-2' />
            <h2 className='font-semibold border-l-2 border-gray-300 pl-4 text-[20px]'>
            Redux
            </h2>
          </div>

          <div
            data-aos='fade-up'
            data-aos-once='true'
            data-aos-delay='1500'
            className='w-52 sm:w-fit whitespace-nowrap github p-3  flex gap-2 items-center skill '
          >
            <Reduxsaga className='icon text-[22px] mr-2' />
            <h2 className='font-semibold border-l-2 border-gray-300 pl-4 text-[20px]'>
            Redux Saga
            </h2>
          </div>
        </div>

        {/* Other Tech I Know  */}
        <div className='other mt-[50px] sm:mt-[70px]'>
          <div
            data-aos='fade-up'
            data-aos-once='true'
            data-aos-delay='1800'
            className='heading mb-[50px]'
          >
            <h2 className='text-[22px] text-left sm:text-[24px] !font-jost w-fit mx-auto lg:mr-auto leading-[40px] sm:leading-[45px] tracking-[0.1em] mt-[18px] secondec'>
              <span className='py-1 pl-2'>
                BACK
              </span>{" "}
              END
            </h2>
          </div>

          <div className='other mx-auto flex gap-10 sm:gap-14 justify-center items-center flex-wrap'>
            <div
              data-aos='fade-up'
              data-aos-once='true'
              data-aos-delay='2200'
              className='w-52 sm:w-fit whitespace-nowrap react p-3  flex gap-2 items-center skill '
            >
              <Node className='icon text-[22px] mr-2' />
              <h2 className='font-semibold border-l-2 border-gray-300 pl-4 text-[20px]'>
                Node JS
              </h2>
            </div>

            <div
              data-aos='fade-up'
              data-aos-once='true'
              data-aos-delay='2400'
              className='w-52 sm:w-fit whitespace-nowrap nodeJs p-3  flex gap-2 items-center skill '
            >
              <Express className='icon text-[22px] mr-2' />
              <h2 className='font-semibold border-l-2 border-gray-300 pl-4 text-[20px]'>
                Express JS
              </h2>
            </div>

            <div
              data-aos='fade-up'
              data-aos-once='true'
              data-aos-delay='2600'
              className='w-52 sm:w-fit whitespace-nowrap p-3  flex gap-2 items-center skill '
            >
              <MongoDb className='icon text-[22px] mr-2' />
              <h2 className='font-semibold border-l-2 border-gray-300 pl-4 text-[20px]'>
                Mongo DB
              </h2>
            </div>

            <div
              data-aos='fade-up'
              data-aos-once='true'
              data-aos-delay='2800'
              className='w-52 sm:w-fit whitespace-nowrap p-3  flex gap-2 items-center skill '
            >
              <Postgresql className='icon text-[22px] mr-2' />
              <h2 className='font-semibold border-l-2 border-gray-300 pl-4 text-[20px]'>
              Postgresql
              </h2>
            </div>
            <div
              data-aos='fade-up'
              data-aos-once='true'
              data-aos-delay='3000'
              className='w-52 sm:w-fit whitespace-nowrap p-3  flex gap-2 items-center skill '
            >
              <Firebase className='icon text-[22px] mr-2' />
              <h2 className='font-semibold border-l-2 border-gray-300 pl-4 text-[20px]'>
              Firebase
              </h2>
            </div>
            <div
              data-aos='fade-in'
              data-aos-once='true'
              data-aos-delay='3000'
              className='w-52 sm:w-fit whitespace-nowrap p-3  flex gap-2 items-center skill '
            >
              <Git className='icon text-[22px] mr-2' />
              <h2 className='  font-semibold border-l-2 border-white pl-4 text-[20px]'>
                GIT
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencedTech;
