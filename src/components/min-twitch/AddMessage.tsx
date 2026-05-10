export const AddMessage = ({ text, setText, handleSubmit }) => {
  return (
    <form
      className="mt-10 rounded-2xl bg-blue-400 p-5 flex flex-col"
      onSubmit={handleSubmit}
    >
      <label className="text-white">Add message</label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="message"
      />
      <button
        type="submit"
        className="text-white border border-amber-400 rounded-2xl mt-2"
      >
        Submit
      </button>
    </form>
  );
};
