import { FC } from "react";
import { Operators } from "../../constants/operator";
import { RondType } from "../../constants/rond-type";
import { SimStatus } from "../../constants/sim-status";
import { SimType } from "../../constants/sim-type";

const Filters: FC<any> = ({
  setOperator,
  setSimType,
  setStatus,
  setRondType,
  setFromPrice,
  setToPrice,
  setLimit,
  searchButton,
}) => {
  return (
    <section>
      <div className="ml-2 mr-2 bakhmedium bg-gray-500 rounded-md text-white">
        <div className="flex flex-wrap">
          {/* operator */}
          <div className="flex w-full md:basis-1/3 lg:basis-[24.50%]">
            <label htmlFor="operator" className="text-xl my-3 mx-2">
              اپراتور:
            </label>

            <select
              id="operator"
              className="bg-gray-50 border border-gray-300 text-md rounded-lg
           focus:ring-blue-500 focus:border-blue-500 p-1.5 my-2 mx-2
            dark:bg-gray-700 w-full
            dark:border-gray-600  
           dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900"
              onChange={(e) => setOperator(e.target.value)}
            >
              <option value="">فرقی نمیکند</option>
              {Operators.map((operator) => (
                <option key={operator.name} value={operator.title}>
                  {operator.title}
                </option>
              ))}
            </select>
          </div>

          {/* sim type */}
          <div className="flex w-full md:basis-1/3 lg:basis-[24.50%]">
            <label htmlFor="simType" className="text-xl my-3 mx-4 md:mx-2">
              نوع:
            </label>

            <select
              id="simType"
              className="bg-gray-50 border border-gray-300 text-md rounded-lg
           focus:ring-blue-500 focus:border-blue-500 p-1.5 my-2 mx-2
            dark:bg-gray-700 w-full
            dark:border-gray-600  
           dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900"
              onChange={(e) => setSimType(e.target.value)}
            >
              <option value="">فرقی نمیکند</option>
              {SimType.map((type) => (
                <option key={type.name} value={type.title}>
                  {type.title}
                </option>
              ))}
            </select>
          </div>

          {/* sim status */}
          <div className="flex w-full md:basis-1/3 lg:basis-[24.50%]">
            <label htmlFor="status" className="text-xl my-3 mr-2">
              وضعیت:
            </label>

            <select
              id="status"
              className="bg-gray-50 border border-gray-300 text-md rounded-lg
           focus:ring-blue-500 focus:border-blue-500 p-1.5 my-2 mx-2
            dark:bg-gray-700 w-full
            dark:border-gray-600  
           dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">فرقی نمیکند</option>
              {SimStatus.map((status) => (
                <option key={status.name} value={status.title}>
                  {status.title}
                </option>
              ))}
            </select>
          </div>

          {/* sim rondType */}
          <div className="flex w-full md:basis-1/3 lg:basis-[24.50%]">
            <label htmlFor="rondType" className="text-xl my-3 mr-2 flex">
              <p className="ml-1"> رند</p> <p>نوع:</p>
            </label>

            <select
              id="rondType"
              className="bg-gray-50 border border-gray-300 text-md rounded-lg
           focus:ring-blue-500 focus:border-blue-500 p-1.5 my-2 mx-2
            dark:bg-gray-700 w-full
            dark:border-gray-600  
           dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900"
              onChange={(e) => setRondType(e.target.value)}
            >
              <option value="">فرقی نمیکند</option>
              {RondType.map((rond) => (
                <option key={rond.name} value={rond.title}>
                  {rond.title}
                </option>
              ))}
            </select>
          </div>

          {/* price From*/}
          <div className="flex w-full my-2 md:basis-1/3 lg:basis-[24.50%]">
            <label htmlFor="from" className="text-xl mt-1 mr-2 flex">
              <p>قیمت</p>
              <p>از </p> <p>:</p>
            </label>
            <input
              id="from"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2 
                focus:ring-blue-500 focus:border-blue-500 w-full mx-2
                 dark:bg-gray-700 dark:text-white text-center"
              placeholder="به تومان"
              onChange={(e) => setFromPrice(e.target.value)}
            />
          </div>

          {/* price To */}
          <div className="flex w-full my-2 md:basis-1/3 lg:basis-[24.50%]">
            <label htmlFor="from" className="text-xl mt-2 mr-2 flex">
              <p>تا</p>
              <p>:</p>
            </label>
            <input
              id="from"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2 
                focus:ring-blue-500 focus:border-blue-500
                ml-2 mr-10 w-full
                 dark:bg-gray-700 dark:text-white text-center"
              placeholder="به تومان"
              onChange={(e) => setToPrice(e.target.value)}
            />
          </div>

          <div className="flex w-full my-2 md:basis-1/3 lg:basis-[24.50%]">
            <label className="text-xl mt-2 mr-2 md:ml-3">تعداد: </label>
            <select
              className="bg-gray-50 border border-gray-300 text-sm rounded-md 
            focus:ring-blue-500 focus:border-blue-500 mb-2 pt-1
            w-full mx-4 
             dark:bg-gray-700 
             dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white h-10
           dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900"
              onChange={(e) => setLimit(e.target.value)}
            >
              <option value="10">انتخاب کنید</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>

          {/* search button */}
          <div className="flex mx-2 mb-2 md:mt-2 w-full md:basis-1/3 lg:basis-[24.50%]">
            <button
              className="bg-purple-700 rounded-lg w-full md:w-3/4 md:mr-11 lg:mr-16 dark:bg-gray-700 h-10 hover:bg-white dark:hover:bg-white hover:text-purple-700 hover:border-2 hover:border-purple-700"
              onClick={searchButton}
            >
              جستجو
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
// for new commt
