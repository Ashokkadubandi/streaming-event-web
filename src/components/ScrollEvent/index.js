import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThreeDots } from "react-loader-spinner";
import "./index.css";

const upcomingApi = process.env.REACT_APP_UPCOMING;

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
      if (scrollTop + clientHeight >= scrollHeight && loading === false) {
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
    <div className="infinite-load-container">
      <ul className="card-scroll">
        {data.map((each) => {
          const { cityName, eventName } = each;
          console.log(each);
          return (
            <li className="load-child-ele" key={uuidv4()}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyvetnLOz5AF4JPJGxqw0EJpwpBHl9swwqww&s"
                alt="img"
              />
              <div className="load-child-text">
                <p className="load-city-name">{cityName}</p>
                <p>{eventName}</p>
              </div>
            </li>
          );
        })}
      </ul>
      {loading && (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="blue"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
    </div>
  );
};
export default ScrollEvent;
