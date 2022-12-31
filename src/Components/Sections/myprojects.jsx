import React from "react";
import { tw } from "twind";

const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'http://www.annagorin.com/galleries/vistas/slides/oregon-hood-river-valley-sunset.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'http://www.annagorin.com/galleries/vistas/slides/new-zealand-mt-ngauruhoe-tongariro-sunrise.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'http://www.annagorin.com/galleries/vistas/slides/palouse-falls-washington-river-canyon.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
]


const Myprojects = (props) => {
  return (
    <div
      {...props}
      className={`p-4 xl:container mx-auto workingProcess mb-[80px] sm:mb-[150px]  `}
    >
      {/* Heading  */}
      <div className='xl:container mx-auto heading mb-[50px] sm:mb-[80px]'>
        <h2
      className='text-[25px] text-center sm:text-[30px] !font-jost font-semibold w-fit mx-auto leading-[35px] sm:leading-[45px] tracking-[0.03em] mt-[18px] mb-[17px] titles'>
          <span className='py-2'>My </span> 
          Projects
        </h2>
        <p style={{
        color: "rgb(243 244 246)"
     }} className='w-fit mx-auto text-center leading-[26px] tracking-[0.01em] subtitles'>
        this it some examples of my work.{" "}
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
        
        {callouts.map((callout) => (
              <div key={callout.name} className="shadow-service w-[480px] glass">
                <div className="relative sm:w-full overflow-hidden rounded-lg group-hover:opacity-75 ">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className=" object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
        
      </div>
    </div>
  );
};

export default Myprojects;
