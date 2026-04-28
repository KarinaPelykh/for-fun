import { MovieItem } from "./MovieItem";

export const WatchLIst = ({ watchList }) => {
  return (
    <div>
      {watchList.length !== 0 && (
        <>
          <h1>Watched movies</h1>
          <ul>
            {watchList.map((movie) => (
              <MovieItem movie={movie} key={movie.id} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
