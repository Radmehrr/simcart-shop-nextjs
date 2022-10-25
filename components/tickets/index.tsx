import Link from "next/link";
// import Fade from "react-reveal/Fade";
import { FC } from "react";
import Plus from "../svg/plus";
import MyTickets from "./myTickets";
const Fade = require("react-reveal/Fade");

const Tickets: FC<any> = () => {
  return (
    <section>
      <div className="max-w-5xl md:mx-auto rounded-lg shadow-2xl bg-white mx-2 bakhMedium">
        <div className="flex justify-end py-2 px-2">
          <Fade left big>
            <Link href="/tickets/create">
              <a className="flex bg-primary rounded-md py-2 px-3 cursor-pointer hover:bg-purple-700">
                <Plus />
                <p className="text-white">ایجاد تیکت جدید</p>
              </a>
            </Link>
          </Fade>
        </div>

        <div>
          <MyTickets />
        </div>
      </div>
    </section>
  );
};

export default Tickets;
