import { FC } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import numeral from "numeral";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import RedTrash from "../svg/red-trash";
import instance from "../../axios-config";
import { appActions } from "../../stores/appSlice";

const Simcarts: FC<any> = () => {
  const dispatch = useAppDispatch();

  const simcarts = useAppSelector((state) => state.mySimcarts);
  if (!simcarts.length) {
    return (
      <div className="text-center my-4">
        <p className="pb-5"> هنوز هیچ سیمکارتی ثبت نکرده اید!</p>
      </div>
    );
  }

  const deleteSimcart = async (simcartId: any) => {
    try {
      const res = await instance.delete(
        `/user/simcart/my-simcarts/delete/${simcartId}`
      );

      let mySimcarts = simcarts.filter((simcart) => simcart._id !== simcartId);
      dispatch(appActions.addMySimcarts(mySimcarts));
      toast.success("سیمکارت با موفقیت حذف شد.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section>
      <ToastContainer />
      <div className="mx-2">
        <table className="table-auto min-w-full mt-2">
          <thead className="bg-test2 border-b">
            <tr className="text-white">
              <th
                scope="col"
                className="text-sm hidden sm:block font-medium text-white min-w-full text-center py-2"
              >
                ردیف
              </th>
              <th
                scope="col"
                className="text-sm md:text-sm font-medium text-white min-w-full text-center"
              >
                شماره
              </th>
              <th
                scope="col"
                className="text-sm  font-medium text-white min-w-full text-center"
              >
                قیمت
              </th>
              <th
                scope="col"
                className="text-sm hidden sm:block  font-medium text-white min-w-full text-center"
              >
                اپراتور
              </th>
              <th
                scope="col"
                className="text-sm  font-medium text-white min-w-full text-center"
              >
                وضعیت
              </th>
              <th
                scope="col"
                className="text-sm  font-medium text-white min-w-full text-center"
              >
                نوع
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white min-w-full text-center"
              >
                نوع رند
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-white min-w-full text-center"
              ></th>
            </tr>
          </thead>
          <tbody>
            {simcarts?.map((sim: any, idx: number) => (
              <tr
                key={sim._id}
                className="bg-white dark:bg-gray-700 text-center border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td className=" whitespace-nowrap hidden sm:block text-sm font-medium text-gray-900 py-2 dark:text-white">
                  {idx + 1}
                </td>
                <td
                  style={{ direction: "ltr" }}
                  className="whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white"
                >
                  {sim.phoneNumber}
                </td>
                <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {numeral(sim.price).format("000,000")} ت
                </td>
                <td className=" whitespace-nowrap hidden sm:block text-sm font-medium text-gray-900 dark:text-white">
                  {sim.category}
                </td>
                <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {sim.status}
                </td>
                <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {sim.type}
                </td>
                <td className=" whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  {sim.rondType}
                </td>

                <td className="whitespace-nowrap text-sm font-medium dark:text-white">
                  <button onClick={() => deleteSimcart(sim._id)}>
                    <RedTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Simcarts;
