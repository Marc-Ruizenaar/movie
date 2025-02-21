import MovieList from "../componants/ArchivePage/MovieList";
import Header from "../componants/UIComponant/Header/Header";
import Footer from "../componants/UIComponant/Footer/Footer";
import Community from "../componants/HomePage/Community/Community";

export default function ArchiveMoviePage() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

// for readability, the MainContent component can be moved to a separate component
const MainContent = () => {
  return (
    <div className="container">
      <MovieList />
      <Community />
    </div>
  );
};
