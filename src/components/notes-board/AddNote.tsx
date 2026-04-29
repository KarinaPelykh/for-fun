type AddNoteProps = {
  text: string;
  setText: (val: string) => void;
  handleSubmit: (e: SubmitEvent) => void;
};

export const AddNote = ({ text, setText, handleSubmit }: AddNoteProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col w-75 gap-5 mx-auto border border-b-emerald-700 rounded-3xl p-2.5"
    >
      <label className="block text-blue-400">Make notes for today 😇</label>
      <input
        type="text"
        placeholder="add note"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className=" border border-amber-950 rounded-3xl p-2.5"
      />

      <button
        type="submit"
        className=" bg-fuchsia-500 rounded-2xl w-20 mx-auto text-white"
      >
        add
      </button>
    </form>
  );
};
