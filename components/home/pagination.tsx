import { FC } from "react";
import ArrowLeft from "../svg/next";
import ArrowRight from "../svg/previous";

const Pagination: FC<any> = ({
  currentPage,
  setCurrentPage,
  simcartPerPage,
  limit,
}) => {
  return (
    <div className="flex justify-center my-2">
      <button
        className="inline-flex
        items-center py-2 px-4 mr-3 ml-2 text-sm font-medium text-gray-500 bg-white rounded-lg
        border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800
        dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        <ArrowLeft />
        قبلی
      </button>
      <button
        className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={limit > simcartPerPage}
      >
        بعدی
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
