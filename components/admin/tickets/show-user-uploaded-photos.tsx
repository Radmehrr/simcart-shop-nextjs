import Image from "next/image";
import { FC, useState } from "react";

const ShowUserUploadedPhotos: FC<any> = ({ photos }) => {
  return (
    <section>
      <div className="flex flex-wrap w-full">
        {photos.map((photo: any, idx: any) => (
          <div
            className=" w-full h-[200px] mx-1 border-2 text-center mt-2"
            key={idx}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_SIMCARTBAZAR_URL}/public/get-photos/${photo}`}
              width="100%"
              height="100%"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowUserUploadedPhotos;
