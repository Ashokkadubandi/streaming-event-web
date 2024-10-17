import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";

const Header = () => {
  const [isHide, setHide] = useState(false);

  const mobClass = isHide ? "show-hide-mob-nav" : "";

  return (
    <div className="header">
      <div className="mobile-nav">
        <h1>Book useNow</h1>
        {isHide === false && (
          <button onClick={() => setHide((pre) => !pre)}>
            <GiHamburgerMenu />
          </button>
        )}
        <div className={`hide-mob-nav ${mobClass}`}>
          <div className="close-btn">
            <button onClick={() => setHide((pre) => !pre)}>
              <IoMdClose />
            </button>
          </div>
          <nav>
            <a href="sd">Live shows</a>
            <a href="ss">Movies</a>
            <a href="sd">Streams</a>
            <a href="sd">Events</a>
            <a href="sd">Sports</a>
            <a href="sd">Genre</a>
          </nav>
        </div>
      </div>
      <div className="desk-top-nav">
        <h1>Book useNow</h1>
        <nav>
          <a href="sd">Live shows</a>
          <a href="ss">Movies</a>
          <a href="sd">Streams</a>
          <a href="sd">Events</a>
          <a href="sd">Sports</a>
          <a href="sd">Genre</a>
        </nav>
      </div>
    </div>
  );
};
export default Header;
// some git commands should be add
