import React, { Fragment } from "react";
import { useDrag } from "react-dnd";

const Imgs = ({ id, src, className }) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Fragment>
      <img
        ref={drag}
        draggable
        src={src}
        className={`${isDragging?"shadow-lg":""}w-56 snap-center h-56  object-center object-cover sm:object-cover sm:w-1/5 sm:h-80  mx-2 my-4 sm:my-8 rounded-lg duration-100 ease-linear transition-all hover:scale-150 active:scale-y-150 hover:z-10 active:z-10 hover:object-contain hover:rounded-lg`}
        alt="img"
      />
    </Fragment>
  );
};

export default Imgs;
