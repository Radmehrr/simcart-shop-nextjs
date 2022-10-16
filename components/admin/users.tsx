import { FC, useEffect, useState } from "react";
import instance from "../../axios-config";
import { appActions } from "../../stores/appSlice";
import Pagination from "../home/pagination";
import { useAppDispatch, useAppSelector } from "../hooks/hook";

const Users: FC<any> = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    (async () => {
      const res = await instance.get("/admin/users", {
        params: {
          ...(fullName && {
            fullName: fullName,
          }),
          ...(currentPage && {
            page: currentPage,
          }),
          limit,
        },
      });
      dispatch(appActions.addUsers(res.data));
    })();
  }, [currentPage, fullName]);

  return (
    <section>
      <div className="bg-white max-w-5xl md:mx-auto px-4 py-5 md:px-12 rounded-lg shadow-2xl mx-2 dark:text-gray-900">
        <div className="flex justify-between items-center">
          <p className="text-lg">کاربران</p>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900
          text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
          focus:outline-none
          p-2.5 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white
          dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-2 md:w-1/3"
            placeholder="جستچو نام خوانوادگی..."
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="w-full mt-4">
          <div className="mx-2">
            <table className="table-auto min-w-full mt-2">
              <thead className="bg-purple-500 border-b">
                <tr className="text-white">
                  <th
                    scope="col"
                    className="text-sm md:text-lg font-medium text-white min-w-full text-center py-1"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm md:text-lg font-medium text-white min-w-full text-center"
                  >
                    نام خانوادگی
                  </th>
                  <th
                    scope="col"
                    className="text-sm md:text-lg font-medium text-white min-w-full text-center"
                  >
                    شماره
                  </th>

                  <th
                    scope="col"
                    className="text-sm md:text-lg font-medium text-white min-w-full text-center"
                  >
                    رول
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: any, idx: number) => (
                  <tr
                    key={idx}
                    className="bg-white dark:bg-gray-700 text-center border-b
                     transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td className=" whitespace-nowrap text-sm font-medium text-gray-900 py-2 dark:text-white">
                      {idx + 1}
                    </td>
                    <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {user.phone}
                    </td>
                    <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {user.fullName}
                    </td>
                    <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {user.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            dataPerPage={users.length}
            limit={limit}
          />
        </div>
      </div>
    </section>
  );
};

export default Users;
