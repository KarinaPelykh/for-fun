import type { Dispatch, SetStateAction } from "react";
import type { Task } from "../App";

type ItemProps = {
  item: Task;
  setData: Dispatch<SetStateAction<Task[]>>;
  setEditID: (val: number | null) => void;
  editId: number | null;
  setText: (val: string) => void;
  text: string;
};

export const Item = ({
  item,
  setData,
  setEditID,
  editId,
  setText,
  text,
}: ItemProps) => {
  const handleCheckbox = () => {
    setData((prevState) =>
      prevState.map((el) =>
        item.id === el.id ? { ...el, done: !el.done } : el,
      ),
    );

    setEditID(null);
  };

  return (
    <li>
      {item.id === editId ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <div>
          <input
            type="checkbox"
            checked={item.done}
            onChange={handleCheckbox}
          />
          {item.text}
        </div>
      )}

      <button
        onClick={() => {
          setEditID(item.id);
          setText(item.text);
        }}
      >
        edit
      </button>
    </li>
  );
};
