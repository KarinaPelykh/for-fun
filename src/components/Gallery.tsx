import { useEffect, useState } from "react";
import { handleGetCat } from "../lib/sevice";
import { GalleryList } from "./GalleryList";

export const Gallery = () => {
  const [data, serData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await handleGetCat();
        serData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <section className="size-full">
      <GalleryList data={data} setIsOpen={setIsOpen} isOpen={isOpen} />
    </section>
  );
};
