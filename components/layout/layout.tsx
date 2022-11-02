import Cookies from "js-cookie";
import { useEffect } from "react";
// import Slide from "react-reveal/Slide";
import { appActions } from "../../stores/appSlice";
import { useAppDispatch } from "../hooks/hook";
import Footer from "./footer";
import { Navbar } from "./navbar";
const Slide = require("react-reveal/Fade");

const Layout = ({ children }: any) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      dispatch(appActions.login());
    }
  }, []);

  // bg-gradient-to-b from-purple-50 via-purple-150 to-purple-200
  return (
    <div className="bakhMedium flex flex-col justify-between min-h-screen bg-test dark:bg-gradient-to-r dark:from-slate-800 dark:via-slate-800 dark:to-slate-800">
      <Slide top>
        <section>
          <Navbar />
        </section>
      </Slide>
      <section className="mb-auto">{children}</section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
