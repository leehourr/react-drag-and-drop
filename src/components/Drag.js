import React from "react";
import images from "../imgs/images";
import Imgs from "./Imgs";

const Drag = () => {
  return (
    <div className="w-full mt-4  flex flex-col items-center justify-center text-white font-bold text-[10px] sm:text-lg">
      <h1 className="sm:w-1/3 cursor-pointer uppercase mx-auto text-center">
        drag and drop react
      </h1>
      <div className="flex h-1/2 items-center sm:justify-center w-full overflow-x-scroll overflow-y-hidden sm:overflow-hidden scroll-smooth ">
        {images.map((img) => (
          <Imgs
            key={img.id}
            id={img.id}
            src={img.src}
            alt="img"
          />
        ))}
      </div>
    </div>
  );
};

export default Drag;
