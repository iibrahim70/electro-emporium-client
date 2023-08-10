import { formatCurrency } from "@/utils/formatCurrency";
import ProductDetailModalButtons from "./ProductDetailModalButtons";

interface ProductDetailModalContentProps {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  images: string[];
  isMainPage?: boolean;
}

const ProductDetailModalContent: React.FC<ProductDetailModalContentProps> = ({
  id,
  title,
  description,
  category,
  price,
  rating,
  images,
  isMainPage,
}) => {
  const product = { id, title, description, price, image: images[0] };

  return (
    <div className="w-full h-full order-first md:order-last flex flex-col gap-2.5 overflow-hidden">
      <h3 className="text-4xl">{title}</h3>
      <div className="flex items-center gap-5">
        <span className="text-xs uppercase font-semibold tracking-widest text-orange bg-orange/10 px-3 py-1.5 rounded">
          {category}
        </span>
        <p>Rating: {rating}</p>
      </div>
      <p className="text-4xl">{formatCurrency(price)}</p>
      <ProductDetailModalButtons {...product} />
      <div className="mt-5 flex flex-col gap-2.5">
        <p className="font-semibold uppercase text-dark/75 border-b pb-2.5">
          Product Description
        </p>
        <p className="text-dark/60">
          {isMainPage ? description : description.substring(0, 200)}
          {isMainPage ? null : "..."}
        </p>
      </div>
    </div>
  );
};

export default ProductDetailModalContent;
