import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { Item } from "./Item";
import type { Task } from "../App";


type ToDoListProps = {
  data: Task[];
  setData: Dispatch<SetStateAction<Task[]>>;
};

export const ToDoList = ({ data, setData }: ToDoListProps) => {
  const [editId, setEditID] = useState<null | number>(null);

  const [text, setText] = useState("");

  useEffect(() => {
    const handleKeyEvent = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setData((prevState) =>
          prevState.map((task) =>
            editId === task.id ? { ...task, text } : task,
          ),
        );
        setEditID(null);
      }

      if (e.key === "Escape") {
        setEditID(null);
      }
    };
    window.addEventListener("keydown", handleKeyEvent);
    return () => window.removeEventListener("keydown", handleKeyEvent);
  }, [editId, setData, setEditID, text]);

  return (
    <ul>
      {data.map((item) => (
        <Item
          key={item.id}
          item={item}
          setData={setData}
          setEditID={setEditID}
          editId={editId}
          text={text}
          setText={setText}
        />
      ))}
    </ul>
  );
};
