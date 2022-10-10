import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import instance from "../../axios-config";
import Modal from "../modal";
import Warn from "../svg/warn";

const Chats: FC<any> = ({ messages }) => {
  const [visible, setVisible] = useState(false);
  const [reportText, setReportText] = useState("");
  const [messageId, setMessageId] = useState("");

  const router = useRouter();
  const ticketId = router.query.id;

  const handleOnSendReportMessage = async () => {
    if (reportText && messageId) {
      try {
        const res = await instance.patch(
          `user/ticket/${ticketId}/${messageId}/report-asnwer`,
          {
            reportMessage: reportText,
          }
        );
        setVisible(false);
        toast.success("گذارش خطا ثبت شد", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section>
      <ToastContainer />
      <div className="mx-4">
        {messages.reverse().map((message: any) => (
          <div className="border-b border-gray-300" key={message._id}>
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
              {(() => {
                if (
                  message.senderRole == "support" &&
                  message.reportMessage == null
                ) {
                  return (
                    <div>
                      <button
                        className="flex bg-white mx-2 py-2 px-2 rounded-md"
                        onClick={() => setVisible(true)}
                      >
                        <Warn />
                        <p className="text-red-600">گزارش پاسخ</p>
                      </button>

                      <Modal
                        visible={visible}
                        onClose={() => setVisible(false)}
                      >
                        <div onClick={() => setMessageId(message._id)}>
                          <div className="mx-4 mt-3">
                            <p>گزارش پاسخ</p>
                          </div>

                          <div
                            className={`mt-4 mx-4 border border-gray-300 rounded-md flex text-lg
                        cursor-pointer
                        ${
                          reportText == "گزارش پاسخ نامناسب و توهین آمیز" &&
                          "border-2 border-green-600"
                        }
                      `}
                            onClick={() =>
                              setReportText("گزارش پاسخ نامناسب و توهین آمیز")
                            }
                          >
                            <div className="p-3 pl-1">
                              <Warn />
                            </div>
                            <div className="pt-3">
                              <p>گزارش پاسخ نامناسب</p>
                              <p className="text-sm text-gray-400 my-3 ml-1">
                                چنانجه پاسخی که دریافت کرده اید حاوی توهین,الفاظ
                                ناشایست,یا مواردی از این قبیل بوده است,گزارش
                                کنید.
                              </p>
                            </div>
                          </div>

                          <div
                            className={`mt-4 mx-4 border border-gray-300 rounded-md flex text-lg
                      cursor-pointer
                      ${
                        reportText == "گزارش پاسخ بی ربط" &&
                        "border-2 border-green-600"
                      }
                      `}
                            onClick={() => setReportText("گزارش پاسخ بی ربط")}
                          >
                            <div className="p-3 pl-1">
                              <Warn />
                            </div>
                            <div className="pt-3">
                              <p>گزارش پاسخ نامرتبط</p>
                              <p className="text-sm text-gray-400 my-3 ml-1">
                                چنانجه پاسخی که دریافت کرده اید با پرسش شما
                                نامرتبط بوده,گزارش کنید.
                              </p>
                            </div>
                          </div>

                          <div className="flex justify-center mt-4 mb-2">
                            <button
                              className="bg-green-400 rounded-md px-14 md:px-20 py-2 ml-3 hover:bg-green-600
                          text-white"
                              onClick={handleOnSendReportMessage}
                            >
                              ارسال
                            </button>
                            <button
                              className="bg-red-400 rounded-md px-14 md:px-20 py-2 hover:bg-red-600 text-white"
                              onClick={() => setVisible(false)}
                            >
                              انصراف
                            </button>
                          </div>
                        </div>
                      </Modal>
                    </div>
                  );
                }
              })()}
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
