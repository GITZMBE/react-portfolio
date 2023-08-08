import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiLogoReact } from "react-icons/bi";
import { DiJsBadge } from "react-icons/di";
import { RxGithubLogo } from "react-icons/rx";
import DarkModeBtn from "./Mode/mode-btn";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shadowOpacity = Math.min(90, scrollPosition);
  // const bgOpacity = Math.min(253, scrollPosition + 243);

  const headerStyle = {
    // backgroundColor: `rgb(${bgOpacity}, ${bgOpacity}, ${bgOpacity})`,
    boxShadow: "0 0 10px #000000" + shadowOpacity,
  };

  const handleClick = () => {
    const navContainer = document.getElementById("nav-container");
    navContainer.classList.contains("hidden")
      ? navContainer.classList.remove("hidden")
      : navContainer.classList.add("hidden");
  };

  return (
    <header
      style={headerStyle}
      className='fixed top-0 flex justify-between items-center w-full h-headerOffset py-0 px-4 sm:px-8 lg:px-20 bg-primaryLight transitioning z-1 dark:bg-primaryDark'
    >
      <h1 className='flex items-center gap-4 text-dark text-2xl transitioning cursor-default dark:text-lightOverPrimaryDark'>
        <DiJsBadge
          size={36}
          className='fill-overSecondaryLight dark:fill-lightOverPrimaryDark'
        /> 
        Portfolio
      </h1>
      <nav>
        <ul className='hidden gap-4 list-none font-semibold lg:flex'>
          <li>
            <a
              href='#home-container'
              target='_self'
              // className='decoration-0 text-overPrimaryLight p-2 transitioning hover:text-dark hover:cursor-pointer dark:text-darkOverPrimaryDark dark:hover:text-lightOverPrimaryDark'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#about-container'
              target='_self'
              // className='decoration-0 text-overPrimaryLight p-2 transitioning hover:text-dark hover:cursor-pointer dark:text-darkOverPrimaryDark dark:hover:text-lightOverPrimaryDark'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#skills-container'
              target='_self'
              // className='decoration-0 text-overPrimaryLight p-2 transitioning hover:text-dark hover:cursor-pointer dark:text-darkOverPrimaryDark dark:hover:text-lightOverPrimaryDark'
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href='#portfolio-container'
              target='_self'
              // className='decoration-0 text-overPrimaryLight p-2 transitioning hover:text-dark hover:cursor-pointer dark:text-darkOverPrimaryDark dark:hover:text-lightOverPrimaryDark'
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href='#contact-container'
              target='_self'
              // className='decoration-0 text-overPrimaryLight p-2 transitioning hover:text-dark hover:cursor-pointer dark:text-darkOverPrimaryDark dark:hover:text-lightOverPrimaryDark'
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className='flex gap-8'>
        <DarkModeBtn />
        <AiOutlineMenu
          onClick={handleClick}
          size={22}
          className='fill-overPrimaryLight hover:fill-dark dark:fill-lightOverPrimaryDark dark:hover:fill-darkOverPrimaryDark transioning cursor-pointer lg:hidden'
        />
      </div>
      <div 
        id='nav-container'
        className='hidden fixed top-0 left-0 w-full h-screen bg-overPrimaryLight'
      >
        <nav className='flex flex-col gap-4 h-full w-[85%] sm:w-[65%] md:w-[55%] lg:w-[45%] py-8 px-4 bg-primaryLight transitioning dark:bg-primaryDark'>
          <div className='flex justify-between items-center'>
            <BiLogoReact size={50} fill='#336699' />
            <AiOutlineClose
              id='close-btn'
              onClick={handleClick}
              size={22}
              className='cursor-pointer fill-overPrimaryLight hover:fill-dark dark:fill-lightOverPrimaryDark dark:hover:fill-darkOverPrimaryDark transioning'
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
