/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Disclosure } from "@headlessui/react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AnimatedCursor from "react-animated-cursor";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { tw } from "twind";

const Header = () => {
  // Handle Mobile Menu Open & Close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleMobileMenuOpen = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    } else if (!isMobileMenuOpen) {
      setIsMobileMenuOpen(true);
    }
  };

  return (
    <>
      {/* Animated Custom Cursor */}
      <AnimatedCursor
        innerSize={8}
        outerSize={28}
        color='190 ,242 ,100'
        outerAlpha={0.2}
        innerScale={0.9}
        outerScale={2}
        trailingSpeed={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <div className='xl sticky top-0 z-50 headr'>
      <Disclosure
        as='header'
        className='xl:container mx-auto p-4  tracking-wider flex justify-between items-center sticky top-0 z-50'
      >
        {({ open }) => (
          <>
            {/* Logo  */}
            <div className='logo text-[16px] xsm:text-lg primec flex flex-col tracking-widest'>
              Farouk Chebaiki
              <span className='text-[12px] hidden sm:block secondec py-0 my-0 text-slate-600'>
                Full stack Developer
              </span>
            </div>

            {/* Desktop Menu  */}
            <nav className='menu hidden lg:block'>
              <ul className='flex gap-10'>
                <li>
                  <AnchorLink
                    offset='96'
                    href='#heroSection'
                    className='my-4 capitalize block py-1 linkc'
                  >
                    Home
                  </AnchorLink>
                </li>
                <li>
                  <AnchorLink
                    offset='96'
                    href='#Contact'
                    className='my-4 capitalize block py-1 linkc'
                  >
                    Contact
                  </AnchorLink>
                </li>
              </ul>
            </nav>

            {/* CTA & Humberger Btn  */}
            <div className='flex'>
              <button
                type='button'
                className={tw`whitespace-nowrap transition-all duration-300 px-8 py-2 border greenb hover:bg-gray-100 font(nunito normal) text-primary rounded focus:( ring-4 ring-green-200 outline-8))`}
              >
                Hire Me
              </button>
              <button
                onClick={(e) => handleMobileMenuOpen()}
                className={tw`block ml-4 lg:hidden transition-all duration-300 p-3 border font(nunito normal) text-white rounded focus:( ring-4 ring-green-200 outline-8))`}
              >
                {isMobileMenuOpen ? <MdClose /> : <FaBars />}
              </button>
            </div>

            {/* Mobile Menu  */}
            {isMobileMenuOpen && (
              <Disclosure.Panel
                static
                as='nav'
                className={tw`border flex justify-between flex-col z-[101] phone fullheight shadow-sm w-[70%] xsm:max-w-[420px] min-h-full fixed top-0 left-0`}
              >
                <div className='logo h-[97px] xsm:h-[77px] px-7 pt-6 tracking-widest'>
                  <p className='text-[18px] sm:text-[19px] primec'  >Farouk Chebaiki</p>
                  <span className='text-[12px] secondec'>Full stack Developer</span>
                </div>

                <div>
                  <ul className='p-2'>
                    <li>
                      <AnchorLink
                        offset='96'
                        href='#heroSection'
                        className='capitalize px-5 py-2 text-[16px] backggrey rounded-2xl flex items-center linkc'
                      >
                        Home
                      </AnchorLink>
                    </li>
                    <li>
                      <AnchorLink
                        offset='96'
                        href='#Contact'
                        className='capitalize px-5 py-2 text-[16px] rounded-2xl flex items-center linkc'
                      >
                        Contact
                      </AnchorLink>
                    </li>
                  </ul>
                </div>

                <div className='message p-4 px-7'>
                  <p className='capitalize linkc text-sm'>
                    I available for freelance project.{" "}
                  </p>
                </div>
              </Disclosure.Panel>
            )}

            {/* IF User Click Outside of Mobile Menu so that mobile menu will close */}
            {isMobileMenuOpen && (
              <div
                className='fixed inset-0 w-full min-h-full bg-[#0000008f] z-[100]'
                onClick={(e) => setIsMobileMenuOpen(false)}
              ></div>
            )}
          </>
        )}
      </Disclosure>
      </div>
    </>
  );
};

export default Header;
