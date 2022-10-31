import { FC } from "react";
import { Operators } from "../../constants/operator";
import { preCodes } from "../../constants/preCodes";
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
  setPreCode,
  setLimit,
  searchButton,
}) => {
  return (
    <section>
      <div className="max-w-3xl md:mx-auto shadow-2xl bakhmedium bg-gray-700 rounded-md text-white bakhMedium">
        <div className="flex flex-wrap">
          {/* precode */}
          <div className="flex w-full md:basis-1/3">
            <label htmlFor="precode" className="text-md my-3 mx-3 w-1/3">
              کد:
            </label>

            <select
              id="precode"
              className=" border border-gray-300 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 p-1.5 my-2 mx-2
            dark:bg-gray-700 w-full
            dark:border-gray-600  
           dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900"
              onChange={(e) => setPreCode(e.target.value)}
            >
              <option value="">فرقی نمیکند</option>
              {preCodes.map((precode) => (
                <option key={precode.id} value={precode.title}>
                  {precode.title}
                </option>
              ))}
            </select>
          </div>

          {/* operator */}
          <div className="flex w-full md:basis-1/3">
            <label htmlFor="operator" className="text-md my-3 mx-3 w-1/3">
              اپراتور:
            </label>

            <select
              id="operator"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg
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
          <div className="flex w-full md:basis-1/3">
            <label htmlFor="simType" className="text-md my-3 mx-3 w-1/3">
              نوع:
            </label>

            <select
              id="simType"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg
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
          <div className="flex w-full md:basis-1/3">
            <label
              htmlFor="status"
              className="text-md mt-4 mr-2 ml-3 md:ml-1 w-1/3"
            >
              وضعیت:
            </label>

            <select
              id="status"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 p-1.5 my-3 mx-2
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
          <div className="flex w-full md:basis-1/3">
            <label
              htmlFor="rondType"
              className="text-md mt-4 mr-2 ml-3 flex w-1/3"
            >
              <p className="ml-1"> رند</p> <p>نوع:</p>
            </label>

            <select
              id="rondType"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 p-1.5 my-3 mx-2
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

          {/* تعداد */}
          <div className="flex w-full my-2 md:basis-1/3 ">
            <label className="text-md mt-2 mr-2 ml-3 w-1/3">تعداد: </label>
            <select
              className="bg-gray-50 border border-gray-300 text-sm rounded-md 
            focus:ring-blue-500 focus:border-blue-500 mb-2 pt-1
            w-full mx-2
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

          {/* price From*/}
          <div className="flex w-full my-2 md:basis-1/3">
            <label htmlFor="from" className="text-md mt-2 mr-2 ml-3 flex w-1/3">
              <p>قیمت</p>
              <p>از </p> <p>:</p>
            </label>
            <input
              id="from"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2 
                focus:ring-blue-500 focus:border-blue-500 w-full mx-2 md:h-10
                 dark:bg-gray-700 dark:text-white text-center"
              placeholder="به تومان"
              onChange={(e) => setFromPrice(e.target.value)}
            />
          </div>

          {/* price To */}
          <div className="flex w-full my-2 md:basis-1/3">
            <label
              htmlFor="from"
              className="text-md mt-2 mr-2 ml-3 flex w-1/3 md:w-[95px]"
            >
              <p>قیمت تا</p>
              <p>:</p>
            </label>
            <input
              id="from"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2 
              focus:ring-blue-500 focus:border-blue-500 w-full md:h-10 mx-2 md:mx-0
              dark:bg-gray-700 dark:text-white text-center"
              placeholder="به تومان"
              onChange={(e) => setToPrice(e.target.value)}
            />
          </div>

          {/* search button */}
          <div className="md:w-1/3 w-full text-left mx-2 md:mx-0">
            <button
              className="bg-test2 rounded-lg md:w-2/3 ml-2 w-full mt-2
              dark:bg-gray-700 h-10 hover:bg-white dark:hover:bg-white
              hover:text-purple-700 hover:border-2 hover:border-purple-700  my-2"
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
