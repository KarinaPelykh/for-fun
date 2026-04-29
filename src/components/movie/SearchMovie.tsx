type SearchMovieProps = {
  setSearch: (val: string) => void;
  search: string;
};

export const SearchMovie = ({ setSearch, search }: SearchMovieProps) => {
  return (
    <input
      type="text"
      placeholder=" find movie"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
