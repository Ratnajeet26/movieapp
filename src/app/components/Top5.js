"use client";

import { useEffect, useState } from "react";

const Top5 = () => {
  const [topMovie, setTopMovie] = useState([]);

  useEffect(() => {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d00f98836fmshe6e2ecb7ffb4f95p181575jsn210ef20d99dd",
        "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    const fetchImages = async () => {
      const response = await fetch(url, options);
      const result = await response.json();

      const top = result.sort((a, b) => b.rating - a.rating).slice(0, 5);

      setTopMovie(top);
    };

    fetchImages();
  }, []);

  return (
    <div align="center">
      <div className="container mt-2">
        <div className="row">
          {topMovie.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <div className="card-text">
                    <p>{item.description}</p>
                    <p>{item.rating}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top5;
