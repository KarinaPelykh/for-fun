export const BoardBlock = ({ definedBoard, children }) => {
  return (
    <div className="size-screen relative px-10">
      <img
        src={definedBoard?.image}
        className="w-full h-auto block absolute top-0 left-0 -z-20"
      />
      <p className="text-white text-center mb-10">{definedBoard?.title}</p>
      {children}
    </div>
  );
};
