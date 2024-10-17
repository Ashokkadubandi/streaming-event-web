import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const upcomingApi = process.env.REACT_APP_UPCOMING;
console.log(upcomingApi);

const ScrollEvent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApi = async () => {
      const url = `${upcomingApi}${page}&type=upcoming`;
      const response = await fetch(url);
      const data = await response.json();
      setData((pre) => [...pre, ...data.events]);
      setLoading(false);
    };
    getApi();
  }, [page]);

  const handleScrollEvent = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (data.length <= 44) {
      if (scrollTop + clientHeight >= scrollHeight) {
        // console.log(scrollTop, clientHeight, scrollHeight);
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  });

  return (
    <div className="app-container">
      {/* <button onClick={(e) => setAct(event + 1)}>{event}</button> */}
      {data.map((each) => (
        <div className="card-scroll" key={uuidv4()}>
          <p>{each.eventName}</p>
        </div>
      ))}
      {loading && <p>Time to fetch...</p>}
    </div>
  );
};
export default ScrollEvent;
