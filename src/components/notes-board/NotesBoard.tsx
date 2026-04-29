import { useState } from "react";
import { AddNote } from "./AddNote";
import { NotesList } from "./NotesList";
import { nanoid } from "nanoid/non-secure";

export type Note = {
  id: string;
  text: string;
  done: boolean;
};

export const NotesBoard = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [text, setText] = useState("");
  const [editID, setEditID] = useState<number | null>(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const note = { id: nanoid(), text, done: false };
    setNotes((prev) => [...prev, note]);
    setText("");
  };
  console.log(editID);

  return (
    <section>
      <AddNote text={text} setText={setText} handleSubmit={handleSubmit} />
      <NotesList notes={notes} setEditID={setEditID} />
    </section>
  );
};
