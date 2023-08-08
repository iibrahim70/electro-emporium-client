"use client";

import { useState } from "react";
import Counter from "./Counter";
import NewLink from "./NewLink";

const ProductDetailModalButtons = () => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="grid grid-cols-2 gap-5 mt-5">
      <Counter quantity={quantity} setQuantity={setQuantity} />
      <div>
        <NewLink href="/busket" color="purple">
          Add to Busket
        </NewLink>
      </div>
    </div>
  );
};
export default ProductDetailModalButtons;
