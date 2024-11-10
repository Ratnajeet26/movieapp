import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const Page = async ({ params }) => {
  const id = params.id;
  const url = `https://imdb-top-100-movies.p.rapidapi.com/${id}`;
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
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        {" "}
        Netflix \ <span> {data.title} </span>{" "}
      </h2>
      <div className={styles.grid_two_section}>
        <div>
          <img src={data.image} alt={data.title} width={600} height={400} />
        </div>
        <div>
          <h1>{data.title}</h1>
          <br></br>
          <br></br>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
