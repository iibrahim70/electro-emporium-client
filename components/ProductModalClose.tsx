"use client";

import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";

const ProductModalClose = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="w-8 h-8 border border-red absolute z-[4] right-4 top-4 rounded-lg flex items-center justify-center text-red bg-red/10 hover:bg-red hover:text-light duration-300 ease-in-out"
    >
      <AiOutlineClose />
    </button>
  );
};

export default ProductModalClose;
