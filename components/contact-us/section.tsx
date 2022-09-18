const Section = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex md:w-1/3 w-full items-center mx-5 pl-4 rounded border border-gray-200 dark:border-gray-700">
        <input
          id="bordered-radio-1"
          type="radio"
          value=""
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 mr-2 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="bordered-radio-1"
          className="py-4 ml-2 w-full px-2 mt-1 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          مالی
        </label>
      </div>
      <div className="flex md:w-1/3 w-full items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
        <input
          id="bordered-radio-2"
          type="radio"
          value=""
          name="bordered-radio"
          className="w-4 h-4 text-blue-600 mr-2 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="bordered-radio-2"
          className="py-4 ml-2 w-full px-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          فنی
        </label>
      </div>
    </div>
  );
};

export default Section;
