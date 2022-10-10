import { FC } from "react";

const Modal: FC<any> = ({ visible, onClose, children }) => {
  if (!visible) return null;

  const handleClose = (e: any) => {
    if (e.target.id == "wrapper") onClose();
  };
  return (
    <div>
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
      flex justify-center items-center"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="md:w-1/3 flex flex-col">
          <button
            className="text-white text-xl place-self-end"
            onClick={() => onClose()}
          >
            X
          </button>
          <div className="bg-white p-2 rounded-md">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
