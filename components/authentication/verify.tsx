import Image from "next/image";
import instance from "../../axios-config";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import OtpInput from "react-otp-input";
import { useState } from "react";
const Verify = ({ phoneNumber }: any) => {
  const router = useRouter();
  const [otpValue, setOtpValue] = useState("");

  const handleChange = (otp: any) => {
    setOtpValue(otp);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    instance
      .post("/user/auth/verify-signUp", {
        phone: phoneNumber,
        code: otpValue,
      })
      .then((res: any) => {
        Cookies.set("accessToken", res.data.accessToken, {
          expires: 1,
        });
        Cookies.remove("phoneNumber");
        router.push("/");
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  return (
    <div className="bakhMedium">
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 mt-2 rounded-lg shadow-2xl">
        <section className="text-center">
          <Image
            src="/img/logos/SimcartBazarOnlyElementLogo.png"
            width={40}
            height={45}
          />
          <p className="text-transparent font-extrabold pt-2 bg-clip-text bg-gradient-to-l from-purple-800 to-red-700 selection:bg-purple-500 selection:text-white">
            اعتبار سنجی شماره تلفن
          </p>
        </section>
        <div className="text-black selection:bg-purple-500 selection:text-white">
          لطفا کد ارسال شده به شماره {phoneNumber} را جهت اعتبار سنجی وارد کنید.
        </div>
        <section className="mt-10">
          <form className="flex flex-col text-black">
            <OtpInput
              isInputNum
              shouldAutoFocus
              focusStyle="outline outline-primary"
              inputStyle="border border-primary rounded-md dark:bg-white dark:text-primary"
              containerStyle="otpContainer"
              value={otpValue}
              onChange={handleChange}
              numInputs={6}
              separator={<span>-</span>}
            />
            <button
              type="submit"
              onClick={(e: any) => submitHandler(e)}
              className={`${
                otpValue.length === 6
                  ? "bg-primary hover:bg-primaryDark"
                  : "bg-gray-400"
              } mt-6 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200 disabled:cursor-not-allowed`}
              disabled={otpValue.length !== 6}
            >
              نهایی کردن ثبت نام
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Verify;
