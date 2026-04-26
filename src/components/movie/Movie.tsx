import { useEffect, useState } from "react";
import axios from "axios";
import { MovieList } from "./MovieList";
import { SearchMovie } from "./SearchMovie";
import { WatchLIst } from "./Watchlist";
export const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

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
      <SearchMovie search={search} setSearch={setSearch} />
      <MovieList movies={movies} search={search} setMovies={setMovies} />
      <WatchLIst movies={movies} />
    </section>
  );
};
