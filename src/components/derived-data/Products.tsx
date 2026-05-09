import { nanoid } from "nanoid";
import type { Dispatch, SetStateAction } from "react";
import type { Product } from "./Shop";

type ProductsProps = {
  products: Product[];
  setCartProducts: Dispatch<SetStateAction<Product[]>>;
  variant?: "cart" | "list";
};
export const Products = ({
  products,
  setCartProducts,
  variant = "list",
}: ProductsProps) => {
  const handleAddCart = (item: Product) => {
    const card: Product = {
      ...item,
      id: nanoid(),
    };
    setCartProducts((prev) => [...prev, card]);
  };

  return (
    <ul className="flex gap-2.5">
      {products.map((item) => (
        <li
          key={item.id}
          className="p-5 rounded-2xl flex flex-wrap  gap-2.5  bg-fuchsia-200"
        >
          {variant === "cart" ? null : (
            <button
              onClick={() => handleAddCart(item)}
              className="bg-blue-600 rounded-2xl p-2.5 mt-10 mb-10 text-taupe-50"
            >
              Add to cart
            </button>
          )}
          {item.name} 1kg
          <span className="text-red-700">${item.price}</span>
          {variant === "cart" && (
            <button
              onClick={() =>
                setCartProducts((prev) =>
                  prev.filter((el) => item.id !== el.id),
                )
              }
            >
              delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};
