import Image from "next/image";
import React, { useState } from "react";
import { useAppSelector } from "../../hooks/hook";
import { getDate } from "../../utils/moment";
import Warn from "../../svg/warn";
import Modal from "../../modal";

const AdminChat = () => {
  const [visible, setVisible] = useState(false);
  const messages = useAppSelector((state) => state.messages);

  return (
    <section>
      <div>
        {messages
          .map((message: any) => (
            <div className="border-b border-gray-300" key={message._id}>
              <div className="flex justify-between mt-4 bg-slate-100 items-center rounded-md">
                <div className="flex justify-between mt-4 mr-2 md:mr-3 w-full">
                  <div className="flex">
                    <div className="rounded-full hidden md:block">
                      <Image
                        src="/img/person.jpg"
                        width={40}
                        height={45}
                        className="rounded-full"
                        alt="person"
                      />
                    </div>
                    <div className="mr-1 md:mx-4">
                      <p>{message.senderFullname}</p>
                      {(() => {
                        const date = getDate(message.createdAt);
                        return (
                          <div>
                            <p>{`${date.day} ${date.month} ${date.year}, ${date.hour}:${date.minutes}:${date.seconds}`}</p>
                          </div>
                        );
                      })()}
                    </div>
                  </div>

                  {message.reportMessage !== null && (
                    <div className="">
                      <button onClick={() => setVisible(true)}>
                        <Warn />
                      </button>

                      <Modal
                        visible={visible}
                        onClose={() => setVisible(false)}
                      >
                        <p className="my-2 mx-2">
                          این پیام از طرف کاربر گذارش شده است
                        </p>
                        <p className="my-2 mx-2 text-red-600">
                          {message.reportMessage}
                        </p>
                      </Modal>
                    </div>
                  )}
                </div>
              </div>
              <div className="md:w-5/6 mx-4 md:mx-16 mt-3 mb-2 text-gray-600 text-justify">
                <p>{message.text}</p>
              </div>
            </div>
          ))
          .reverse()}
      </div>
    </section>
  );
};

export default AdminChat;
