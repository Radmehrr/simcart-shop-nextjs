import Link from "next/link";
import { FC } from "react";
import { FromNow } from "../utils/moment";

const MyTickets: FC<any> = ({ tickets }) => {
  if (tickets.length == 0) {
    return (
      <div className="w-full text-center my-10">
        <p>هیچ تیکتی وجود ندارد</p>
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="mx-2">
        <table className="table-auto min-w-full mt-2">
          <thead className="bg-gray-100 border-b">
            <tr className="text-gray-700">
              <th
                scope="col"
                className="text-sm md:text-md font-medium text-gray-700 min-w-full text-center py-2"
              >
                #
              </th>
              <th
                scope="col"
                className="text-sm md:text-md font-medium text-gray-700 min-w-full text-center"
              >
                موضوع
              </th>
              <th
                scope="col"
                className="text-sm md:text-md font-medium text-gray-700 min-w-full text-center"
              >
                وضعیت
              </th>
              <th
                scope="col"
                className="text-sm md:text-md font-medium text-gray-700 min-w-full text-center"
              >
                بخش
              </th>
              <th
                scope="col"
                className="text-sm md:text-md font-medium text-gray-700 min-w-full text-center"
              >
                آخرین به‌روزرسانی
              </th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((tik: any, idx: number) => (
              <Link
                href={{
                  pathname: "/tickets/[id]",
                  query: {
                    id: tik._id,
                  },
                }}
                key={idx}
              >
                <tr className="bg-white cursor-pointer dark:bg-gray-700 text-center border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white py-3">
                    {`#${tik.createdAt}`}
                    {/* 1663583756 */}
                  </td>
                  <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {tik.subject}
                  </td>
                  <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {(() => {
                      switch (tik.status) {
                        case "در حال بررسی":
                          return (
                            <div className="flex justify-center">
                              <div className="h-2 w-2 mt-1 bg-orange-400 rounded-full ml-1"></div>
                              <p>{tik.status}</p>
                            </div>
                          );
                        case "پاسخ داده":
                          return (
                            <div className="flex justify-center">
                              <div className="h-2 w-2 mt-1 bg-green-400 rounded-full ml-1"></div>
                              <p>{tik.status}</p>
                            </div>
                          );
                        case "بسته":
                          return (
                            <div className="flex justify-center">
                              <div className="h-2 w-2 mt-1 bg-red-400 rounded-full ml-1"></div>
                              <p>{tik.status}</p>
                            </div>
                          );
                      }
                    })()}
                  </td>
                  <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {tik.section}
                  </td>
                  <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {FromNow(tik.updatedAt)}
                  </td>
                </tr>
              </Link>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTickets;
