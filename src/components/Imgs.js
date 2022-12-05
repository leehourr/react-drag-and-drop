import React from "react";
import { useDrag } from "react-dnd";

const Imgs = ({ id, src, className }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <img
        ref={drag}
        draggable
        src={src}
        className={isDragging ? "w-20 h-20 sm:w-1/5 sm:h-40 " : "" + className}
        alt="img"
      />
    </>
  );
};

export default Imgs;
