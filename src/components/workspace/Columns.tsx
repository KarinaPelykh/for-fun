import { ItemColum } from "./ItemColum";
export type Columns = {
  id: string;
};

export type Tasks = {
  id: string;
  status: string;
  title: string;
  image: string;
  subtitle: string;
};

type ColumnsProps = {
  columns: Columns[];
  tasks: Tasks[];
};

export const Columns = ({ columns, tasks }: ColumnsProps) => {
  return (
    <ul className="flex justify-center gap-15 ">
      {columns.map((column) => (
        <ItemColum key={column.id} column={column} tasks={tasks} />
      ))}
    </ul>
  );
};
