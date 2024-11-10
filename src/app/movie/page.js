import React from "react";
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url = process.env.RAPID_API;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "5efa1ef02dmsh6e480c3713b16afp1ce8afjsnc7b7ffcc8a7b",
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {data.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
