"use client";

import { useRouter } from "next/navigation";

const ProductModalOverlay = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="fixed z-[2] bg-transparent top-0 left-0 right-0 bottom-0 w-screen h-screen"
    ></div>
  );
};

export default ProductModalOverlay;