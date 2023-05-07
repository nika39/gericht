import { useState } from "react";
import { menu } from "../constants/data";
import classNames from "classnames";
import { useRef } from "react";

function Navbar() {
  const [navbarToggled, setNavarToggled] = useState(false);
  const navbarMobile = useRef();

  const openNavbar = () => {
    setNavarToggled(true);
  };

  const closeNavbar = () => {
    navbarMobile.current.classList.remove("animate-slide-bottom");
    navbarMobile.current.classList.add("animate-slide-top");
    navbarMobile.current.addEventListener(
      "animationend",
      () => {
        setNavarToggled(false);
      },
      { once: true }
    );
  };

  return (
    <div className="max-w-[1920px] mx-auto p-4 lg:px-8 lg:py-8 flex justify-between items-center">
      <a href="#top" className="font-primary text-[33px] leading-[130%] uppercase tracking-[.04em] font-bold">
        Gerícht
      </a>
      <button className="active:text-golden lg:hidden" onClick={openNavbar}>
        <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 88C0 74.7 10.7 64 24 64H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 112 0 101.3 0 88zM0 248c0-13.3 10.7-24 24-24H424c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zM448 408c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H424c13.3 0 24 10.7 24 24z" />
        </svg>
      </button>
      <ul className="hidden lg:flex space-x-8">
        {menu.map((menuItem, i) => (
          <li key={i}>
            <a className="leading-7 tracking-[.04em] hover:text-grey transition-colors" href="#top">
              {menuItem}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex items-center space-x-4">
        <a className="leading-7 tracking-[.04em] border-b border-transparent hover:border-golden" href="#top">
          Log In / Registration
        </a>
        <div className="w-px bg-grey h-8"></div>
        <a className="leading-7 tracking-[.04em] border-b border-transparent hover:border-golden" href="#top">
          Book Table
        </a>
      </div>
      <div
        ref={navbarMobile}
        className={classNames("items-center justify-center fixed top-0 left-0 w-full h-screen bg-black transition-transform lg:hidden", {
          "hidden": !navbarToggled,
          "animate-slide-bottom flex": navbarToggled
        })}
      >
        <button onClick={closeNavbar}>
          <svg className="absolute top-5 right-5 text-golden w-[27px] h-[27px] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 000 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"></path>
          </svg>
        </button>
        <ul className="space-y-8">
          {menu.map((menuItem, i) => (
            <li key={i}>
              <a className="leading-7 tracking-[.04em] text-golden font-primary text-[2rem]" href="#top">
                {menuItem}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
