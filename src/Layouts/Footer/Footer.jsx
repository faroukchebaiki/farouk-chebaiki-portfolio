import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        wordSpacing: "2px",
        backgroundColor:"black"  
      }}
      className='bg-center p-4 text-white trac leading-[180%] spac font-nunito mx-0 text-center text-[14px]'
    >
      Coded With Love By
     <a href="https://github.com/faroukchebaiki" target='_blank' rel="noreferrer" > <span className='text-green-50'> Farouk Chebaiki</span></a>
    </footer>
  );
};

export default Footer;
