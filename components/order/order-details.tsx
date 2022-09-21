import Image from "next/image";
import numeral from "numeral";
import React, { FC } from "react";

const OrderDetails: FC<any> = ({ simcart }) => {
  return (
    <section>
      <div>
        <div className="w-full bakhMedium dark:text-gray-900">
          <p className="py-3 px-3">مشخصات سیم کارت</p>
        </div>

        <div className="flex h-70 mx-3 my-1 border-b-2 border-purple-500 pb-2">
          {(() => {
            switch (simcart.category) {
              case "همراه اول":
                return (
                  <div>
                    <Image src="/img/hamrah_aval.png" width={70} height={70} />
                  </div>
                );

              case "ایرانسل":
                return (
                  <div>
                    <Image src="/img/irancell.png" width={70} height={70} />
                  </div>
                );

              case "رایتل":
                return (
                  <div>
                    <Image src="/img/rightel.png" width={90} height={80} />
                  </div>
                );
            }
          })()}

          <p className="inline-block align-bottom my-auto mr-2 md:mx-20 dark:text-black">
            <span className="ml-1">شماره: </span>
            <span className="font-bold text-sm">{simcart.phoneNumber}</span>
          </p>

          <div className="flex items-center mx-2 my-2 gap-1 dark:text-gray-700">
            <p>قیمت: </p>
            <p className="text-green-600 font-bold">
              {numeral(simcart.price).format("000,000")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
