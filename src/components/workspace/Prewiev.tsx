type Board = {
  id: number;
  title: string;
  image: string;
};
type PreviewProps = {
  board: Board[];
  setBoardID: (id: number) => void;
};

export const Preview = ({ board, setBoardID }: PreviewProps) => {
  return (
    <div className="py-10 px-5">
      <p className="">here you can create your board</p>
      <ul className="flex flex-wrap gap-2.5">
        {board.map((item) => (
          <li
            key={item.id}
            onClick={() => setBoardID(item.id)}
            className="cursor-pointer border border-b-fuchsia-800 w-50 h-50 rounded-2xl p-2 overflow-hidden"
          >
            <p className="text-pink-400 text-bold mb-2">{item.title}</p>
            <img
              alt="board"
              width={200}
              height={200}
              src={item.image}
              className="w-full h-full block object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
