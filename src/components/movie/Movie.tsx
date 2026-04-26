import { useEffect, useState } from "react";
import axios from "axios";
import { MovieList } from "./MovieList";
export const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovie() {
      try {
        const res = await axios.get("/public/movie.json");
        setMovies(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, []);

  return (
    <section>
      <MovieList movies={movies} />
    </section>
  );
};
