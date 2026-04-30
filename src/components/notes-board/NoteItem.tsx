import type { Note } from "./NotesBoard";

type NotesItemProps = {
  note: Note;
  setEditID: (val: string) => void;
  editID: string;
  newText: string;
  setNewText: (val: string) => void;
  togglePinnedNotes: (val: string) => void;
};

export const NotesItem = ({
  note,
  setEditID,
  editID,
  setNewText,
  newText,
  togglePinnedNotes,
}: NotesItemProps) => {
  return (
    <li className="border relative border-b-cyan-500 flex flex-col rounded-3xl text-blue-700  py-5 px-10 w-60 min-h-37.5 text-center ">
      {note.pinned ? (
        <button className="  cursor-pointer  absolute -top-4 right-0 bg-transparent ">
          📌
        </button>
      ) : null}
      {editID === note.id ? (
        <input
          className="border-b-cyan-900 border rounded-2xl text-fuchsia-500 outline-none px-2.5"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <p className="  wrap-break-word w-full mx-auto">{note.text}</p>
      )}
      <div className="flex justify-between mt-auto">
        <button
          type="button"
          onClick={() => togglePinnedNotes(note.id)}
          className=" text-fuchsia-800 font-bold cursor-pointer mt-2.5"
        >
          {note.pinned ? "Unpin" : "Pin"}
        </button>
        <button
          type="button"
          onClick={() => {
            setEditID(note.id);
            setNewText(note.text);
          }}
          className=" text-green-400 font-bold cursor-pointer mt-2.5"
        >
          Edit
        </button>

        <button className=" text-red-700 font-bold cursor-pointer mt-2.5">
          Delete
        </button>
      </div>
    </li>
  );
};
