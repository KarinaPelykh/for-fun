import { useEffect, useState } from "react";
import { NotesItem } from "./NoteItem";
import type { Note } from "./NotesBoard";

type NotesListProps = {
  notes: Note[];
};

export const NotesList = ({ notes }: NotesListProps) => {
  const [editID, setEditID] = useState("");

  const [editedNote, setEditedNote] = useState("");

  useEffect(() => {
    const hadleClse = (e: KeyboardEvent) => {};
  }, []);

  return (
    <ul className="flex gap-2.5 mt-10 px-10">
      {notes.map((note) => (
        <NotesItem
          key={note.id}
          note={note}
          setEditID={setEditID}
          editID={editID}
          editedNote={editedNote}
          setEditedNote={setEditedNote}
        />
      ))}
    </ul>
  );
};
