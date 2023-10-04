import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="padding-x py-8 fixed z-50 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block relative">
          <img
            src={hamburger}
            alt="hamburger"
            width={24}
            height={24}
            onClick={() => setMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && (
            <ul className="absolute right-0 mt-2 py-2 px-4 bg-white shadow rounded z-10">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='block font-montserrat leading-normal text-base md:text-lg text-slate-gray hover:text-gray-900 break-words'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
