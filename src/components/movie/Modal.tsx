import type { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className="overlay fixed inset-0 size-full bg-[rgba(0,0,0,0.11)] flex justify-center items-center">
      <div className=" absolute w-60  bg-white rounded-2xl">
        <div>{children}</div>
        <div className="flex justify-between">
          <button>Next</button>
          <button>Prev</button>
        </div>
      </div>
    </div>
  );
};
