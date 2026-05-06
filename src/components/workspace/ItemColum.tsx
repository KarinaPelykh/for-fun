import { useDraggable, useDroppable } from "@dnd-kit/react";
import type { Columns, Tasks } from "./Columns";
import type { Dispatch, SetStateAction } from "react";

type ItemColumProps = {
  column: Columns;
  tasks: Tasks[];
  setTasks: Dispatch<SetStateAction<Tasks[]>>;
};

type CardProps = {
  task: Tasks;
  onClick: () => void;
};

const Card = ({ task, onClick }: CardProps) => {
  const { ref } = useDraggable({
    id: task.id,
  });

  return (
    <div
      onClick={onClick}
      ref={ref}
      className="w-full  bg-white rounded-2xl p-2.5 flex flex-col overflow-hidden cursor-pointer"
    >
      {task.title}
      <p>{task.subtitle}</p>
      <div className="flex-1 w-full">
        <img
          src={task.image}
          className="w-full h-32 object-cover"
          width={250}
          height={100}
        />
      </div>
    </div>
  );
};

export const ItemColum = ({ column, tasks, setTasks }: ItemColumProps) => {
  const { ref } = useDroppable({ id: column.id });

  const deleteCard = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <li
      ref={ref}
      className="bg-[rgba(0,0,0,0.56)] py-10 px-2.5 rounded-3xl w-75 min-h-60 h-auto transition-all duration-200  "
    >
      <p className="text-white text-center mb-5">{column.id}</p>
      <div className="flex flex-wrap gap-2.5">
        {tasks
          .filter((card) => card.status === column.id)
          .map((task) => (
            <Card
              task={task}
              key={task.id}
              onClick={() => deleteCard(task.id)}
            />
          ))}
      </div>
    </li>
  );
};
