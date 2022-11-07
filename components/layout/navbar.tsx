import { useEffect, useState } from "react";
import ThemeChanger from "../themeChanger";
import Link from "next/link";
import Lottie from "react-lottie";
import { useRouter } from "next/router";
import instance, { SWRfetcher } from "../../axios-config";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { appActions } from "../../stores/appSlice";
import Cookies from "js-cookie";
import useSWR from "swr";
import fingerprint from "../../public/lottie/fingerprint.json";
import signOut from "../../public/lottie/signOut.json";
import home from "../../public/lottie/home.json";
import profile from "../../public/lottie/profile.json";
import simcart from "../../public/lottie/simcart.json";
import users from "../../public/lottie/users.json";
import order from "../../public/lottie/order.json";
import ticket from "../../public/lottie/ticket.json";
import about from "../../public/lottie/about.json";
const Slide = require("react-reveal/Fade");

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
    { title: "سیمکارت های من", link: "/my-simcarts" },
    { title: "سفارشات", link: "/my-orders" },

    { title: "تیکت ها", link: "/tickets" },
    { title: "درباره ما", link: "/about-us" },
  ];
  const adminNavbarItems = [
    { title: "صفحه اصلی", link: "/" },
    { title: "پروفایل", link: "/profile" },
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

  const fingerOptions = {
    loop: true,
    autoplay: true,
    animationData: fingerprint,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const signOutOptions = {
    loop: true,
    autoplay: true,
    animationData: signOut,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const ticketOptions = {
    loop: true,
    autoplay: true,
    animationData: ticket,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const aboutOptions = {
    loop: true,
    autoplay: true,
    animationData: about,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const usersOptions = {
    loop: true,
    autoplay: true,
    animationData: users,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const orderOptions = {
    loop: true,
    autoplay: true,
    animationData: order,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const profileOptions = {
    loop: true,
    autoplay: true,
    animationData: profile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const simcartOptions = {
    loop: true,
    autoplay: true,
    animationData: simcart,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const homeOptions = {
    loop: true,
    autoplay: true,
    animationData: home,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const fingerLottieStyle = {
    width: 30,
    height: 30,
    backgroundColor: "transparent",
  };
  const usersLottieStyle = {
    width: 40,
    height: 40,
    marginRight: -25,
    marginTop: -10,
    marginLeft: 5,
    backgroundColor: "transparent",
  };
  const simcartLottieStyle = {
    width: 30,
    height: 30,
    marginTop: -30,
    marginRight: -15,
    marginLeft: 5,
    backgroundColor: "transparent",
  };
  const profileLottieStyle = {
    width: 80,
    height: 80,
    marginRight: -45,
    marginTop: -30,
    marginLeft: 0,
    backgroundColor: "transparent",
  };
  const ticketLottieStyle = {
    width: 55,
    height: 55,
    marginRight: -30,
    marginTop: -20,
    backgroundColor: "transparent",
  };
  const mySimcartsStyle = {
    width: 25,
    height: 25,
    marginRight: 35,
    marginTop: -20,
    backgroundColor: "transparent",
  };
  const aboutLottieStyle = {
    width: 25,
    height: 25,
    marginRight: -20,
    marginTop: -10,
    backgroundColor: "transparent",
  };

  return (
    <nav className="relative mx-auto px-6 py-5 flex justify-between">
      <div className="w-full mt-3 mr-3">
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
              {(() => {
                if (user.role == "admin" || user.role == "support") {
                  return adminNavbarItems.map((item) => (
                    <Link href={`${item.link}`} key={item.title}>
                      <a
                        className={`my-2 ${
                          item.link === router.pathname && "text-red-500"
                        } flex justify-center
                       
                        `}
                        onClick={() => setOpenMenu(false)}
                      >
                        {item.link == "/" && (
                          <div>
                            <Lottie
                              options={homeOptions}
                              style={fingerLottieStyle}
                            />
                          </div>
                        )}
                        {item.link == "/profile" && (
                          <div>
                            <Lottie
                              options={profileOptions}
                              style={profileLottieStyle}
                            />
                          </div>
                        )}
                        {item.link == "/admin/simcarts" && (
                          <div>
                            <Lottie
                              options={simcartOptions}
                              style={simcartLottieStyle}
                            />
                          </div>
                        )}
                        {item.link == "/admin/orders" && (
                          <div>
                            <Lottie
                              options={orderOptions}
                              style={usersLottieStyle}
                            />
                          </div>
                        )}
                        {item.link == "/admin/users" && (
                          <div>
                            <Lottie
                              options={usersOptions}
                              style={usersLottieStyle}
                            />
                          </div>
                        )}
                        {item.link == "/admin/tickets" && (
                          <div>
                            <Lottie
                              options={ticketOptions}
                              style={ticketLottieStyle}
                            />
                          </div>
                        )}
                        <p
                          className={`${
                            item.link == "/profile" && "-mr-[20px]"
                          } ${item.link == "/admin/simcarts" && "-mt-[20px]"}`}
                        >
                          {item.title}
                        </p>
                      </a>
                    </Link>
                  ));
                } else {
                  return userNavbarItems.map((item) => (
                    <Link href={`${item.link}`} key={item.title}>
                      <a
                        className={`my-2 ${
                          item.link === router.pathname && "text-red-500"
                        } flex justify-center hover:text-green-400`}
                        onClick={() => setOpenMenu(false)}
                      >
                        {item.link == "/" && (
                          <div>
                            <Lottie
                              options={homeOptions}
                              style={fingerLottieStyle}
                            />
                          </div>
                        )}
                        {item.link == "/profile" && (
                          <div>
                            <Lottie
                              options={profileOptions}
                              style={profileLottieStyle}
                            />
                          </div>
                        )}
                        {item.link == "/my-orders" && (
                          <div>
                            <Lottie
                              options={orderOptions}
                              style={usersLottieStyle}
                            />
                          </div>
                        )}
                        {item.link == "/my-simcarts" && (
                          <div>
                            <Lottie
                              options={simcartOptions}
                              style={mySimcartsStyle}
                            />
                          </div>
                        )}
                        {item.link == "/tickets" && (
                          <div>
                            <Lottie
                              options={ticketOptions}
                              style={ticketLottieStyle}
                            />
                          </div>
                        )}
                        {item.link == "/about-us" && (
                          <div>
                            <Lottie
                              options={aboutOptions}
                              style={aboutLottieStyle}
                            />
                          </div>
                        )}
                        <p
                          className={`${
                            item.link == "/profile" && "-mr-[20px]"
                          } ${
                            item.link == "/my-simcarts" &&
                            "-mt-[20px] mr-[10px]"
                          } ${
                            item.link == "/about-us" && "-mt-[10px] mr-[10px]"
                          }`}
                        >
                          {item.title}
                        </p>
                      </a>
                    </Link>
                  ));
                }
              })()}
              <div className="flex justify-center mt-2">
                <ThemeChanger />
              </div>
            </div>
          </Slide>
        )}
      </div>

      <div>
        {!openMenu && (
          <div className="flex flex-col">
            {login ? (
              <div className="text-purple-700 font-bold">
                <button
                  className="p-2 px-2 flex text-white bg-test2 rounded-lg baseline
                          shadow-lg justify-between
                        dark:hover:text-white dark:hover:border-purple-400
                          hover:bg-transparent hover:text-gray-600 hover:border-2 hover:border-gray-600"
                  onClick={exit}
                >
                  <p className="mx-2 mt-1">خروج</p>
                  <Lottie options={signOutOptions} style={fingerLottieStyle} />
                </button>
              </div>
            ) : (
              <div className="flex w-full">
                {router.pathname !== "/login" &&
                  router.pathname !== "/signUp" &&
                  router.pathname !== "/verify" && (
                    <>
                      <Link href="/signUp">
                        <a
                          className="px-2 py-2 mx-1 text-white bg-test2 rounded-lg baseline 
                          shadow-lg items-center
                        dark:hover:text-white flex dark:hover:border-purple-400
                          hover:bg-transparent justify-between hover:text-gray-900 hover:border-2 hover:border-gray-400"
                        >
                          <div className="flex ml-1 md:ml-4">
                            <p className="px-1">ثبت</p>
                            <p>نام</p>
                          </div>
                          <div>
                            <Lottie
                              options={fingerOptions}
                              style={fingerLottieStyle}
                            />
                          </div>
                        </a>
                      </Link>

                      <Link href="/login">
                        <a
                          className="px-6 md:p-2 md:px-6 py-2 text-white bg-green-600 rounded-lg baseline
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
        )}
      </div>
    </nav>
  );
}
