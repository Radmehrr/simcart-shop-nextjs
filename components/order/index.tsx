import { FC } from "react";

import Address from "./address";
import OrderDetails from "./order-details";

const OrderSim: FC<any> = ({ simcart }) => {
  return (
    <section>
      <div className="max-w-5xl md:mx-auto rounded-lg shadow-2xl bg-white mx-2 bakhMedium">
        <div>
          <OrderDetails simcart={simcart} />
        </div>

        <div>
          <Address simId={simcart._id} />
        </div>
      </div>
    </section>
  );
};

export default OrderSim;
