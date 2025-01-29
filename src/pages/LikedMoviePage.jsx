import "../css/likedMoviePage.css";
import LikedMoviesList from "../componants/LikedMovies/LikedMoviesList";
import Header from "../componants/UIComponant/Header/Header";
import Footer from "../componants/UIComponant/Footer/Footer";
import Community from "../componants/HomePage/Community/Community";

export default function LikedMoviesPage() {

  return (
    <main>
      <div className="liked-movies-page container">
        <Header />
        <div className="content liked-movies-page">
          <LikedMoviesList />
        </div>
        <Community />
      </div>
      <Footer />
    </main>
  );
}