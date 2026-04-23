export const GalleryItem = ({ breed, setIsOpen, setActive, index }) => {
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
