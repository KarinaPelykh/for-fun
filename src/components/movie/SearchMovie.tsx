export const SearchMovie = ({ setSearch, search }) => {
  return (
    <input
      type="text"
      placeholder=" find movie"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
