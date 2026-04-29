import { NotesItem } from "./NoteItem";
import type { Note } from "./NotesBoard";

type NotesListProps = {
  notes: Note[];
  setEditID: (val: string) => void;
};

export const NotesList = ({ notes, setEditID }: NotesListProps) => {
  return (
    <ul className="flex gap-2.5 mt-10 px-10">
      {notes.map((note) => (
        <NotesItem key={note.id} note={note} setEditID={setEditID} />
      ))}
    </ul>
  );
};
