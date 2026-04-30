import { useState } from "react";
import { AddNote } from "./AddNote";
import { NotesList } from "./NotesList";
import { nanoid } from "nanoid/non-secure";
import { SideBar } from "./Sidebar";
import { SearchNotes } from "./SearchNotes";

export type Note = {
  id: string;
  text: string;
  done: boolean;
  pinned: false;
};

export const NotesBoard = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      const note = { id: nanoid(), text, done: false, pinned: false };
      setNotes((prev) => [...prev, note]);
      setText("");
    }
  };
  const filterData = notes.filter((note) =>
    note.text.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <section className=" flex ">
      <SideBar>
        <AddNote text={text} setText={setText} handleSubmit={handleSubmit} />
        <SearchNotes setSearch={setSearch} search={search} />
      </SideBar>

      <NotesList notes={filterData} setNotes={setNotes} />
    </section>
  );
};
