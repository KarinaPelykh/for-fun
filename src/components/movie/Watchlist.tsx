import { MovieItem } from "./MovieItem";

export const WatchLIst = ({ movies }) => {
  const filtered = movies.filter((movie) => movie.done);
  return (
    <div>
      {filtered.length !== 0 && (
        <>
          <h1>Watched movies</h1>
          <ul>
            {filtered.map((movie) => (
              <MovieItem movie={movie} key={movie.id} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
