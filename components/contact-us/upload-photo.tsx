import { FC } from "react";
import Upload from "../svg/upload";

const UploadPhoto: FC<any> = ({ setFile }) => {
  const onChange = (e: any) => {
    setFile(e.target.files[0]);
  };
  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <label
          htmlFor="uploadfile"
          className="flex flex-col justify-center items-center w-full h-40 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col justify-center items-center">
            <Upload />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">
                برای ارسال عکس اینجا کلیک کنید.
              </span>
            </p>
          </div>
          <input
            id="uploadfile"
            type="file"
            className="hidden"
            onChange={onChange}
          />
        </label>
      </div>
    </section>
  );
};

export default UploadPhoto;
