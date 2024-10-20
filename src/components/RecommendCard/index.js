// import { IoLocationOutline } from "react-icons/io5";
import "./index.css";

const RecShows = (props) => {
  const { events } = props;
  const { date, imgUrl, eventName, cityName, distanceKm, weather } = events;
  let slicer = imgUrl.slice(32, 65);
  const imageUrl = `${process.env.REACT_APP_IMAGE_URL}${slicer}=w200?authuser=0`;
  let distance = Math.ceil(distanceKm / 1000);
  return (
    <li className="rec-card">
      <img src={imageUrl} alt={date} className="img-src" />
      <div className="text-container">
        <h1 className="event-name">{eventName}</h1>
        <div className="event-details">
          <p className="city-name">{cityName}</p>
          <div className="dis-date-con">
            <p className="distance">{distance} KM</p>
            <p className="weather">{weather}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RecShows;
