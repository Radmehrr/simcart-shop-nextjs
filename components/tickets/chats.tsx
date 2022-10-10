import Image from "next/image";
import { FC } from "react";
import Warn from "../svg/warn";

const Chats: FC<any> = ({ messages }) => {
  return (
    <section>
      <div className="mx-4">
        {messages.reverse().map((message: any) => (
          <div className="border-b border-gray-300">
            <div className="flex justify-between mt-4 bg-slate-100 items-center rounded-md">
              <div className="flex mt-4 mr-2 md:mr-3">
                <div className="rounded-full hidden md:block">
                  <Image
                    src="/img/person.jpg"
                    width={40}
                    height={45}
                    className="rounded-full"
                  />
                </div>
                <div className="mr-1 md:mx-4">
                  <p>{message.senderFullname}</p>
                  <p>01 شهریور 1401، 10:33:28</p>
                </div>
              </div>

              <div>
                <button className="flex bg-white mx-2 py-2 px-2 rounded-md">
                  <Warn />
                  <p className="text-red-600">گزارش پاسخ</p>
                </button>
              </div>
            </div>
            <div className="md:w-5/6 mx-4 md:mx-16 mt-3 mb-2 text-gray-600 text-justify">
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chats;
