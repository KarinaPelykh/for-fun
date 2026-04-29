import type { Note } from "./NotesBoard";

type NotesItemProps = {
  note: Note;
  setEditID: (val: string) => void;
  editID: string;
  editedNote: string;
  setEditedNote: (val: string) => void;
};

export const NotesItem = ({
  note,
  setEditID,
  editID,
  setEditedNote,
  editedNote = note.text,
}: NotesItemProps) => {
  return (
    <li
      onClick={() => setEditID(note.id)}
      className="border border-b-cyan-500 rounded-3xl text-blue-700 p-10 w-70 text-center "
    >
      {editID === note.id ? (
        <input
          value={editedNote}
          onChange={(e) => setEditedNote(e.target.value)}
        />
      ) : (
        <p>{note.text}</p>
      )}
    </li>
  );
};
