import React from "react";
import Drag from "./components/Drag";
import { useState } from "react";
import Drop from "./components/Drop";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-screen h-screen  bg-zinc-800 overflow-x-hidden">
        <Drag  />
        <Drop />
      </div>
    </DndProvider>
  );
}

export default App;
