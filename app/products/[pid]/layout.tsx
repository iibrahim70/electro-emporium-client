import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electro Emporium | Product Details",
};

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
