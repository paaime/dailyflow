import "./styles/crypto.scss";
import { useEffect, useState } from "react";
import axios from "axios";

interface Data {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  priceUsd: number;
  changePercent24Hr: number;
}

interface CardProps {
  data: Data;
}

const CryptoCard = ({ data }: CardProps) => {
  return (
    <div className="crypto-data" key={data.id}>
      <p className="rank">{data.rank}</p>
      <a
        className="name"
        href={`https://coincap.io/assets/${data.id}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={`/images/${data.symbol}.png`} alt={data.symbol} />
        <div className="info">
          <p className="title">{data.name}</p>
          <p className="symbol">{data.symbol}</p>
        </div>
      </a>
      <p className="price">${Math.round(data.priceUsd * 100) / 100}</p>
      <p className="change24h">
        {Math.round(data.changePercent24Hr * 100) / 100}%
      </p>
    </div>
  );
};

export default function Crypto() {
  const [cryptoData, setCryptoData] = useState<Data[]>([]);
  useEffect(() => {
    axios
      .get("https://api.coincap.io/v2/assets?limit=10")
      .then((res) => setCryptoData(res.data.data))
      .catch((err) => console.error(err));
    console.log(cryptoData);
  }, []);
  return (
    <div className="widget crypto">
      {cryptoData.length ? (
        cryptoData.map((item) => <CryptoCard key={item.id} data={item} />)
      ) : (
        <></>
      )}
    </div>
  );
}
