import type { ReactNode } from "react";

type SideBarProps = {
  children: ReactNode;
};

export const SideBar = ({ children }: SideBarProps) => {
  return (
    <div className="w-fit   h-screen pt-2.5  px-2.5 my-4  ml-4 rounded-3xl bg-amber-400 border">
      {children}
    </div>
  );
};
