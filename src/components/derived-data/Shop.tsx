import { useState } from "react";
import { Products } from "./Products";
import { ShoppingCart } from "./Shopping-cart";

const data = [
  { name: "Apple", price: 2, id: "1 " },
  { name: "Orange", price: 8, id: "2 " },
  { name: "raspberry", price: 10, id: "3" },
];

export type Product = {
  name: string;
  price: number;
  id: string;
};
export const Shop = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  return (
    <section className="p-10">
      <Products products={data} setCartProducts={setCartProducts} />

      <ShoppingCart
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
    </section>
  );
};
