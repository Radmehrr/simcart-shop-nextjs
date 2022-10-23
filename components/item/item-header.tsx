import Image from "next/image";
import { FC } from "react";

const ItemHeader: FC<any> = ({ phone, category }) => {
  return (
    <section>
      <div>
        <div className="w-full bakhMedium dark:text-gray-900">
          <p className="py-3 px-3">مشخصات سیم کارت</p>
        </div>

        <div className="flex h-70 mx-3 my-1 border-b-2 border-purple-500 pb-2">
          {(() => {
            switch (category) {
              case "همراه اول":
                return (
                  <Image src="/img/hamrah_aval.png" width={70} height={70} />
                );

              case "ایرانسل":
                return <Image src="/img/irancell.png" width={70} height={70} />;

              case "رایتل":
                return <Image src="/img/rightel.png" width={90} height={80} />;
            }
          })()}

          <p
            className="inline-block align-bottom my-auto mx-5 text-xl dark:text-black"
            style={{ direction: "ltr" }}
          >
            <span>{phone}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ItemHeader;
