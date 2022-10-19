import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IranProvince } from "../../constants/province";
import instance from "../../axios-config";

const Address: FC<any> = ({ simId }) => {
  const schema = yup.object().shape({
    text: yup.string().required("وارد کردن آدرس الزامی می باشد"),
    province: yup.string().required("وارد کردن استان الزامی می باشد"),
    city: yup.string().required("وارد کردن شهر الزامی می باشد"),
  });
  const { register, handleSubmit, formState }: any = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const onSubmit = async (data: any) => {
    try {
      const result = await instance.post("/user/order", {
        simcartId: simId,
        address: data,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="bakhMedium my-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex">
            <div className="w-1/2 mx-3">
              <label htmlFor="province">استان</label>
              <select
                id="province"
                className={`bg-gray-50 border border-gray-300 text-md rounded-lg
           focus:ring-blue-500 focus:border-blue-500 p-1.5
            dark:bg-gray-700 w-full
            dark:border-gray-600  
           dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900
            ${errors.province ? "border-red-400" : ""}
            `}
                {...register("province")}
              >
                <option value="">انتخاب کنید</option>
                {IranProvince.map((province) => (
                  <option key={province.id} value={province.title}>
                    {province.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-1/2 mx-3">
              <label htmlFor="city">شهر</label>
              <input
                type="text"
                className={`bg-gray-50 border border-gray-300 text-md rounded-lg
           focus:ring-blue-500 focus:border-blue-500 p-1.5
            dark:bg-gray-700 w-full
            dark:border-gray-600  
           dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900 outline-none
            ${errors.city ? "border-red-400" : ""}
            `}
                {...register("city")}
              />
            </div>
          </div>

          <div className="mx-3 my-4">
            <label
              htmlFor="address"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-900"
            >
              آدرس دقیق شما:
            </label>
            <textarea
              id="address"
              rows={4}
              className={`block p-2.5 focus:outline-none w-full
                 text-sm text-gray-900 bg-gray-50 rounded-lg
                  border border-gray-300 focus:ring-blue-500
                   focus:border-blue-500 dark:bg-gray-700
                   dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                  ${errors.text ? "border-red-400" : ""}
                  `}
              placeholder="آدرس دقیق محل ارسال را وارد کنید..."
              {...register("text")}
            ></textarea>
            <div className="error">{errors.text?.message}</div>
            <div className="error">{errors.province?.message}</div>
            <div className="error">{errors.city?.message}</div>
          </div>

          <div className="md:h-3"></div>
          <div className="text-left">
            <button
              className="bg-primary hover:bg-purple-800
            rounded-md py-2 px-2 text-white font-bold 
            mx-3 mb-2"
            >
              ثبت سفارش و پرداخت
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Address;
