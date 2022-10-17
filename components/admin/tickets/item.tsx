import { useRouter } from "next/router";
import { FC, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import instance from "../../../axios-config";
import { appActions } from "../../../stores/appSlice";
import { useAppDispatch } from "../../hooks/hook";
import AdminChat from "./admin-chat";
import AdminItemHeader from "./admin-item-header";

const TicketItem: FC<any> = ({ ticket }) => {
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const ticketId = router.query.ticketId;

  const onHandleMessage = async (e: any) => {
    e.preventDefault();

    if (message) {
      try {
        const res = await instance.patch(`/admin/ticket/${ticketId}/answer`, {
          text: message,
        });

        dispatch(appActions.updateMessage(res.data.messages));
        toast.success("پیام ارسال شد.", {
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

      <div
        className="bg-white max-w-5xl md:mx-auto px-4 py-5 md:px-12
        rounded-lg shadow-2xl mx-2
        dark:text-gray-900"
      >
        <AdminItemHeader ticket={ticket} />

        <form onSubmit={onHandleMessage}>
          <div className="mx-4 my-5">
            <textarea
              id="message"
              rows={4}
              name="message"
              value={message}
              className="block p-2.5 focus:outline-none w-full
                 text-sm text-gray-900 bg-gray-50 rounded-lg
                  border border-gray-300 focus:ring-blue-500
                   focus:border-blue-500 dark:bg-gray-700
                   dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                  disabled:cursor-not-allowed"
              placeholder="متن پیام..."
              required
              disabled={ticket.status == "بسته"}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="text-left mx-4">
            <button
              className="bg-blue-400 px-5 py-2 rounded-md text-white hover:bg-blue-600
              disabled:cursor-not-allowed"
              disabled={ticket.status == "بسته"}
            >
              ارسال پاسخ
            </button>
          </div>
        </form>

        <div className="h-1 border-t border-gray-300 mx-4 mt-4"></div>

        <AdminChat />
        <div className="h-2"></div>
      </div>
    </section>
  );
};

export default TicketItem;
