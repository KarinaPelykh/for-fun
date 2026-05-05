import type { ReactNode } from "react";

type ActiveBoard = {
  image: string;
  title: string;
};
type BoardBlockProps = {
  activeBoard: ActiveBoard;
  children: ReactNode;
};

export const BoardBlock = ({ activeBoard, children }: BoardBlockProps) => {
  return (
    <div className="size-screen relative px-10">
      <img
        src={activeBoard?.image}
        className="w-full h-auto block absolute top-0 left-0 -z-20"
      />
      <p className="text-white text-center mb-10">{activeBoard?.title}</p>
      {children}
    </div>
  );
};
