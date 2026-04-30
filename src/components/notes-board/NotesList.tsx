import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { NotesItem } from "./NoteItem";
import type { Note } from "./NotesBoard";

type NotesListProps = {
  notes: Note[];
  setNotes: Dispatch<SetStateAction<Note[]>>;
};

export const NotesList = ({ notes, setNotes }: NotesListProps) => {
  const [editID, setEditID] = useState("");

  const [newText, setNewText] = useState("");

  useEffect(() => {
    const handleClose = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setNotes((prev) =>
          prev.map((note) =>
            editID === note.id ? { ...note, text: newText } : note,
          ),
        );
      }

      if (e.key === "Escape") {
        setEditID("");
      }
    };

    window.addEventListener("keydown", handleClose);
    return () => {
      window.removeEventListener("keydown", handleClose);
    };
  }, [editID, newText, setNotes]);

  const togglePinnedNotes = (id: string) => {
    setNotes((prev) =>
      prev.map((note) =>
        id === note.id ? { ...note, pinned: !note.pinned } : note,
      ),
    );
  };

  const sortedNotes = [...notes].sort((a, b) => {
    if (a.pinned === b.pinned) return 0;
    if (a.pinned) return -1;
    return 1;
  });

  return (
    <ul className="flex flex-wrap h-fit justify-center gap-x-2.5 gap-y-2.5 mt-10 px-10">
      {sortedNotes.map((note) => (
        <NotesItem
          key={note.id}
          note={note}
          setEditID={setEditID}
          editID={editID}
          newText={newText}
          setNewText={setNewText}
          togglePinnedNotes={togglePinnedNotes}
        />
      ))}
    </ul>
  );
};
