import { FC } from "react";
import { Operators } from "../../constants/operator";
import { SimType } from "../../constants/sim-type";
import { SimStatus } from "../../constants/sim-status";
import { RondType } from "../../constants/rond-type";

const FilterSimcart: FC<any> = ({
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
      <div className="ml-2 mr-2 bakhmedium bg-gray-500 rounded-md">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="pr-3 pt-2">
            <label htmlFor="operator" className="ml-2 text-white text-xl">
              اپراتور:{" "}
            </label>
            <select
              id="operator"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg md:w-44 md:mr-3
           focus:ring-blue-500 focus:border-blue-500 p-1.5 pt-2
            dark:bg-gray-700
            dark:border-gray-600 
           dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

          <div className="pr-3 pt-2">
            <label htmlFor="simType" className="ml-2 text-white text-xl -mr-2">
              نوع:{" "}
            </label>
            <select
              id="simType"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg md:mr-0
           focus:ring-blue-500 focus:border-blue-500 p-1.5 pt-2 pl-9 -mr-1 md:w-44 
            dark:bg-gray-700
            dark:border-gray-600 
           dark:placeholder-gray-400 dark:text-white
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

          <div className="pr-1 pt-3 flex">
            <label
              htmlFor="status"
              className="ml-2 text-white text-xl pt-2.5 md:pt-1 "
            >
              وضعیت:{" "}
            </label>
            <select
              id="status"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg -mr-1
           focus:ring-blue-500 focus:border-blue-500 p-1.5 mb-2  md:w-44 
            dark:bg-gray-700
            dark:border-gray-600 
           dark:placeholder-gray-400 dark:text-white 
            dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

          <div className="pr-1 pt-3 flex">
            <label
              htmlFor="rondType"
              className="ml-2 text-white text-xl md:pt-1"
            >
              نوع رند:{" "}
            </label>
            <select
              id="rondType"
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg
                       focus:ring-blue-500 focus:border-blue-500 mb-2 ml-2  md:w-44 
                        dark:bg-gray-700
                        dark:border-gray-600 
                       dark:placeholder-gray-400 dark:text-white
                      dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setRondType(e.target.value)}
            >
              <option value="">فرقی نمیکند</option>
              {RondType.map((type) => (
                <option key={type.name} value={type.title}>
                  {type.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap text-white text-xl">
          <div className="flex mb-2 mr-2 md:w-1/4">
            <label htmlFor="from" className="ml-5 md:mt-2">
              قیمت از :
            </label>
            <input
              id="from"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2 
                focus:ring-blue-500 focus:border-blue-500 -mr-2 w-[200px] md:w-[170px] h-10  dark:bg-gray-700 dark:text-white"
              onChange={(e) => setFromPrice(e.target.value)}
            />
            <label className="mr-2 mt-1 md:mt-2">تومان</label>
          </div>

          <div className="flex mb-2 mr-[52px] md:mr-0">
            <label htmlFor="from" className="ml-5 mt-1 md:mt-2">
              تا :
            </label>
            <input
              id="from"
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2
                focus:ring-blue-500 focus:border-blue-500 w-[200px] md:w-[178px] -mr-1 h-10 dark:bg-gray-700 dark:text-white"
              onChange={(e) => setToPrice(e.target.value)}
            />
            <label className="mr-2 mt-1 md:mt-2">تومان</label>
          </div>

          <div className="flex mb-2 mr-2 md:mr-16 md:mt-2">
            <label className="md:ml-2 md:mt-1">تعداد: </label>
            <select
              className="bg-gray-50 border border-gray-300 text-sm rounded-lg
            focus:ring-blue-500 focus:border-blue-500 mb-2 md:w-44 w-[60px] mr-5 pt-1 
             dark:bg-gray-700 
             dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white
           dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900"
              onChange={(e) => setLimit(e.target.value)}
            >
              <option value="">انتخاب کنید</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="50">100</option>
            </select>
          </div>

          <div className="flex mb-2 mr-2 md:mr-16 md:mt-2 md:w-1/4 w-[200px] justify-center">
            <button
              className="bg-purple-700 rounded-lg w-full md:w-[180px] md:mr-5 dark:bg-gray-700 h-10 hover:bg-white dark:hover:bg-white hover:text-purple-700 hover:border-2 hover:border-purple-700"
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

export default FilterSimcart;
