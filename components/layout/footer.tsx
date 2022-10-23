import Link from "next/link";
import Location from "../svg/location";
import Calendar from "../svg/calendar";
import Phone from "../svg/phone";

const Footer = () => {
  const userNavbarItems = [
    { title: "صفحه اصلی", link: "/" },
    { title: "درباره ما", link: "/about-us" },
    { title: "تیکت ها", link: "/tickets" },
  ];

  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-between	rounded-lg bg-purple-50 mt-2 mr-3 shadow-2xl ml-2 text-center">
        <div className="w-full md:w-80">
          <ul>
            <li className="text-purple-900 font-bold mb-2 pt-2">
              سیمکارت بازار
            </li>
            {userNavbarItems.map((item, index) => (
              <li key={index} className="mt-1 text-purple-700">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 w-full md:w-auto md:ml-4 md:mt-4">
          <ul>
            <li className="flex	justify-center md:justify-start ">
              <Location />
              <p className="text-purple-700">شیراز,شهرک گلستان,املاک ۶۶</p>
            </li>
            <li className="flex	justify-center mt-2 mr-1 md:justify-start md:mt-5">
              <Calendar />
              <p className="mr-1 text-purple-700">
                شنبه تا چهارشنبه از ساعت ۹ الی ۱۸ عصر و پنج‌شنبه‌ها ساعت ۹ الی
                ۱۳ ظهر
              </p>
            </li>
            <li className="flex	justify-center mt-2 mr-1 md:justify-start md:mt-5">
              <Phone />
              <p className="mr-1 text-purple-700">
                0713-66066 <span className="ml-2 mr-2 ">|</span> 0713-6674006666
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
