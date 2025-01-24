import MoviesButtons from "../ArchivePage/MoviesButtons";
import "../../css/JumboHeader.css";


export default function MoviesJumboHeader( { image, title, description, onPlayButtonClick } ) {
  return (
    <div className="moviesjumboheader">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>

      <MoviesButtons onPlayButtonClick={onPlayButtonClick} />
    </div>
  );
}
