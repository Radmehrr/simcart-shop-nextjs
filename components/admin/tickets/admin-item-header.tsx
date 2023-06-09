import React, { FC } from "react";
import { getDate } from "../../utils/moment";

const AdminItemHeader: FC<any> = ({ ticket }) => {
  const date = getDate(ticket.createdAt);
  return (
    <section>
      <div className="flex justify-between mx-5 py-4 text-lg dark:text-gray-900">
        <p>{ticket.subject}</p>
        <p className="text-green-600">{`#${ticket.createdAt}`}</p>
      </div>

      <div className="flex justify-between mx-5 text-gray-500">
        <p>{`ایجاد شده در ${date.dayName} ${date.day} ${date.month} (${date.hour}:${date.minutes})`}</p>
        {(() => {
          switch (ticket.status) {
            case "در حال بررسی":
              return (
                <div className="flex justify-center">
                  <div className="h-2 w-2 mt-2 bg-orange-400 rounded-full ml-1"></div>
                  <p>{ticket.status}</p>
                </div>
              );
            case "پاسخ داده":
              return (
                <div className="flex justify-center">
                  <div className="h-2 w-2 mt-2 bg-green-400 rounded-full ml-1"></div>
                  <p>{ticket.status}</p>
                </div>
              );
            case "بسته":
              return (
                <div className="flex justify-center">
                  <div className="h-2 w-2 mt-2 bg-red-400 rounded-full ml-1"></div>
                  <p>{ticket.status}</p>
                </div>
              );
          }
        })()}
      </div>
    </section>
  );
};

export default AdminItemHeader;
