"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const CardComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "2be6056fc5msh15c12fa8704402ep1e458fjsn5be67c9f4cb8",
        "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };

    const fetchData = async () => {
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div className="card-group-deck container mt-4 ">
      <div className="row card-group mt-3">
        {data.map((item) => (
          <div className="col-md-4 mt-4" key={item.id}>
            <div className="card h-100">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href={`allmovies/${item.id}`}>{item.title}</Link>
                </h5>
                <div className="card-text">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
