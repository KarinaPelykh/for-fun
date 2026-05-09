import { useState, type Dispatch, type SetStateAction } from "react";
import { Products } from "./Products";
import type { Product } from "./Shop";

const PROMO = "PROMO";

type ShoppingCartProps = {
  cartProducts: Product[];
  setCartProducts: Dispatch<SetStateAction<Product[]>>;
};

export const ShoppingCart = ({
  cartProducts,
  setCartProducts,
}: ShoppingCartProps) => {
  const [promo, setPromo] = useState("");

  const total = cartProducts.reduce((sum, item) => {
    return (sum += item.price);
  }, 0);

  const tenPercent = total * 0.1;

  return (
    <div className="w-75 p-2.5 bg-blue-500 rounded-2xl">
      <h1>Cart</h1>
      <Products
        products={cartProducts}
        setCartProducts={setCartProducts}
        variant="cart"
      />
      <p>Total: ${total}</p>

      {total === 0 && (
        <p className="text-red-300">You have to add something!</p>
      )}

      <p>Items count:{cartProducts.length !== 0 ? cartProducts.length : 0}</p>
      <div>
        {PROMO === promo && total !== 0 ? (
          <p>Discount: 10%</p>
        ) : (
          <div>
            Add promo kod
            <input
              placeholder=" PROMO"
              value={promo}
              className=" border border-white rounded-2xl p-2.5"
              onChange={(e) =>
                setPromo(e.target.value.trim().toLocaleUpperCase())
              }
            />
          </div>
        )}
      </div>

      <p>Final price: ${PROMO === promo ? total - tenPercent : 0}</p>
    </div>
  );
};
