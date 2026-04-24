import type { Dispatch, SetStateAction } from "react";

type GalleryItemProps = {
  breed: { url: string };
  setIsOpen: (val: boolean) => void;
  setActive: Dispatch<SetStateAction<null | number>>;
  index: number;
};

export const GalleryItem = ({
  breed,
  setIsOpen,
  setActive,
  index,
}: GalleryItemProps) => {
  return (
    <li
      className="w-50  h-50"
      onClick={() => {
        setIsOpen(true);
        setActive(index);
      }}
    >
      <img src={breed.url} className="size-full block  object-cover" />
    </li>
  );
};
