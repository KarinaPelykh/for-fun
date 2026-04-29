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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      const note = { id: nanoid(), text, done: false };
      setNotes((prev) => [...prev, note]);
      setText("");
    }
  };

  return (
    <section>
      <AddNote text={text} setText={setText} handleSubmit={handleSubmit} />
      <NotesList notes={notes} />
    </section>
  );
};
