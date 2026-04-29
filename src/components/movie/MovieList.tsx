import { Fragment, useEffect, useState } from "react";
import { Modal } from "./Modal";
import { MovieItem } from "./MovieItem";
import type { Movie } from "./Movie";

type MovieListProps = {
  movies: Movie[];
  search: string;
  toggleDone: (val: Movie) => void;
  watchList: Movie[];
};
export const MovieList = ({
  movies,
  search,
  toggleDone,
  watchList,
}: MovieListProps) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  useEffect(() => {
    const closeModal = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };
    window.addEventListener("keydown", closeModal);

    return () => window.removeEventListener("keydown", closeModal);
  }, []);

  const filteredData = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.trim().toLowerCase()),
  );

  const handleWatchedList = (id?: number) =>
    watchList.some((item) => item?.id === id);

  const isInWatchList = handleWatchedList();

  return (
    <>
      <ul className="flex gap-2.5 flex-wrap px-10">
        {filteredData.map((movie) => {
          return (
            <Fragment key={movie.id}>
              <input
                type="checkbox"
                checked={isInWatchList}
                onChange={() => {
                  toggleDone(movie);
                  handleWatchedList(movie.id);
                }}
                // value={movie.done}
                // onChange={() => toggleDone(movie.id)}
              />
              <MovieItem
                movie={movie}
                onClick={() => setActiveIndex(movie.id)}
              />
            </Fragment>
          );
        })}
      </ul>
      {activeIndex !== null && (
        <Modal movies={movies} setActiveIndex={setActiveIndex}>
          <MovieItem movie={movies[activeIndex]} />
        </Modal>
      )}
    </>
  );
};
