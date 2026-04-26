import { MovieItem } from "./MovieItem";

export const MovieList = ({ movies }) => {
  return (
    <ul className=" flex gap-2.5 flex-wrap px-10">
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};
