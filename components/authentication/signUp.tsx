import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";
import Image from "next/image";
import * as yup from "yup";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import instance from "../../axios-config";
const SignUp = () => {
  const router = useRouter();
  const schema = yup.object().shape({
    fullName: yup.string().required("وارد کردن نام الزامی می باشد"),
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
      .post("/user/auth/signUp", data)
      .then((res: any) => {
        console.log(res);
        Cookies.set("phoneNumber", res.data.phone);
        router.push("/verify");
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
          <p className="text-primary font-extrabold pt-2">
            ثبت نام در سیم کارت بازار
          </p>
        </section>

        <section className="mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className=" pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mr-3 "
                htmlFor="fullName"
              >
                نام و نام خانوادگی
              </label>
              <input
                {...register("fullName")}
                type="text"
                id="fullName"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-primary transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="error">{errors.fullName?.message}</div>
            <div className="mt-3 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mr-3 "
                htmlFor="phone"
              >
                شماره تلفن
              </label>
              <input
                {...register("phone")}
                type="tel"
                id="phone"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-primary transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="error">{errors.phone?.message}</div>
            <div className="mt-3 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mr-3"
                htmlFor="password"
              >
                رمز ورود
              </label>
              <input
                {...register("password")}
                type="password"
                id="password"
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-primary transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="error">{errors.password?.message}</div>
            <button
              className="mt-5 bg-primary hover:bg-primaryDark text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
            >
              تایید
            </button>
          </form>
        </section>
      </main>

      <div className="max-w-lg mx-auto text-center mt-6">
        <p className="dark:text-white">
          آیا قبلا در سیم کارت بازار ثبت نام کرده اید؟
          <Link href="/login">
            <a className="mr-2 font-bold hover:underline text-primary">
              وارد شوید
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
