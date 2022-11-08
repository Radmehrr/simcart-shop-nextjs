import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import instance from "../../axios-config";
import { IranProvince } from "../../constants/province";
import { useAppSelector } from "../hooks/hook";
import Modal from "../modal";

const Profile = () => {
  const [fullNamevisible, setFullNameVisible] = useState(false);
  const [addressVisible, setAddressVisible] = useState(false);
  const [newFullName, setNewFullName] = useState("");
  const [newProvince, setNewProvince] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newTextAddress, setNewTextAddress] = useState("");
  const user: any = useAppSelector((state) => state.user);

  const router = useRouter();
  const handleNewFullName = async () => {
    if (newFullName) {
      try {
        const res = await instance.patch("/user", {
          fullName: newFullName,
        });

        setFullNameVisible(false);
        toast.success("با موفقیت ثبت شد.", {
          position: toast.POSITION.TOP_RIGHT,
        });
        router.reload();
      } catch (error) {
        toast.error("خطا در داده ورودی", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  const handleNewAddress = async () => {
    try {
      const res = await instance.patch("/user", {
        address: {
          province: newProvince,
          city: newCity,
          text: newTextAddress,
        },
      });
      setAddressVisible(false);
      toast.success("با موفقیت ثبت شد.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error("خطا در داده ورودی", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <section>
      <ToastContainer />
      <div className="max-w-5xl md:mx-auto rounded-lg shadow-2xl bg-white mx-2 bakhMedium dark:text-gray-700">
        <p className="p-4 text-xl">حساب کاربری</p>
        <div className="flex">
          <div className="mx-5 my-4">
            <Image src="/img/person.png" width={80} height={80} alt="person" />
          </div>
          <div className="mx-4 mt-4">
            <div>
              <p>تلفن همراه</p>
              <input
                type="text"
                className="text-left bg-white border-b border-dashed my-2 text-lg"
                placeholder={user.phone}
                disabled={true}
              />
            </div>

            <div>
              <p>نام و نام خانوادگی</p>
              <div className="">
                <input
                  type="text"
                  className="bg-white border-b border-dashed my-1 text-lg
                    focus:bg-red-400"
                  placeholder={user.fullName}
                  disabled={true}
                />
              </div>
              <button
                className="border border-blue-400 text-blue-400
                       rounded-md my-1 hover:bg-blue-50 px-3 py-2"
                onClick={() => setFullNameVisible(true)}
              >
                ویرایش
              </button>
              <Modal
                visible={fullNamevisible}
                onClose={() => setFullNameVisible(false)}
              >
                <div className=" w-full">
                  <p className="text-right p-2">نام و نام خانوادگی جدید</p>
                  <input
                    type="text"
                    className="w-full p-2 border border-blue-400 rounded focus:border-2 focus:border-blue-500
                focus:outline-none"
                    placeholder="نام و نام خانوادگی جدید"
                    onChange={(e) => setNewFullName(e.target.value)}
                  />

                  <div className="mt-3">
                    <button
                      className="mx-2 border text-gray-600 border-gray-400 py-2 px-6 
                 rounded hover:bg-gray-100"
                      onClick={() => setFullNameVisible(false)}
                    >
                      انصراف
                    </button>
                    <button
                      className="border text-blue-600 border-blue-400 rounded px-6 py-2 hover:bg-blue-100"
                      onClick={handleNewFullName}
                    >
                      ذخیره
                    </button>
                  </div>
                </div>
              </Modal>
            </div>

            <div>
              <p className="mt-4">آدرس</p>
              <div className="mt-2">
                {user.address == null ? (
                  <p className="text-red-500">هنوز آدرسی ثبت نکرده اید!</p>
                ) : (
                  <p className="border-b border-dashed text-gray-400 pb-1">{`${user.address.province} ${user.address.city} ${user.address.text}`}</p>
                )}
                <button
                  className="border border-blue-400 text-blue-400
                       rounded-md px-3 py-2 my-1 hover:bg-blue-50"
                  onClick={() => setAddressVisible(true)}
                >
                  ویرایش
                </button>

                <Modal
                  visible={addressVisible}
                  onClose={() => setAddressVisible(false)}
                >
                  <form>
                    <div className="w-full px-2">
                      <p className="text-right p-2">استان</p>
                      <select
                        id="province"
                        className={`bg-gray-50 border border-blue-300 text-sm rounded-lg
                      focus:ring-blue-500 focus:border-blue-500 p-1.5
                        dark:bg-gray-700 w-full
                        dark:border-gray-600  
                      dark:placeholder-gray-400 dark:text-white
                        dark:focus:ring-blue-500 dark:focus:border-blue-500 text-gray-900
                        `}
                        onChange={(e) => setNewProvince(e.target.value)}
                        required
                      >
                        <option value="">انتخاب کنید</option>
                        {IranProvince.map((province) => (
                          <option key={province.id} value={province.title}>
                            {province.title}
                          </option>
                        ))}
                      </select>

                      <div className="mt-4">
                        <p className="text-right ">شهر</p>
                        <input
                          type="text"
                          className="w-full p-2 border border-blue-400 rounded focus:border-2 focus:border-blue-500
                focus:outline-none"
                          placeholder=" شهر جدید"
                          onChange={(e) => setNewCity(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mt-4">
                        <p className="text-right">آدرس دقیق شما</p>
                        <textarea
                          id="address"
                          rows={4}
                          className={`block p-2.5 focus:outline-none w-full
                 text-sm text-gray-900 bg-gray-50 rounded-lg
                  border border-blue-300 focus:ring-blue-500
                   focus:border-blue-500 dark:bg-gray-700
                   dark:border-blue-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                  `}
                          onChange={(e) => setNewTextAddress(e.target.value)}
                          placeholder="آدرس دقیق محل را وارد کنید..."
                          required
                        ></textarea>
                      </div>

                      <div className="mt-3">
                        <button
                          className="mx-2 border text-gray-600 border-gray-400 py-2 px-6 
                       rounded hover:bg-gray-100"
                          onClick={() => setAddressVisible(false)}
                        >
                          انصراف
                        </button>
                        <button
                          className="border text-blue-600 border-blue-400 rounded px-6 py-2 hover:bg-blue-100"
                          onClick={handleNewAddress}
                        >
                          ذخیره
                        </button>
                      </div>
                    </div>
                  </form>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
