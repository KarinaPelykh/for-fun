import { useEffect, useRef, useState } from "react";
import { GalleryItem } from "./GalleryItem";
import { Modal } from "./Modal";

type GalleryListProps = {
  data: { url: string; id: string }[];
  setIsOpen: (val: boolean) => void;
  isOpen: boolean;
};

export const GalleryList = ({ data, setIsOpen, isOpen }: GalleryListProps) => {
  const [active, setActive] = useState<null | number>(null);
  const inputRef = useRef(null);

  const prev = () => {
    setActive((prev) => ((prev ?? 0) + 1) % data.length);
  };

  const next = () => {
    setActive((prev) => ((prev ?? 0) - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const d = (e: Event) => {
      console.log(inputRef.current === e.target);

      if (inputRef.current) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", d);
    return () => {
      document.removeEventListener("click", d);
    };
  }, [setIsOpen, isOpen]);

  useEffect(() => {
    const closeWindow = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", closeWindow);

    return () => {
      document.removeEventListener("keydown", closeWindow);
    };
  }, [setIsOpen]);

  return (
    <>
      <ul className="flex gap-2.5 flex-wrap">
        {data.map((breed, i) => {
          return (
            <GalleryItem
              key={breed.id}
              breed={breed}
              setIsOpen={setIsOpen}
              setActive={setActive}
              index={i}
            />
          );
        })}
      </ul>
      {isOpen && (
        <div ref={inputRef}>
          <Modal prev={prev} next={next}>
            <img
              src={active ? data[active].url : ""}
              className="w-50 h-auto block object-contain"
            />
          </Modal>
        </div>
      )}
    </>
  );
};
