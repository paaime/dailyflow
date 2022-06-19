import axios from "axios";
import { useEffect, useState } from "react";
import "./styles/quotes.scss";

interface Quote {
  _id: string;
  content: string;
  author: string;
}

export default function Quotes() {
  const [quote, setQuote] = useState<Quote>();
  useEffect(() => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => setQuote(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="widget quotes">
      {quote ? (
        <>
          <p>{quote.content}</p>
          <p>{quote.author}</p>
        </>
      ) : (
        <></>
      )}
      <p></p>
    </div>
  );
}
