import { useEffect, useState } from "react";
import ThemeChanger from "../themeChanger";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import instance from "../../axios-config";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const router = useRouter();
  useEffect(() => {
    instance.get("/user").then((res: any) => {
      setData(res.data);
    });
  }, []);
  const navbarItems = [
    { title: "صفحه اصلی", link: "/" },
    { title: "خدمات", link: "/" },
    { title: "بلاگ", link: "/" },
    { title: "درباره ما", link: "/" },
    { title: "ارتباط با ما", link: "/" },
  ];

  return (
    <nav className="relative mx-auto px-6 py-3">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <a>
              <Image
                src="/img/logos/HorizontalSimcartBazarLogo.png"
                width={60}
                height={65}
              />
              {/* <Image
            src="/img/logos/SimcartBazarVertical.png"
            width={100}
            height={50}
          /> */}
            </a>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 bakhMedium">
          {navbarItems.map((item: any) => {
            return (
              <Link key={item.title} href={item.link}>
                <a className="hover:text-primaryDark md:ml-4 hover:border-b-2 hover:transition-all hover:animate-bounce hover:border-purple-500 dark:hover:text-white">
                  {item.title}
                </a>
              </Link>
            );
          })}
          <div>
            <ThemeChanger />
          </div>
        </div>

        {data?.fullName ? (
          <div>{data?.fullName}</div>
        ) : (
          <div className="flex">
            {router.pathname !== "/login" &&
              router.pathname !== "/signUp" &&
              router.pathname !== "/verify" && (
                <Link href="/login">
                  <a
                    className="hidden p-2 px-6 text-white bg-primary rounded-lg baseline md:block
                    shadow-lg
                  dark:hover:text-white dark:hover:border-purple-400
                    hover:bg-transparent hover:text-purple-600 hover:border-2 hover:border-purple-600"
                  >
                    ورود
                  </a>
                </Link>
              )}
          </div>
        )}

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
          className={`z-50 absolute flex flex-col items-center dark:text-black
          self-end py-8 mt-10 space-y-6 font-bold top-[-400px]
          transition-all ease-in duration-500 
        bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
          !openMenu && "top-[40px]"
        }`}
        >
          {navbarItems.map((item: any, index) => {
            return (
              <Link key={index} href={item.link}>
                <a className="hover:text-primaryDark md:ml-4">{item.title}</a>
              </Link>
            );
          })}
          <div>
            <ThemeChanger />
          </div>
        </div>
      </div>
    </nav>
  );
}
