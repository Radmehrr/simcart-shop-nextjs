import Link from "next/link";
import { FC } from "react";
import Details from "./details";
import ItemHeader from "./item-header";

const SimItem: FC<any> = ({ simcart }) => {
  return (
    <section>
      <div className="max-w-5xl md:mx-auto rounded-lg shadow-2xl bg-white mx-2 bakhMedium">
        <ItemHeader phone={simcart.phoneNumber} category={simcart.category} />
        <Details simcart={simcart} />
        <div className="text-left text-white font-bold h-16 ">
          <Link
            href={{
              pathname: "/order",
              query: {
                id: simcart._id,
              },
            }}
          >
            <a className="bg-purple-500 rounded-md my-4 mx-2 px-3 py-3 hover:bg-purple-600">
              تایید و سفارش سیمکارت
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SimItem;
