import { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { MovieItem } from "./MovieItem";

export const MovieList = ({ movies, search, setMovies }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const closeModal = (e) => {
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

  return (
    <>
      <ul className=" flex gap-2.5 flex-wrap px-10">
        {filteredData.map((movie, i) => (
          <>
            <input
              type="checkbox"
              value={movie.done}
              onChange={() =>
                setMovies((prev) => {
                  return prev.map((item) =>
                    movie.id === item.id ? { ...item, done: !item.done } : item,
                  );
                })
              }
            />
            <MovieItem
              movie={movie}
              key={movie.id}
              onClick={() => setActiveIndex(i)}
            />
          </>
        ))}
      </ul>
      {activeIndex !== null && (
        <Modal movies={movies} setActiveIndex={setActiveIndex}>
          <MovieItem movie={movies[activeIndex]} />
        </Modal>
      )}
    </>
  );
};
