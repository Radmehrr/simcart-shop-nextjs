import { useState } from "react";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  console.log(openMenu);
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div className="pt-2">
          <img />
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-darkBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkBlue">
            Products
          </a>
          <a href="#" className="hover:text-darkBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkBlue">
            Community
          </a>
        </div>

        <div className="flex">
          <a
            href="#"
            className="hidden p-3 px-4 mx-1 pt-2 text-white bg-purple-600 rounded-full baseline hover:bg-purple-400 md:block"
          >
            ثبت نام
          </a>
          <a
            href="#"
            className="hidden p-3 px-6 pt-2 text-white bg-purple-600 rounded-full baseline hover:bg-purple-400 md:block"
          >
            ورود
          </a>
        </div>
        <button
          id="menu-btn"
          type="button"
          className={`${
            openMenu && "open"
          } block hamburger md:hidden focus:outline-none cursor-pointer`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div className="md:hidden">
        <div
          id="menu"
          className={`absolute flex flex-col items-center
          self-end py-8 mt-10 space-y-6 font-bold top-[-400px]
          transition-all ease-in duration-500
        bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
          !openMenu && "top-[40px]"
        }`}
        >
          <a href="#" className="hover:text-darkBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkBlue">
            Products
          </a>
          <a href="#" className="hover:text-darkBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkBlue">
            Community
          </a>
        </div>
      </div>
    </nav>
  );
}
