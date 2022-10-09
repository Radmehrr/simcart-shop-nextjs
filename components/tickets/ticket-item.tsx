import React from "react";
import ItemHeader from "./item-header";

const TicketItem = () => {
  return (
    <section>
      <div className="max-w-5xl md:mx-auto rounded-lg shadow-2xl bg-white mx-2 bakhMedium">
        <ItemHeader />

        <div className="mx-4 my-5">
          <textarea
            id="message"
            rows={4}
            name="message"
            className="block p-2.5 focus:outline-none w-full
                 text-sm text-gray-900 bg-gray-50 rounded-lg
                  border border-gray-300 focus:ring-blue-500
                   focus:border-blue-500 dark:bg-gray-700
                   dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="متن پیام..."
            required
          ></textarea>
        </div>

        <div className="text-left mx-4">
          <button className="bg-blue-400 px-5 py-2 rounded-md text-white hover:bg-blue-600">
            ارسال پاسخ
          </button>
        </div>

        <div className="h-1 border-t border-gray-300 mx-4 mt-2"></div>
        <div className="h-1 border-t border-gray-300 mx-4 mt-2"></div>
      </div>
    </section>
  );
};

export default TicketItem;
