import numeral from "numeral";
import { FC } from "react";
import { getDate } from "../../utils/moment";

const OrderItem: FC<any> = ({ order }) => {
  const date = getDate(order.createdAt);

  return (
    <section>
      <div
        className="bg-white max-w-5xl md:mx-auto px-4 py-5 md:px-12
        rounded-lg shadow-2xl mx-2
        dark:text-gray-900"
      >
        <div className="flex justify-between mx-5 text-gray-500">
          <p>{`ایجاد شده در ${date.dayName} ${date.day} ${date.month} (${date.hour}:${date.minutes})`}</p>

          {(() => {
            switch (order.status) {
              case "جدید":
                return (
                  <div className="flex justify-center">
                    <div className="h-2 w-2 mt-2 bg-orange-400 rounded-full ml-1"></div>
                    <p>{order.status}</p>
                  </div>
                );
              case "لغو شده توسط کاربر":
                return (
                  <div className="flex justify-center">
                    <div className="h-2 w-2 mt-2 bg-red-500 rounded-full ml-1"></div>
                    <p>{order.status}</p>
                  </div>
                );
              case "ارسال به درگاه":
                return (
                  <div className="flex justify-center">
                    <div className="h-2 w-2 mt-2 bg-yellow-600 rounded-full ml-1"></div>
                    <p>{order.status}</p>
                  </div>
                );
              case "پرداخت شده":
                return (
                  <div className="flex justify-center">
                    <div className="h-2 w-2 mt-2 bg-green-600 rounded-full ml-1"></div>
                    <p>{order.status}</p>
                  </div>
                );
              case "ارسال شده":
                return (
                  <div className="flex justify-center">
                    <div className="h-2 w-2 mt-2 bg-green-400 rounded-full ml-1"></div>
                    <p>{order.status}</p>
                  </div>
                );
            }
          })()}
        </div>

        <div className="w-3/4 md:w-3/5 m-auto mt-5">
          <div className="flex justify-between my-2">
            <p>نام خریدار:</p>
            <p>{order.username}</p>
          </div>

          <div className="flex justify-between my-2">
            <p>شماره خریدار:</p>
            <p>{order.phone}</p>
          </div>

          <p className="mt-6">اطلاعات سیمکارت:</p>
          <div className="flex justify-between my-2">
            <p>شماره سیمکارت:</p>
            <p>{order.simcart.phoneNumber}</p>
          </div>

          <div className="flex justify-between my-2">
            <p>اپراتور سیمکارت:</p>
            <p>{order.simcart.category}</p>
          </div>

          <div className="flex justify-between my-2">
            <p>نوع سیمکارت:</p>
            <p>{order.simcart.type}</p>
          </div>

          <div className="flex justify-between my-2">
            <p>نوع رند سیمکارت:</p>
            <p>{order.simcart.rondType}</p>
          </div>
          <div className="flex justify-between my-2">
            <p>وضعیت سیمکارت:</p>
            <p>{order.simcart.status}</p>
          </div>
          <div className="flex justify-between my-2">
            <p>قیمت سیمکارت:</p>
            <p className="text-green-600">
              {numeral(order.simcart.price).format("000,000")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderItem;
