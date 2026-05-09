import type { Dispatch, SetStateAction } from "react";
import type { Product } from "./Shop";
import { ProductCart } from "./ProductCard";

type ProductsProps = {
  products: Product[];
  setCartProducts: Dispatch<SetStateAction<Product[]>>;
  variant?: "cart" | "list";
};
export const Products = ({
  products,
  setCartProducts,
  variant,
}: ProductsProps) => {
  return (
    <ul className="flex gap-2.5">
      {products.map((item) => (
        <ProductCart
          item={item}
          key={item.id}
          variant={variant}
          setCartProducts={setCartProducts}
        />
      ))}
    </ul>
  );
};
