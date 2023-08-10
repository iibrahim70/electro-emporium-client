"use client";

import { usePathname } from "next/navigation";
import React from "react";

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const shouldShowModal = pathname.includes("/products/");
  if (shouldShowModal) return children;
  else return null;
};

export default ModalProvider;
