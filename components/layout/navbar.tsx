import { useState } from "react";
import ThemeChanger from "../themeChanger";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="relative mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="hidden md:flex space-x-8 bakhMedium">
          <a href="#" className="hover:text-purple-800 md:ml-4">
            صفحه اصلی
          </a>

          <a href="#" className="hover:text-purple-800">
            خدمات
          </a>
          <a href="#" className="hover:text-purple-800">
            بلاگ
          </a>

          <a href="#" className="hover:text-purple-800">
            درباره ما
          </a>
          <a href="#" className="hover:text-purple-800">
            ارتباط با ما
          </a>

          <div>
            <ThemeChanger />
          </div>
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

        {/* logo */}
        {/* <div className="pt-2">
          <img />
        </div> */}

        <button
          id="menu-btn"
          type="button"
          className={`${
            !openMenu && "open"
          } block hamburger md:hidden focus:outline-none cursor-pointer `}
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
          className={`absolute flex flex-col items-center dark:text-black
          self-end py-8 mt-10 space-y-6 font-bold top-[-400px]
          transition-all ease-in duration-500 
        bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
          !openMenu && "top-[40px]"
        }`}
        >
          <a href="#" className="hover:text-purple-800">
            صفحه اصلی
          </a>
          <a href="#" className="hover:text-purple-800">
            خدمات
          </a>
          <a href="#" className="hover:text-purple-800">
            بلاگ
          </a>
          <a href="#" className="hover:text-purple-800">
            درباره ما
          </a>
          <a href="#" className="hover:text-purple-800">
            ارتباط با ما
          </a>
          <div>
            <ThemeChanger />
          </div>
        </div>
      </div>
    </nav>
  );
}
