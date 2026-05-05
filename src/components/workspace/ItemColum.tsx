import { useDraggable, useDroppable } from "@dnd-kit/react";
import type { Columns, Tasks } from "./Columns";
type ItemColumProps = {
  column: Columns;
  tasks: Tasks[];
};

type CardProps = {
    task:Tasks
}
const Card = ({ task }: CardProps) => {
  const { ref } = useDraggable({
    id: task.id,
  });

  return (
    <div
      ref={ref}
      className="w-full h-50 bg-white rounded-2xl p-2.5 flex flex-col overflow-hidden "
    >
      {task.title}
      <p>{task.subtitle}</p>
      <div className="flex-1 w-full">
        <img src={task.image} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export const ItemColum = ({ column, tasks }: ItemColumProps) => {
  const { ref } = useDroppable({ id: column.id });

  return (
    <li
      ref={ref}
      className="bg-[rgba(0,0,0,0.56)] py-10 px-2.5 rounded-3xl w-75 h-screen  overflow-hidden"
    >
      <p className="text-white text-center mb-5">{column.id}</p>
      <div className="flex flex-wrap gap-1 size-full">
        {tasks
          .filter((card) => card.status === column.id)
          .map((task) => (
            <Card task={task} key={task.id} />
          ))}
      </div>
    </li>
  );
};
