import axios from "axios";
import { useState, useEffect } from "react";
import "./styles/weather.scss";

interface WeatherType {
  current: {
    condition: {
      icon: string;
      text: string;
    };
    temp_c: number;
    wind_kph: number;
    humidity: number;
    cloud: number;
  };
}

// const WeatherVoid = {
//   current: {
//     condition: {
//       icon: "",
//       text: "",
//     },
//     temp_c: 0,
//     wind_kph: 0,
//     humidity: 0,
//     cloud: 0,
//   },
// };

export default function Weather() {
  const [weather, setWeather] = useState<WeatherType | any>({});
  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=5a5d0fa5e61e46958c0124303221706&q=Lyon&aqi=no"
      )
      .then((res) => setWeather(res.data))
      .catch((err) => console.error(err));
    console.log(weather);
  }, []);
  return (
    <div className="widget weather">
      {weather.current ? (
        <>
          <div className="temp">
            <div className="icon">
              <img alt="weather" src={weather.current.condition.icon} />
            </div>
            <div className="temperature">
              <p>{weather.current.temp_c}°C</p>
              <p className="condition">{weather.current.condition.text}</p>
            </div>
          </div>
          <div className="more-info">
            <div className="wind">
              <img
                src="https://cdn-icons-png.flaticon.com/512/172/172922.png"
                alt="wind"
              />
              <p>
                {weather.current.wind_kph}
                <span>km/h</span>
              </p>
            </div>
            <div className="humidity">
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/water-drop-2087919-1768130.png"
                alt="humidity"
              />
              <p>{weather.current.humidity}%</p>
            </div>
            <div className="cloud">
              <img
                src="https://cdn-icons-png.flaticon.com/512/546/546404.png"
                alt="cloud"
              />
              <p>{weather.current.cloud}%</p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
