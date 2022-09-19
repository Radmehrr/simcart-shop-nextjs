import { FC } from "react";

const Section: FC<any> = ({ sec, setSection }) => {
  return (
    <div className="flex justify-center w-full">
      <div
        onClick={(e) => setSection("مالی")}
        className="flex md:w-1/3 w-full
         items-center mx-5 pl-4 rounded 
         border border-gray-200 dark:border-gray-700"
      >
        <input
          id="bordered-radio-1"
          type="radio"
          value={sec}
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 mr-2 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-purple-700 dark:ring-offset-red-800 focus:ring-2
           dark:bg-purple-700 dark:border-purple-600
           
           "
          onClick={(e) => setSection("مالی")}
        />
        <label
          htmlFor="bordered-radio-1"
          className="py-4 ml-2 w-full px-2 mt-1 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
          مالی
        </label>
      </div>
      <div
        onClick={(e) => setSection("فنی")}
        className="flex md:w-1/3 w-full items-center pl-4 rounded border border-gray-200 dark:border-gray-700"
      >
        <input
          id="bordered-radio-2"
          type="radio"
          value={sec}
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 mr-2 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:purple-purple-700 dark:ring-offset-purple-800 focus:ring-2 dark:bg-purple-700 dark:border-purple-700"
          onClick={(e) => setSection("فنی")}
        />
        <label
          htmlFor="bordered-radio-2"
          className="py-4 ml-2 w-full px-2 text-sm font-medium text-gray-900 dark:text-gray-900"
        >
          فنی
        </label>
      </div>
    </div>
  );
};

export default Section;
