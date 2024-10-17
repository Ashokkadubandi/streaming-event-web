import { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ThreeDots } from "react-loader-spinner";
import RecShows from "../RecommendCard";
import ScrollEvent from "../ScrollEvent";
import "./index.css";

const envApi = process.env.REACT_APP_API_URL_EVENTS;
const envApiKey = process.env.REACT_APP_API_URL_KEY;
console.log("Api key", envApiKey);

const Main = () => {
  const [recommendList, setRecommend] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    const getRecApi = async () => {
      const opt = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${envApiKey}`,
        },
      };
      const response = await fetch(envApi, opt);
      const data = await response.json();
      isLoading(false);
      console.log(data.events);
      setRecommend(data.events);
    };
    getRecApi();
  }, []);

  const renderData = () => <ScrollEvent />;

  const showLoader = () => (
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
  );

  const showContent = () => (
    <div className="recommend-content">
      <div className="recommend-header">
        <p>Recommend Shows</p>
        <FaArrowRightLong />
      </div>
      <div className="recommend-events">
        <ul className="events-card-con">
          {recommendList.map((each) => (
            <RecShows events={each} />
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <div className="event-layer"></div>
      <div className="event-layer-content">
        <div className="text-heading-content">
          <h1>
            Discover Exciting Events Happening Near You Stay Tuned For Updates!
          </h1>
          <p>
            You don’t need to be sold on the value of an event, be it a
            nonprofit fundraiser, association conference, or series of
            workshops. That’s not the issue; the issue is how to create buzz to
            get people to that event with enthusiasm (and, hopefully, money to
            spend). That’s where event description examples come in.
          </p>
        </div>
        <div className="recommend-show-container">
          {loading ? showLoader() : showContent()}
        </div>
        <div className="upcoming-events">
          <div className="upcoming-header">
            <p>Upcoming Shows</p>
            <FaArrowRightLong />
          </div>
          {renderData()}
        </div>
      </div>
    </>
  );
};

export default Main;
