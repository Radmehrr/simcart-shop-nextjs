import Image from "next/image";
import { FC, useState } from "react";

const ShowUserUploadedPhotos: FC<any> = ({ photos }) => {
  return (
    <section>
      <div className="flex flex-wrap w-full">
        {photos.map((photo: any, idx: any) => (
          <div
            className="w-full md:h-[500px] h-[300px] mx-1 border-2 text-center mt-2 relative"
            key={idx}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_SIMCARTBAZAR_URL}/public/get-photos/${photo}`}
              layout="fill"
              alt="image"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowUserUploadedPhotos;
