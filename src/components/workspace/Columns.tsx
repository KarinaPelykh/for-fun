export const Columns = ({ columns, tasks }) => {
  return (
    <ul className="flex justify-center gap-15 ">
      {columns.map((column) => (
        <li
          key={column.id}
          className="bg-[rgba(0,0,0,0.56)] py-10 px-2.5 rounded-3xl w-75 min-h-150 max-h-screen"
        >
          <p className="text-white text-center mb-10">{column.id}</p>
          <div className="flex flex-wrap gap-1">
            {tasks
              .filter((card) => card.id === column.id)
              .map((task) => (
                <div key={task.id} className="w-full h-50 bg-white rounded-2xl">
                  {task.title}
                </div>
              ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
