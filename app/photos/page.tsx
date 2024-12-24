import React from "react";
import { data } from "@/public/data/images.json";

const Page = () => {
  return (
    <div className="w-[calc(100%-40px)] m-[0px_auto] mt-20 columns-2 sm:columns-3 md:columns-4 [column-gap:_10px] text-primary">
      {data.map((el) => (
        <div className="break-inside-avoid w-full mb-[10px]">
          <img
            className="max-w-full rounded-xl hover:opacity-80 hover:cursor-pointer transition-opacity"
            alt="user image"
            src={`/images/pinterest/${el.image}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Page;
