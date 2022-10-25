import { Fragment, useEffect, useState } from "react";
import ThemeChanger from "../themeChanger";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import instance, { SWRfetcher } from "../../axios-config";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { appActions } from "../../stores/appSlice";
import Cookies from "js-cookie";
import useSWR from "swr";

export function Navbar() {
  const dispatch = useAppDispatch();
  const login = useAppSelector((state) => state.auth);

  const [openMenu, setOpenMenu] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    if (login) {
      (async () => {
        const res = await instance.get("/user");
        dispatch(appActions.addUser(res.data));
      })();
    }
  }, [login]);

  const user: any = useAppSelector((state) => state.user);

  const { data: adminPendingTicket, error: adminTicketError } = useSWR<any>(
    user.role == "admin" ? "/admin/ticket?status=در حال بررسی" : null,
    SWRfetcher
  );

  const { data: userRespondedTicket, error: userTicketError } = useSWR<any>(
    user.role == "client" ? "/user/ticket?status=پاسخ داده" : null,
    SWRfetcher
  );

  const userNavbarItems = [
    { title: "صفحه اصلی", link: "/" },
    { title: "درباره ما", link: "/about-us" },
    { title: "تیکت ها", link: "/tickets" },
  ];
  const adminNavbarItems = [
    { title: "صفحه اصلی", link: "/" },
    { title: "سیمکارت", link: "/admin/simcarts" },
    { title: "کاربران", link: "/admin/users" },
    { title: "سفارشات", link: "/admin/orders" },
    { title: "تیکت ها", link: "/admin/tickets" },
  ];

  const exit = () => {
    Cookies.remove("accessToken");
    dispatch(appActions.logout);
    router.push("/");
    router.reload();
  };

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
                alt="image"
              />
            </a>
          </Link>
        </div>
        {(() => {
          if (user.role === "admin" || user.role === "support") {
            return (
              <div className="hidden md:flex space-x-8 bakhMedium">
                {adminNavbarItems.map((item: any) => {
                  return (
                    <Fragment key={item.title}>
                      <Link href={item.link}>
                        <a className="hover:text-primaryDark md:ml-4 flex hover:border-b-2 hover:transition-all hover:animate-bounce hover:border-purple-500 dark:hover:text-white">
                          {item.title}
                          {item.title == "تیکت ها" &&
                            adminPendingTicket?.data?.length > 0 && (
                              <div className="mr-2 h-2 w-2 bg-blue-400 rounded-md"></div>
                            )}
                        </a>
                      </Link>
                    </Fragment>
                  );
                })}

                <div>
                  <ThemeChanger />
                </div>
              </div>
            );
          } else {
            return (
              <div className="hidden md:flex space-x-8 bakhMedium">
                {userNavbarItems.map((item: any) => {
                  return (
                    <Link key={item.title} href={item.link}>
                      <a
                        className="hover:text-primaryDark md:ml-4 hover:border-b-2
                       hover:transition-all hover:animate-bounce hover:border-purple-500
                        dark:hover:text-white flex"
                      >
                        {item.title}
                        {item.title == "تیکت ها" &&
                          userRespondedTicket?.data?.length > 0 && (
                            <div className="mr-2 h-2 w-2 bg-blue-400 rounded-md"></div>
                          )}
                      </a>
                    </Link>
                  );
                })}

                {login && (
                  <Link href="/my-orders">
                    <a className="hover:text-primaryDark md:ml-4 hover:border-b-2 hover:transition-all hover:animate-bounce hover:border-purple-500 dark:hover:text-white">
                      سفارشات
                    </a>
                  </Link>
                )}
                <div>
                  <ThemeChanger />
                </div>
              </div>
            );
          }
        })()}

        {login ? (
          <div className="text-purple-700 font-bold">
            <button
              className="p-2 px-6 text-white bg-primary rounded-lg baseline md:block
                    shadow-lg
                  dark:hover:text-white dark:hover:border-purple-400
                    hover:bg-transparent hover:text-purple-600 hover:border-2 hover:border-purple-600"
              onClick={exit}
            >
              خروج
            </button>
          </div>
        ) : (
          <div className="flex">
            {router.pathname !== "/login" &&
              router.pathname !== "/signUp" &&
              router.pathname !== "/verify" && (
                <Link href="/login">
                  <a
                    className="p-2 px-6 text-white bg-primary rounded-lg baseline md:block
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
          {(() => {
            if (user.role === "admin" || user.role === "support") {
              return (
                <>
                  {adminNavbarItems.map((item: any, index) => {
                    return (
                      <Link key={index} href={item.link}>
                        <a className="hover:text-primaryDark md:ml-4 flex">
                          {item.title}
                          {item.title == "تیکت ها" &&
                            adminPendingTicket?.data?.length > 0 && (
                              <div className="mr-2 h-2 w-2 bg-blue-400 rounded-md"></div>
                            )}
                        </a>
                      </Link>
                    );
                  })}
                  <div>
                    <ThemeChanger />
                  </div>
                </>
              );
            } else {
              return (
                <>
                  {userNavbarItems.map((item: any, index) => {
                    return (
                      <Link key={index} href={item.link}>
                        <a className="hover:text-primaryDark md:ml-4 flex">
                          {item.title}
                          {item.title == "تیکت ها" &&
                            userRespondedTicket?.data?.length > 0 && (
                              <div className="mr-2 h-2 w-2 bg-blue-400 rounded-md"></div>
                            )}
                        </a>
                      </Link>
                    );
                  })}
                  <div>
                    <ThemeChanger />
                  </div>
                </>
              );
            }
          })()}
        </div>
      </div>
    </nav>
  );
}
