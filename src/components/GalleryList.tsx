import { useEffect, useRef, useState } from "react";
import { GalleryItem } from "./GalleryItem";
import { Modal } from "./Modal";

export const GalleryList = ({ data, setIsOpen, isOpen }) => {
  const [active, setActive] = useState(null);
  const inputRef = useRef(null);

  const prev = () => {
    setActive((prev) => (prev + 1) % data.length);
  };

  const next = () => {
    setActive((prev) => (prev - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const d = (e) => {
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
    const closeWindow = (e) => {
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
              src={data[active].url}
              className="w-50 h-auto block object-contain"
            />
          </Modal>
        </div>
      )}
    </>
  );
};
