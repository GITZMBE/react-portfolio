import React from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BiLogoReact, BiLogoLinkedin, BiSolidContact } from "react-icons/bi";
import { RxGithubLogo } from "react-icons/rx";
import { useSetRecoilState } from "recoil";
import { showRelativeNavbarState } from "../recoil";

function ResponsiveNav() {
  const setShowRelativeNavbar = useSetRecoilState(showRelativeNavbarState);

  const handleClose = () => {
    setShowRelativeNavbar(false);
  };

  return (
    <div className='fixed z-10 top-0 left-0 w-full h-screen bg-overPrimaryLight'>
      <nav className='flex flex-col justify-between gap-4 h-full w-[85%] sm:w-[65%] md:w-[55%] lg:w-[45%] py-8 px-4 bg-primaryLight transitioning dark:bg-primaryDark'>
        <div>
          <div className='flex justify-between items-center'>
            <BiLogoReact
              size={50}
              className='fill-[#61DBFB] dark:fill-[#08B6CE]'
            />
            <a
              href='#home-container'
              className='group p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight cursor-pointer transitioning'
              onClick={handleClose}
            >
              <AiOutlineClose
                size={22}
                className='cursor-pointer text-overPrimaryLight group-hover:text-dark dark:text-lightOverPrimaryDark group-dark:hover:text-darkOverPrimaryDark transioning'
              />
            </a>
          </div>
          <p className='text-xl dark:text-lightOverPrimaryDark px-2 py-4 border-b dark:border-b-darkOverPrimaryDark tracking-widest uppercase cursor-default'>
            Contact for your own build
          </p>
          <div className='flex flex-col text-2xl py-4 list-none font-semibold'>
            <a
              href='#home-container'
              target='_self'
              className='w-full hover:bg-secondaryLight dark:hover:bg-tertiaryDark py-4 px-2'
              onClick={handleClose}
            >
              Home
            </a>
            <a
              href='#about-container'
              target='_self'
              className='w-full hover:bg-secondaryLight dark:hover:bg-tertiaryDark py-4 px-2'
              onClick={handleClose}
            >
              About
            </a>
            <a
              href='#skills-container'
              target='_self'
              className='w-full hover:bg-secondaryLight dark:hover:bg-tertiaryDark py-4 px-2'
              onClick={handleClose}
            >
              Skills
            </a>
            <a
              href='#portfolio-container'
              target='_self'
              className='w-full hover:bg-secondaryLight dark:hover:bg-tertiaryDark py-4 px-2'
              onClick={handleClose}
            >
              Portfolio
            </a>
            <a
              href='#contact-container'
              target='_self'
              className='w-full hover:bg-secondaryLight dark:hover:bg-tertiaryDark py-4 px-2'
              onClick={handleClose}
            >
              Contact
            </a>
          </div>
        </div>
        <div>
          <p className='text-xl text-[#61DBFB] dark:text-[#08B6CE] cursor-default'>
            Let's Connect!
          </p>
          <div className='flex justify-center gap-4 sm:gap-12 py-4'>
            <a
              href='https://github.com/GITZMBE'
              className='p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <RxGithubLogo size={22} />
            </a>
            <a
              href='https://www.linkedin.com/in/lucas-andersson-861425214/'
              className='p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <BiLogoLinkedin size={22} />
            </a>
            <a
              href='mailto:lucasfilip@hotmail.se'
              className='p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <AiOutlineMail size={22} />
            </a>
            <a
              href='#contact-container'
              className='p-4 rounded-full shadow-lg hover:shadow-overPrimaryLight dark:hover:bg-tertiaryDark cursor-pointer'
            >
              <BiSolidContact size={22} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default ResponsiveNav;
