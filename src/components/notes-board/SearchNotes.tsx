type SearchNoteProps = {
  search: string;
  setSearch: (val: string) => void;
};

export const SearchNotes = ({ search, setSearch }: SearchNoteProps) => {
  return (
    <div className=" mt-10 flex flex-col bg-mauve-50 w-75 gap-5 mx-auto border-2 border-b-emerald-700 rounded-3xl p-2.5">
      <label className="text-cyan-400">Let's filter all notes🤩 </label>
      <input
        type="text"
        placeholder="Filter notes"
        className=" border border-amber-950 rounded-3xl p-2.5  outline-none"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
};
