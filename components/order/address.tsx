import { FC } from "react";

const Address: FC<any> = ({ addressText, setAddressText }) => {
  return (
    <section>
      <div className="bakhMedium my-4">
        <div className="flex">
          <div className="w-1/2 mx-3">
            <label htmlFor="province">استان</label>
            <select
              id="province"
              className="bg-gray-50 border border-gray-300 text-md rounded-lg
           focus:ring-blue-500 focus:border-blue-500 p-1.5
            dark:bg-gray-700 w-full
            dark:border-gray-600  
           dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900"
            >
              <option value="">asd</option>
            </select>
          </div>

          <div className="w-1/2 mx-3">
            <label htmlFor="city">شهر</label>
            <select
              id="city"
              className="bg-gray-50 border border-gray-300 text-md rounded-lg
           focus:ring-blue-500 focus:border-blue-500 p-1.5
            dark:bg-gray-700 w-full
            dark:border-gray-600  
           dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900"
            >
              <option value="">asd</option>
            </select>
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
            value={addressText}
            rows={4}
            className="block p-2.5 focus:outline-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="آدرس دقیق محل ارسال را وارد کنید..."
            required
            onChange={(e) => setAddressText(e.target.value)}
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default Address;
