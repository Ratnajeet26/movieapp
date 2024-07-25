import React, { useEffect, useState } from "react";
import styles from "../styles/Carousel.module.css";
import Top5 from "./Top5";

const CarouselWithBlur = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d00f98836fmshe6e2ecb7ffb4f95p181575jsn210ef20d99dd",
        "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    const fetchMovies = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const filteredMovies = data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 7);

        setMovies(filteredMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {movies.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {movies.map((movie, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div
                className="d-block w-100 carousel-bg"
                style={{
                  backgroundImage: `url(${movie.image})`,
                  filter: "blur(6px)",
                  height: "590px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <img
                src={movie.image}
                className="d-block w-40 mx-auto  position-absolute top-50 start-50 translate-middle"
                alt={movie.title}
                style={{ maxHeight: "580px", zIndex: 1 }}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Top5 />
    </>
  );
};

export default CarouselWithBlur;
