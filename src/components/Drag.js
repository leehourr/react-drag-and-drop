import React, { useEffect, useState } from "react";
import images from "../imgs/images";
import Imgs from "./Imgs";

const Drag = () => {
  return (
    <div className="w-full mt-4  flex flex-col items-center justify-center text-white font-bold text-[10px] sm:text-lg">
      <h1 className="sm:w-1/3 cursor-pointer uppercase mx-auto text-center">
        drag and drop react
      </h1>
      <div className="flex h-1/2 items-center sm:justify-center w-full overflow-x-scroll sm:overflow-hidden scroll-smooth ">
        {images.map((img) => (
          <Imgs
            key={img.id}
            id={img.id}
            src={img.src}
            className="w-20 snap-center h-20  object-center object-cover sm:object-cover sm:w-1/5 sm:h-40  mx-2 my-4 sm:my-8 rounded-lg duration-100 ease-linear transition-all hover:scale-150 active:scale-y-150 hover:z-10 active:z-10 hover:object-contain hover:rounded-lg"
            alt="img"
          />
        ))}
      </div>
    </div>
  );
};

export default Drag;
