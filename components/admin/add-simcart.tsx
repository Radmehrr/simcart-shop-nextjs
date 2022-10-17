import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Operators } from "../../constants/operator";
import { RondType } from "../../constants/rond-type";
import { SimStatus } from "../../constants/sim-status";
import { SimType } from "../../constants/sim-type";
import instance from "../../axios-config";

const AddSimcart = () => {
  const schema = yup.object().shape({
    phoneNumber: yup
      .string()
      .required("وارد کردن شماره سیمکارت الزامی می باشد"),
    category: yup.string().required("وارد کردن اپراتور الزامی می باشد"),
    status: yup.string().required("وارد کردن وضعیت الزامی می باشد"),
    type: yup.string().required("وارد کردن نوع سیمکارت الزامی می باشد"),
    rondType: yup.string().required("وارد کردن نوع رند الزامی می باشد"),
    price: yup.string().required("وارد کردن قیمت الزامی می باشد"),
  });

  const { register, handleSubmit, formState }: any = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const onSubmit = async (data: any) => {
    try {
      const res = await instance.post("/admin/simcart", {
        ...data,
        title: "توضیحات نمیدونم هرچی",
      });

      toast.success("سیمکارت با موفقیت ثبت شد.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error: any) {
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(error);
    }
  };

  return (
    <section>
      <ToastContainer />
      <div className="bg-white max-w-5xl md:mx-auto px-4 py-5 md:px-12 rounded-lg shadow-2xl mx-2">
        <div className="dark:text-gray-900">
          <p>اضافه کردن سیمکارت</p>
        </div>

        <div className="flex mt-4">
          <div className="w-[32%] flex flex-col space-y-6 md:space-y-6 mt-3 dark:text-gray-900">
            <p>شماره سیمکارت:</p>
            <p>اپراتور:</p>
            <p>وضعیت:</p>
            <p>نوع سیمکارت:</p>
            <p>نوع رند:</p>
            <p>قیمت:</p>
          </div>
          <div className="w-[68%] ">
            <form
              className="flex flex-col space-y-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <input
                  type="text"
                  id="simcartNumber"
                  className="bg-gray-100 border-1 border-red-400 rounded
                    text-gray-700 focus:outline-none transition duration-500 w-full
                    py-2 px-2
                    dark:bg-gray-700
                    dark:text-white text-left"
                  {...register("phoneNumber")}
                />
              </div>

              <div>
                <select
                  id="operator"
                  className="bg-gray-50 border border-gray-300 text-md rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 p-1.5
                        dark:bg-gray-700 w-full
                        dark:border-gray-600  
                        dark:placeholder-gray-400 dark:text-white
                        dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900
                        "
                  {...register("category")}
                >
                  <option value="">انتخاب کنید</option>
                  {Operators.map((operator) => (
                    <option key={operator.name} value={operator.title}>
                      {operator.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  id="status"
                  className="bg-gray-50 border border-gray-300 text-md rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 p-1.5
                        dark:bg-gray-700 w-full
                        dark:border-gray-600  
                        dark:placeholder-gray-400 dark:text-white
                        dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900"
                  {...register("status")}
                >
                  <option value="">انتخاب کنید</option>
                  {SimStatus.map((status) => (
                    <option key={status.name} value={status.title}>
                      {status.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  id="type"
                  className="bg-gray-50 border border-gray-300 text-md rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 p-1.5
                        dark:bg-gray-700 w-full
                        dark:border-gray-600  
                        dark:placeholder-gray-400 dark:text-white
                        dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900"
                  {...register("type")}
                >
                  <option value="">انتخاب کنید</option>
                  {SimType.map((type) => (
                    <option key={type.name} value={type.title}>
                      {type.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <select
                  id="rond"
                  className="bg-gray-50 border border-gray-300 text-md rounded-lg
                        focus:ring-blue-500 focus:border-blue-500 p-1.5
                        dark:bg-gray-700 w-full
                        dark:border-gray-600  
                        dark:placeholder-gray-400 dark:text-white
                        dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900"
                  {...register("rondType")}
                >
                  <option value="">انتخاب کنید</option>
                  {RondType.map((rond) => (
                    <option key={rond.name} value={rond.title}>
                      {rond.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <input
                  type="text"
                  id="price"
                  className="bg-gray-100 border-1 border-red-400 rounded
                    text-gray-700 focus:outline-none transition duration-500 w-full
                    py-2 px-2 mb-2 md:mb-4 dark:bg-gray-700 dark:text-white text-left"
                  {...register("price")}
                />
              </div>

              <button
                className="bg-primary hover:bg-primaryDark text-white font-bold py-2
                rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
              >
                ثبت سیمکارت
              </button>
            </form>
            <div className="error">{errors.phoneNumber?.message}</div>
            <div className="error">{errors.category?.message}</div>
            <div className="error">{errors.status?.message}</div>
            <div className="error">{errors.type?.message}</div>
            <div className="error">{errors.rondType?.message}</div>
            <div className="error">{errors.price?.message}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddSimcart;
