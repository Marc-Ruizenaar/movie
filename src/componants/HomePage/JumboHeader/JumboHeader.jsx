import "../../../css/jumboHeaderHomepage.css";

export default function JumboHeaderHome() {
  const images = [
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png",
    "/images/image6.png",
    "/images/image7.png",
    "/images/image8.png",
    "/images/image9.png",
    "/images/image10.png",
    "/images/image11.png",
    "/images/image12.png",
    "/images/image13.png",
    "/images/image14.png",
    "/images/image15.png",
    "/images/image16.png",
    "/images/image17.png",
    "/images/image18.png",
    "/images/image19.png",
    "/images/image20.png",
    "/images/image1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image5.png",
    "/images/image6.png",
    "/images/image7.png",
    "/images/image8.png",
    "/images/image9.png",
    "/images/image10.png",
    "/images/image11.png",
    "/images/image12.png",
    "/images/image13.png",
    "/images/image14.png",
    "/images/image15.png",
    "/images/image16.png",
  ];

  return (
    <section className="top-imagesContent-container">
      <div className="overlay"></div>
      <div className="top-images-container">
        <img
          className="abstract-mobile"
          src="/abstract.png"
          alt="abstract-icon"
        />
        <div className="textContainer">
          <p className="heading">Find the best movies</p>
          <p className="paragraph smallWords">
            We have a amazing collection of almost 95% of every movie ever made!
          </p>
          <a className="movieButton" href="/movies" aria-label="Search movies">
            Start searching now
          </a>
        </div>
        <div className="grid-container">
          {images.map((image, index) => (
            <div
              key={index}
              className="grid-item"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
