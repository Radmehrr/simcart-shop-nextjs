import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import instance from "../../axios-config";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import OtpInput from "react-otp-input";
import { useState } from "react";
const Verify = () => {
  const router = useRouter();
  const [otpValue, setOtpValue] = useState("");
  const handleChange = (otp: any) => {
    console.log(otp);
    setOtpValue(otp);
  };
  const schema = yup.object().shape({
    phone: yup.string().required("وارد کردن شماره تلفن الزامی می باشد"),
    password: yup.string().required("وارد کردن رمز ورود الزامی می باشد"),
  });
  const { register, handleSubmit, formState }: any = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;
  const onSubmit = (data: any) => {
    console.log(data);
    instance
      .post("/user/auth/login", data)
      .then((res: any) => {
        console.log(res);
        Cookies.set("accessToken", res.data.accessToken, {
          expires: 1,
        });
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
          <p className="text-transparent font-extrabold pt-2 bg-clip-text bg-gradient-to-l from-purple-800 to-red-700">
            اعتبار سنجی شماره تلفن
          </p>
        </section>

        <section className="mt-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col text-black"
          >
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
            <div className="mt-5 flex justify-start">
              <a
                href="#"
                className="text-sm text-primary hover:text-primaryDark hover:underline mb-3"
              >
                اطلاعات خود را اشتباه وارد کرده اید؟
              </a>
            </div>
            <button
              className={`${
                otpValue.length === 6
                  ? "bg-primary hover:bg-primaryDark"
                  : "bg-gray-400"
              } text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200`}
              type="submit"
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
