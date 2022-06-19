import axios from "axios";
import "./styles/picture-of-the-day.scss";
import { useState, useEffect } from "react";

interface Picture {
  title: string;
  copyright?: string;
  url: string;
}

export default function PictureOfTheDay() {
  const [data, setData] = useState<Picture>();
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=R8xHysdspOSuLr4wCzYiTXWlq8g5HUiFeTVAikhd"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
    console.log(data);
  }, []);
  return (
    <div className="widget picture-of-the-day">
      {data ? (
        <>
          <img src={data.url} alt={data.title} />
          <p className="title">{data.title}</p>
          <p className="copyright">{data?.copyright}</p>
        </>
      ) : (
        <>test</>
      )}
    </div>
  );
}
