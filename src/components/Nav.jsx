import { useState } from "react";

import navLogo from "../assets/navLogo.svg";
import logo from "../assets/lusiboi.png";

const closeBtn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

const openBtn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

function Nav() {
  const [nav, setNav] = useState(false);

  function handleToggle() {
    setNav(!nav);
  }

  return (
    <nav className=" flex items-center justify-between py-4  max-w-[1600px] mx-auto px-4 flex-wrap ">
      <div>
        <img src={navLogo} alt="logo" className="w-15 md:w-32 lg:38" />
      </div>
      <div>
        <ul className="md:flex items-center justify-between gap-16 hidden">
          <li>Home</li>
          <li>About</li>
          <li>Our Services</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="block md:hidden" onClick={handleToggle}>
        {nav ? closeBtn : openBtn}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-stone-900 text-stone-200     ease-in-out duration-300"
            : "fixed left-[-100%] "
        }
      >
        <ul className="  pt-24 uppercase p-4">
          <li className="p-4 border-b border-stone-600">Home</li>
          <li className="p-4 border-b border-stone-600">About</li>
          <li className="p-4 border-b border-stone-600">Our Services</li>
          <li className="p-4 border-b border-stone-600">Contact</li>
        </ul>

        <div>
          <img src={logo} alt="logo" className="w-16 mx-auto mt-80" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
