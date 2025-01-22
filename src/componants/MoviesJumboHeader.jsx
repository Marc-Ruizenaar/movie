import MoviesButtons from "./MoviesButtons";
import "../css/moviesJumboHeader.css"

export default function MoviesJumboHeader() {
  return (
    <div className="moviesjumboheader">
      <img src="./Avengers.jpg" alt="Avengers" />
      <h1>Avengers : Endgame</h1>
      <p>
        With the help of remaining allies, the Avengers must assemble once more
        in order to undo Thanos's actions and undo the chaos to the universe, no
        matter what consequences may be in store, and no matter who they face...
        Avenge the fallen.
      </p>

      <MoviesButtons />
    </div>
  );
}
