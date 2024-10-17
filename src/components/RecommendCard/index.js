// import { IoLocationOutline } from "react-icons/io5";
import "./index.css";

const RecShows = (props) => {
  const { events } = props;
  const { date, imgUrl, eventName, distanceKm } = events;
  let slicer = imgUrl.slice(32, 65);
  const imageUrl = `${process.env.REACT_APP_IMAGE_URL}${slicer}=w200?authuser=0`;
  return (
    <li className="rec-card">
      <img src={imageUrl} alt={date} className="img-src" />
      <div className="text-container">
        <h1 className="event-name">{eventName}</h1>
        <p>{distanceKm / 1000}</p>
      </div>
    </li>
  );
};

export default RecShows;
