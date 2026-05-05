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
    <>
      <p>here you can create your board</p>{" "}
      <ul>
        {board.map((item) => (
          <li
            key={item.id}
            onClick={() => setBoardID(item.id)}
            className="cursor-pointer"
          >
            <p>{item.title}</p>
            <img alt="board" width={200} height={200} src={item.image} />
          </li>
        ))}
      </ul>
    </>
  );
};
