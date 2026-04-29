import type { Movie } from "./Movie";
import { MovieItem } from "./MovieItem";

type WatchListProps = {
  watchList: Movie[];
};
export const WatchList = ({ watchList }: WatchListProps) => {
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
