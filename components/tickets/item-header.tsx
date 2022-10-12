import { useRouter } from "next/router";
import { FC, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import instance from "../../axios-config";
import Modal from "../modal";
import { getDate } from "../utils/moment";

const ItemHeader: FC<any> = ({ ticket }) => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const id = router.query.id;

  const date = getDate(ticket.createdAt);

  const handleCloseTicket = async () => {
    try {
      await instance.patch(`/user/ticket/${id}/update`, {
        status: "بسته",
      });

      toast.success("تیکت بسته شد.", {
        position: toast.POSITION.TOP_RIGHT,
      });

      setVisible(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section>
      <ToastContainer />
      <div>
        <div className="flex justify-between mx-5 py-4 text-lg dark:text-gray-900">
          <p>{ticket.subject}</p>
          <p className="text-green-600">{`#${ticket.createdAt}`}</p>
        </div>

        <div className="flex justify-between mx-5 text-gray-500">
          <p>{`ایجاد شده در ${date.dayName} ${date.day} ${date.month} (${date.hour}:${date.minutes})`}</p>
          {(() => {
            switch (ticket.status) {
              case "در حال بررسی":
                return (
                  <div className="flex justify-center">
                    <div className="h-2 w-2 mt-2 bg-orange-400 rounded-full ml-1"></div>
                    <p>{ticket.status}</p>
                  </div>
                );
              case "پاسخ داده":
                return (
                  <div className="flex justify-center">
                    <div className="h-2 w-2 mt-2 bg-green-400 rounded-full ml-1"></div>
                    <p>{ticket.status}</p>
                  </div>
                );
              case "بسته":
                return (
                  <div className="flex justify-center">
                    <div className="h-2 w-2 mt-2 bg-red-400 rounded-full ml-1"></div>
                    <p>{ticket.status}</p>
                  </div>
                );
            }
          })()}
        </div>
        <div className="text-left mt-4 ml-2">
          <button
            className="bg-red-400 px-5 py-2 mx-2 rounded-md text-white hover:bg-red-600
              disabled:cursor-not-allowed"
            disabled={ticket.status == "بسته"}
            onClick={() => setVisible(true)}
          >
            بستن تیکت
          </button>
          <Modal visible={visible} onClose={() => setVisible(false)}>
            <p className="text-right mt-3 mr-3">
              آیا مطمعن به بستن تیکت هستید؟
            </p>

            <div className="mt-4">
              <button
                className="bg-red-400 px-8 py-2 mx-2 rounded-md text-white hover:bg-red-600"
                onClick={handleCloseTicket}
              >
                بله
              </button>
              <button
                className="bg-gray-400 px-5 py-2 rounded-md text-white hover:bg-gray-600"
                onClick={() => setVisible(false)}
              >
                انصراف
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default ItemHeader;
