import { FC } from "react";
import AllMyOrders from "./allMyOrders";

const MyOrders: FC<any> = ({ orders }) => {
  return (
    <section>
      <div className="bg-white max-w-5xl md:mx-auto px-4 py-5 md:px-12 rounded-lg shadow-2xl mx-2">
        <div>
          <p className="text-gray-900 dark:text-gray-900 mx-2">
            سفارش های اخیر
          </p>
        </div>

        <div>
          <AllMyOrders orders={orders} />
        </div>
      </div>
    </section>
  );
};

export default MyOrders;
