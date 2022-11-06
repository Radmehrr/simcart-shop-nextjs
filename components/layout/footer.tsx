import Image from "next/image";
import Lottie from "react-lottie";
import Location from "../svg/location";
import Phone from "../svg/phone";
import telegram from "./../../public/lottie/telegram.json";
import instagram from "./../../public/lottie/instagram.json";

const Footer = () => {
  const telegramOptions = {
    loop: true,
    autoplay: true,
    animationData: telegram,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const instagramOptions = {
    loop: true,
    autoplay: true,
    animationData: instagram,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const ArrowLottieStyle = {
    width: 40,
    height: 40,
    backgroundColor: "transparent",
  };

  return (
    <footer>
      <div className="rounded-lg bg-purple-50 mt-2 mr-3 shadow-2xl ml-2">
        <div className="flex flex-col md:flex-row justify-between	text-center">
          <div className="mt-3">
            <Image
              src="/img/logos/simkartbazarlogo.png"
              width="200"
              height="200"
            />
          </div>
          <div className="w-full md:w-80 mb-4">
            <ul>
              <li className="text-purple-900 font-bold mb-2 pt-2">
                سیمکارت بازار
              </li>
              <div className="flex justify-center">
                <div>
                  <a
                    href="https://www.instagram.com/6arsi6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Lottie
                      options={instagramOptions}
                      style={ArrowLottieStyle}
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://t.me/arsalanseifi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Lottie
                      options={telegramOptions}
                      style={ArrowLottieStyle}
                    />
                  </a>
                </div>
              </div>
            </ul>
          </div>
          <div className="mt-6 w-full md:w-auto md:ml-4 md:mt-4">
            <ul>
              <li className="flex flex-col md:flex-row justify-center md:justify-start ">
                <div className="flex justify-center">
                  <Location />
                  <p className="text-gray-900">
                    شیراز, معالی آباد, نبش کوچه 5, طبقه دوم, ساختمان ایران
                  </p>
                </div>
              </li>
              <div className="flex justify-center md:justify-start my-2 md:mt-3">
                <Phone />
                <p className="mr-1 text-gray-900" style={{ direction: "ltr" }}>
                  0917 155 25 00 <span className="ml-2 mr-2 ">|</span>
                  0713-635 83 55
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
