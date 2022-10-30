import Link from "next/link";
import { FC } from "react";
import Plus from "../svg/plus";
import Simcarts from "./simcarts";
const Fade = require("react-reveal/Fade");

const MySimcarts: FC<any> = () => {
  return (
    <section>
      <div className="max-w-5xl md:mx-auto rounded-lg shadow-2xl bg-white mx-2 bakhMedium">
        <div className="flex justify-end py-2 px-2">
          <Fade left big>
            <Link href="/my-simcarts/add-simcart">
              <a className="flex bg-primary rounded-md py-2 px-3 cursor-pointer hover:bg-purple-700">
                <Plus />
                <p className="text-white">درج سیمکارت</p>
              </a>
            </Link>
          </Fade>
        </div>

        <div>
          <Simcarts />
        </div>
      </div>
    </section>
  );
};

export default MySimcarts;
