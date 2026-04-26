export const MovieItem = ({ movie, onClick }) => {
  return (
    <li onClick={onClick} className=" border border-b-gray-950 p-2.5">
      <h1>{movie.title}</h1>
      <p>Year:{movie.year}</p>

      <p>Genre:{movie.genre}</p>

      <p>Rating:{movie.rating}</p>
    </li>
  );
};
