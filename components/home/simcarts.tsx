import { FC } from "react";
import numeral from "numeral";
import Loading from "../loading";

const Simcarts: FC<any> = ({ simcarts, loading }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <div className="w-full">
        <div className="mx-2">
          <table className="table-auto min-w-full mt-2">
            <thead className="bg-purple-500 border-b">
              <tr className="text-white">
                <th
                  scope="col"
                  className="text-sm md:text-lg font-medium text-white min-w-full text-center py-2"
                >
                  ردیف
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
                  قیمت
                </th>
                <th
                  scope="col"
                  className="text-sm md:text-lg font-medium text-white min-w-full text-center"
                >
                  اپراتور
                </th>
                <th
                  scope="col"
                  className="text-sm md:text-lg font-medium text-white min-w-full text-center"
                >
                  وضعیت
                </th>
                <th
                  scope="col"
                  className="text-sm md:text-lg font-medium text-white min-w-full text-center"
                >
                  نوع
                </th>
              </tr>
            </thead>
            <tbody>
              {simcarts.map((sim: any, idx: number) => (
                <tr className="bg-white dark:bg-gray-700 text-center border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className=" whitespace-nowrap text-sm font-medium text-gray-900 py-2 dark:text-white">
                    {idx + 1}
                  </td>
                  <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {sim.phoneNumber}
                  </td>
                  <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {numeral(sim.price).format("000,000")} ت
                  </td>
                  <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {sim.category}
                  </td>
                  <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {sim.status}
                  </td>
                  <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {sim.type}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Simcarts;
