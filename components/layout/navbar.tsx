import { useEffect, useState } from "react";
import ThemeChanger from "../themeChanger";
const Slide = require("react-reveal/Fade");
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

  const [openMenu, setOpenMenu] = useState<boolean>(false);

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
    { title: "پروفایل", link: "/profile" },
    { title: "سفارشات", link: "/my-orders" },
    { title: "سیمکارت های من", link: "/tickets" },
    { title: "تیکت ها", link: "/tickets" },
    { title: "درباره ما", link: "/about-us" },
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
    <nav className="relative mx-auto px-6 py-5 flex justify-between">
      <div className="w-full md:w-1/4">
        <button
          id="menu-btn"
          type="button"
          className={`${
            openMenu && "open"
          } block hamburger focus:outline-none cursor-pointer `}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        {openMenu && (
          <Slide right>
            <div className="bg-white text-center dark:text-gray-800 py-5 flex flex-col justify-center">
              {userNavbarItems.map((item) => (
                <Link href={`${item.link}`} key={item.title}>
                  <a
                    className={`my-2 ${
                      item.link === router.pathname && "text-red-500"
                    }`}
                    onClick={() => setOpenMenu(false)}
                  >
                    {item.title}
                  </a>
                </Link>
              ))}
              <div className="flex justify-center mt-2">
                <ThemeChanger />
              </div>
            </div>
          </Slide>
        )}
      </div>

      <div className="flex flex-col">
        {login ? (
          <div className="text-purple-700 font-bold">
            <button
              className="p-2 px-6 text-white bg-test2 rounded-lg baseline md:block
                    shadow-lg
                  dark:hover:text-white dark:hover:border-purple-400
                    hover:bg-transparent hover:text-purple-600 hover:border-2 hover:border-purple-600"
              onClick={exit}
            >
              خروج
            </button>
          </div>
        ) : (
          <div className="hidden md:flex">
            {router.pathname !== "/login" &&
              router.pathname !== "/signUp" &&
              router.pathname !== "/verify" && (
                <>
                  <Link href="/signUp">
                    <a
                      className="px-5 py-2 mx-1 text-white bg-test2 rounded-lg baseline md:block
                    shadow-lg
                  dark:hover:text-white dark:hover:border-purple-400
                    hover:bg-transparent hover:text-gray-900 hover:border-2 hover:border-gray-400"
                    >
                      ثبت نام
                    </a>
                  </Link>

                  <Link href="/login">
                    <a
                      className="p-2 px-6 text-white bg-green-600 rounded-lg baseline md:block
                    shadow-lg
                  dark:hover:text-white dark:hover:border-purple-400
                    hover:bg-transparent hover:text-gray-900 hover:border-2 hover:border-gray-400"
                    >
                      ورود
                    </a>
                  </Link>
                </>
              )}
          </div>
        )}
      </div>
    </nav>
  );
}
