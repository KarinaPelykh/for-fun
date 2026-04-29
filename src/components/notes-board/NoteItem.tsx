import type { Note } from "./NotesBoard";

type NotesItemProps = {
  note: Note;
  setEditID: (val: string) => void;
};

export const NotesItem = ({ note, setEditID }: NotesItemProps) => {
  return (
    <li
      onClick={() => setEditID(note.id)}
      className="border border-b-cyan-500 rounded-3xl text-blue-700 p-10 w-70 text-center "
    >
      {note.text}
    </li>
  );
};
