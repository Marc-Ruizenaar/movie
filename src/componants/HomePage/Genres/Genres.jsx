import "../../../css/Categories.css";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Genres({ amount }) {
  const categories = [
    {
      name: "Action",
      img: "/genres/action.png",
      link: "/genre/action",
      screenReader:
        "Explore action movies featuring thrilling sequences and intense battles.",
    },
    {
      name: "Adventure",
      img: "/genres/adventure.png",
      link: "/genre/adventure",
      screenReader:
        "Discover adventure movies filled with epic journeys and daring heroes.",
    },
    {
      name: "Comedy",
      img: "/genres/comedy.png",
      link: "/genre/comedy",
      screenReader: "Laugh out loud with our collection of comedy films.",
    },
    {
      name: "Drama",
      img: "/genres/drama.png",
      link: "/genre/drama",
      screenReader: "Experience emotional storytelling with our drama films.",
    },
    {
      name: "Horror",
      img: "/genres/horror.png",
      link: "/genre/horror",
      screenReader:
        "Get spooked with our selection of horror films full of suspense and scares.",
    },
    {
      name: "Animation",
      img: "",
      link: "/genre/animation",
      screenReader: "",
    },
    {
      name: "Crime",
      img: "",
      link: "/genre/crime",
      screenReader: "",
    },
    {
      name: "Documentary",
      img: "",
      link: "/genre/documentary",
      screenReader: "",
    },
    {
      name: "Family",
      img: "",
      link: "/genre/family",
      screenReader: "",
    },
    {
      name: "Fantasy",
      img: "",
      link: "/genre/fantasy",
      screenReader: "",
    },
    {
      name: "History",
      img: "",
      link: "/genre/history",
      screenReader: "",
    },
    {
      name: "Music",
      img: "",
      link: "/genre/music",
      screenReader: "",
    },
    {
      name: "Mystery",
      img: "",
      link: "/genre/mystery",
      screenReader: "",
    },
    {
      name: "Romance",
      img: "",
      link: "/genre/romance",
      screenReader: "",
    },
    {
      name: "Thriller",
      img: "",
      link: "/genre/thriller",
      screenReader: "",
    },
    {
      name: "War",
      img: "",
      link: "/genre/war",
      screenReader: "",
    },
    {
      name: "Western",
      img: "",
      link: "/genre/western",
      screenReader: "",
    },
  ];

  // Slice the categories array based on the amount prop
  const displayedCategories = categories.slice(0, amount);

  return (
    <section className="categories">
      <div>
        <h2>Explore our wide variety of movie genres</h2>
        <p>
          Whether you're looking for a comedy to make you laugh, a drama to make
          you think, or a documentary to learn something new.
        </p>
      </div>

      <div className="genresGrid">
        {displayedCategories.map((categorie, index) => (
          <a
            className="genreSingle"
            key={index}
            href={categorie.link}
            aria-label={categorie.screenReader}
          >
            <div className="imageWrapper">
              <img src={categorie.img} alt={categorie.name} />
            </div>
            <div className="inner">
              <h3>{categorie.name}</h3>
              <FaArrowRightLong fill="white" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
