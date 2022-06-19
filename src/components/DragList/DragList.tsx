import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./styles/drag_list.scss";
import Date from "../Widgets/Date";
import Weather from "../Widgets/Weather";
import Crypto from "../Widgets/Crypto";
import PictureOfTheDay from "../Widgets/PictureOfTheDay";
import Quotes from "../Widgets/Quotes";

export default function DragList() {
  return (
    // <Droppable droppableId="1">
    //   {(provider) => (
    //     <div
    //       {...provider.droppableProps}
    //       ref={provider.innerRef}
    //       className="drag_list"
    //     >
    //       {widgets.map((widget, index) => (
    //         <Widget key={index} widget={widget} index={index} />
    //       ))}
    //     </div>
    //   )}
    // </Droppable>
    <div className="drag_list">
      <Date />
      <Weather />
      <Crypto />
      <PictureOfTheDay />
      <Quotes />
    </div>
  );
}
