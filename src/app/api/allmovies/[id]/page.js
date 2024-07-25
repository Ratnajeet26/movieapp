import Link from "next/link";

export default async function getMovie({ params }) {
  const id = params.id;
  const url = `https://imdb-top-100-movies.p.rapidapi.com/${id}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "2be6056fc5msh15c12fa8704402ep1e458fjsn5be67c9f4cb8",
      "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();
  console.log(data);
  return (
    <>
      <div align="center">
        <div className="card" style={{ width: "30rem", height: "46rem" }}>
          <img src={data.image} className="card-img-top" alt={data.title} />
          <div className="card-body">
            <h4 className="btn">
              <Link href="/">HOME</Link>
            </h4>
            <div className="card-text">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
