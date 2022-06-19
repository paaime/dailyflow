import { useEffect, useState } from "react";
import moment from "moment";
import "./styles/date.scss";

export default function Date() {
  const [date, setDate] = useState<string>(moment().format("LL"));
  const [time, setTime] = useState<string>(moment().format("hh:mm"));
  setInterval(() => {
    setTime(moment().format("hh:mm"));
  }, 10000);

  return (
    <div className="widget date">
      <div className="day">{date}</div>
      <div className="time">{time}</div>
    </div>
  );
}
