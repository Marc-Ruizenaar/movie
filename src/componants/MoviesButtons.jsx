import { FaPlay } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import "../css/movieButtons.css";

export default function MoviesButtons({ onPlayButtonClick }) {
  return (
    <div className="MoviesButtons">
      <button className="playButton" onClick={onPlayButtonClick}>
        <FaPlay />
        Play now
      </button>
      <button className="thumbsup">
        <FaRegThumbsUp fill="white" />
      </button>
    </div>
  );
}
