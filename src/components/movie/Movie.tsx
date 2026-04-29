import { useEffect, useState } from "react";
import axios from "axios";
import { MovieList } from "./MovieList";
import { SearchMovie } from "./SearchMovie";
import { WatchList } from "./Watchlist";
export type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
};

export const Movie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");
  const [watchList, setWatchList] = useState<Movie[]>([]);

  useEffect(() => {
    async function getMovie() {
      try {
        const res = await axios.get("/movie.json");
        setMovies(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, []);

  const toggleDone = (movie: Movie) => {
    setWatchList((prev) => {
      return prev.some((item) => item?.id === movie.id)
        ? prev.filter((m) => m?.id !== movie.id)
        : [...prev, movie];
    });
  };

  // const toggleDone = () = {
  // setMovies((prev) =>
  //   prev.map((item) =>
  //     item.id === id ? { ...item, done: !item.done } : item,
  //   ),
  // );
  // }

  return (
    <section>
      <SearchMovie search={search} setSearch={setSearch} />
      <MovieList
        movies={movies}
        search={search}
        toggleDone={toggleDone}
        watchList={watchList}
      />
      <WatchList watchList={watchList} />
    </section>
  );
};
