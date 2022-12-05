import React, { useState } from "react";
import { useDrop } from "react-dnd";
import images from "../imgs/images";

const Drop = ({ id }) => {
  const [board, setBoard] = useState([]);
  const [dropped, setDropped] = useState();
  const [ drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    setBoard(images.filter((pic) => pic.id === id));
    setDropped(true);
  };

  return (
    <div
      ref={drop}
      className="w-[90%] relative hover:bg-white/40 mx-auto flex items-center justify-center rounded-lg h-1/3 sm:h-1/2 border-2 border-solid border-white"
    >
      <h1
        className={`${
          dropped ? "hidden" : ""
        } text-white text-[10px] font-medium  sm:text-xl font-sans`}
      >
        Drag and drop here
      </h1>
      {board.map((pic) => (
        <img
          key={pic.id}
          className="absolute top-0 left-0 w-full h-full rounded-lg object-contain"
          alt=""
          src={pic.src}
        />
      ))}
    </div>
  );
};

export default Drop;
