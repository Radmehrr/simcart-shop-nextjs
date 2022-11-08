import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import instance from "../../axios-config";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { appActions } from "../../stores/appSlice";
import { useAppDispatch } from "../hooks/hook";

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const schema = yup.object().shape({
    phone: yup.string().required("وارد کردن شماره تلفن الزامی می باشد"),
    password: yup.string().required("وارد کردن رمز ورود الزامی می باشد"),
  });
  const { register, handleSubmit, formState }: any = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const onSubmit = async (data: any) => {
    try {
      const res = await instance.post("/user/auth/login", data);
      Cookies.set("accessToken", res.data.accessToken, {
        expires: 1,
      });
      toast.success("ورود موفقیت آمیز", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(appActions.login());
      router.push("/");
    } catch (e: any) {
      if (e.response.data.message == "Not Found") {
        toast.error("شماره موبایل یافت نشد", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else if (e.response.data.message == "رمزعبور اشتباه است.") {
        toast.error("رمزعبور اشتباه است.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      console.log(e);
    }
  };
  return (
    <div className="bakhMedium">
      <ToastContainer />
      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 rounded-lg shadow-2xl">
        <section className="text-center md:-mt-6">
          <Image
            src="/img/logos/logoIconSimKart.png"
            width={40}
            height={45}
            alt="image"
          />
          <p className="text-primary font-extrabold pt-2 selection:bg-purple-500 selection:text-white">
            ورود به حساب کاربری
          </p>
        </section>

        <section className="mt-5">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className="mt-3 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mr-3 selection:bg-purple-500 selection:text-white"
                htmlFor="phone"
              >
                شماره تلفن
              </label>
              <input
                type="text"
                id="phone"
                {...register("phone")}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-primary transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="error">{errors.phone?.message}</div>
            <div className="mt-3 pt-3 rounded bg-gray-200">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 mr-3
                selection:bg-purple-500 selection:text-white"
                htmlFor="password"
              >
                رمز ورود
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-primary transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="error">{errors.password?.message}</div>
            <div className="mt-5 flex justify-start">
              <a
                href="#"
                className="text-sm text-primary hover:text-primaryDark hover:underline mb-3"
              >
                رمز عبور خود را فراموش کرده اید؟
              </a>
            </div>
            <button
              className="bg-primary hover:bg-primaryDark text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              type="submit"
            >
              تایید و ورود
            </button>
          </form>
        </section>
      </main>

      <div className="max-w-lg mx-auto text-center mt-6">
        <p className="dark:text-white">
          آیا قبلا در سیم کارت بازار ثبت نام نکرده اید؟
          <Link href="/signUp">
            <a className="mr-2 font-bold hover:underline text-primary">
              ثبت نام کنید
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
