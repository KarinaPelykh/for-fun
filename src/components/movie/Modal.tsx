import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { Movie } from "./Movie";

type ModalProps = {
  children: ReactNode;
  movies: Movie[];
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
};

export const Modal = ({ children, setActiveIndex, movies }: ModalProps) => {
  const next = () => {
    setActiveIndex((prev) => ((prev ?? 0) + 1) % movies.length);
  };
  const prev = () => {
    setActiveIndex((prev) => ((prev ?? 0) - 1 + movies.length) % movies.length);
  };

  return (
    <div className="overlay fixed inset-0 size-full bg-[rgba(0,0,0,0.11)] flex justify-center items-center">
      <div className=" absolute w-60  bg-white rounded-2xl">
        <div>{children}</div>
        <div className="flex justify-between">
          <button onClick={next}>Next</button>
          <button onClick={prev}>Prev</button>
        </div>
      </div>
    </div>
  );
};
