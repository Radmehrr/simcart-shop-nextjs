import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import instance from "../../axios-config";
import Section from "./section";
import UploadPhoto from "./upload-photo";
import Check from "../svg/check";
import Trash from "../svg/trash";

const Contact = () => {
  const [title, setTitle] = useState("");
  const [sec, setSection] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");

  const sendTicket = async (e: any) => {
    e.preventDefault();

    try {
      const res: any = await instance.post("/user/ticket", {
        subject: title,
        text: description,
        section: sec,
      });
      console.log("1", res);
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        await instance.patch(
          `/user/ticket/${res.data._id}/upload-photo`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      }

      toast.success("تیکت با موفقیت ثبت شد.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setDescription("");
      setTitle("");
      setSection("");
      setFile("");
    } catch (e) {
      toast.error("خطا در داده های ارسالی", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const remove = (e: any): any => {
    e.preventDefault();
    setDescription("");
    setTitle("");
    setSection("");
    setFile("");
  };

  return (
    <section>
      <div className="bg-white max-w-5xl md:mx-auto px-4 py-5 md:px-12 rounded-lg shadow-2xl mx-2">
        <div>
          <p className="text-gray-900 dark:text-gray-900">
            درخواست پشتیبانی جدید
          </p>
        </div>

        <form>
          <div className="mt-3">
            <label
              htmlFor="title"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-900"
            >
              عنوان
            </label>
            <input
              type="text"
              id="title"
              value={title}
              className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="عنوان تیکت خود را وارد کنید"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mt-5 flex">
            <label htmlFor="section" className="mt-4">
              بخش
            </label>
            <Section sec={sec} setSection={setSection} />
          </div>

          <div className="mt-2">
            <label
              htmlFor="message"
              className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-900"
            >
              متن
            </label>
            <textarea
              id="message"
              value={description}
              rows={4}
              className="block p-2.5 focus:outline-none w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="متن تیکت ..."
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mt-2">
            <label
              htmlFor=""
              className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-900"
            >
              فایل پیوست
            </label>
            <UploadPhoto setFile={setFile} />
          </div>
          <div className="w-full flex mt-5">
            <button
              onClick={(e) => sendTicket(e)}
              className="flex justify-center w-1/2 h-15 mx-2 bg-green-600 text-white font-bold py-3 rounded-lg"
            >
              <Check /> <p className="mx-1 mt-1">ارسال تیکت</p>
            </button>
            <button
              onClick={(e) => remove(e)}
              className="flex justify-center w-1/2 h-15 mx-2 bg-red-600 text-white font-bold py-3 rounded-lg"
            >
              <Trash /> <p className="mx-1 mt-1">پاک کردن</p>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
