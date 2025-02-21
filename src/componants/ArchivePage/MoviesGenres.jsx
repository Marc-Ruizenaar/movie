import MovieCart from "./MovieCart";

// seems like this component is not used, consider removing it
export default function MoviesGenres() {
  // can be simplified and refactored to
  const renderMovieCarts = () => {
    const carts = [];
    for (let i = 0; i < 5; i++) {
      carts.push(<MovieCart key={i} />);
    }
    return carts;
  };

  return (
    <div className="container">
      <div>
        <h2>Our Genres</h2>
      </div>
      <div className="movieGenres">{renderMovieCarts()}</div>
    </div>
  );
}
