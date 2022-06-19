import React from "react";
import DragList from "./components/DragList/DragList";
import { DragDropContext } from "react-beautiful-dnd";

const onDragEnd = (result: any) => {
  const { destination, source, draggableId } = result;
  console.log(destination);
  console.log(source);
  console.log(draggableId);
};

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <img className="logo" alt="Logo" src="/images/logo.png" />
        <DragDropContext onDragEnd={onDragEnd}>
          <DragList />
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
