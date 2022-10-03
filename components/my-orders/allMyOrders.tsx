import numeral from "numeral";
import { FC } from "react";

// {
//     _id: '633a9871490120b1a05ea9bb',
//     userId: '63060b5eec78d849b32d6084',
//     simcartId: '631dc34ffe10a6af0a21fbe6',
//     username: 'رادمهر زبانزد',
//     phone: '09172562637',
//     address: {
//       province: 'آذربایجان شرقی',
//       city: 'شیراز',
//       text: 'معالی آباد',
//       _id: '633a9871490120b1a05ea9bc'
//     },
//     price: 200000000,
//     status: 'جدید',
//     resnumber: null,
//     createdAt: 1663583756,
//     updatedAt: 1663583756,
//     __v: 0,
//     simcart: {
//       _id: '631dc34ffe10a6af0a21fbe6',
//       phoneNumber: '09194444444',
//       title: 'توضیحات نمیدونم هرچی',
//       price: 200000000,
//       category: 'همراه اول',
//       status: 'کار کرده',
//       type: 'دائمی',
//       rondType: 'رند ۷ رقم یکی',
//       createdAt: 1661839770,
//       updatedAt: 1661839770,
//       __v: 0
//     }
//   }

const AllMyOrders: FC<any> = ({ orders }) => {
  console.log(orders);
  return (
    <section>
      <div className="w-full">
        <div className="mx-2">
          <table className="table-auto min-w-full mt-2">
            <thead className="bg-purple-500 border-b">
              <tr className="text-white">
                <th
                  scope="col"
                  className="text-sm py-1 md:text-lg font-medium text-white min-w-full text-center"
                >
                  شماره سفارش
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
                  وضعیت
                </th>
                <th
                  scope="col"
                  className="text-sm md:text-lg font-medium text-white min-w-full text-center"
                >
                  شماره پیگیری خرید
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order: any, idx: number) => (
                <tr
                  key={idx}
                  className="bg-white cursor-pointer dark:bg-gray-700 text-center border-b transition duration-300 ease-in-out hover:bg-gray-100"
                >
                  <td className=" whitespace-nowrap py-2 px-2 text-sm font-medium text-gray-900 dark:text-white">
                    {order.createdAt}
                  </td>
                  <td className=" whitespace-nowrap py-2 px-2 text-sm font-medium text-gray-900 dark:text-white">
                    {numeral(order.price).format("000,000")}
                  </td>
                  <td className=" whitespace-nowrap py-2 px-2 text-sm font-medium text-green-700 dark:text-white">
                    {order.status}
                  </td>

                  <td className=" whitespace-nowrap py-2 px-2 text-sm font-medium text-gray-900 dark:text-white">
                    {order.resnumber ? (
                      order.resnumber
                    ) : (
                      <p className="text-red-600">پرداخت نشده</p>
                    )}
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

export default AllMyOrders;
