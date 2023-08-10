"use client";

import { useCallback, useState } from "react";
import Counter from "./Counter";
import { buttonVariants } from "./NewLink";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/product/productSlice";
import { useRouter } from "next/navigation";

interface ProductDetailModalButtonsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetailModalButtons: React.FC<ProductDetailModalButtonsProps> = ({
  id,
  title,
  description,
  price,
  image,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = useCallback(() => {
    dispatch(addToCart({ id, title, description, price, image, quantity }));
    router.push("/basket");
  }, [dispatch, id, title, description, price, image, quantity, router]);

  return (
    <div className="grid grid-cols-2 gap-5 mt-5">
      <Counter quantity={quantity} setQuantity={setQuantity} />
      <div>
        <button
          onClick={handleAddToCart}
          className={buttonVariants({ color: "purple" })}
        >
          Add to basket
        </button>
      </div>
    </div>
  );
};
export default ProductDetailModalButtons;
