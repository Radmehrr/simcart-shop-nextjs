import { FC } from "react";
import numeral from "numeral";

const Details: FC<any> = ({ simcart }) => {
  return (
    <section>
      <div className="mx-3 my-5">
        <div className="flex gap-20 mx-2 md:gap-40 dark:text-gray-700">
          <p>شماره: </p>
          <p>{simcart.phoneNumber}</p>
        </div>

        <div className="flex gap-20 mx-2 my-2 md:my-4 md:gap-40 dark:text-gray-700">
          <p>قیمت: </p>
          <p>{numeral(simcart.price).format("000,000")}</p>
        </div>

        <div className="flex gap-16 mx-2 my-2 md:my-4 md:gap-36 dark:text-gray-700">
          <p>وضعیت: </p>
          <p>{simcart.status}</p>
        </div>

        <div className="flex gap-24 mx-2 my-2 md:my-4 md:gap-44 dark:text-gray-700">
          <p>نوع: </p>
          <p>{simcart.type}</p>
        </div>

        <div className="flex gap-20 mx-2 my-2 md:my-4 md:gap-40 dark:text-gray-700">
          <p>نوع رند: </p>
          <p>{simcart.rondType}</p>
        </div>

        <div className="flex gap-14 mx-2 my-2 md:my-4 md:gap-36 dark:text-gray-700">
          <p>توضیحات: </p>
          <p>
            برای اطلاع از شماره ها و قیمت های به روز شده,به واتس اپ یا تلگرام به
            شماره 09172562637 بنام رادمهر زبانزد پیام ارسال کنید.اعتماد شما
            افتخار ماست.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
