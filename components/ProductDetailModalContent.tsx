import { formatCurrency } from "@/utils/formatCurrency";
import NewLink from "./NewLink";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import ProductDetailModalButtons from "./ProductDetailModalButtons";

interface ProductDetailModalContentProps {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
}

const ProductDetailModalContent: React.FC<ProductDetailModalContentProps> = ({
  id,
  title,
  description,
  category,
  price,
  rating,
}) => {
  return (
    <div className="w-full h-full order-first md:order-last flex flex-col gap-2.5 overflow-hidden">
      <h3 className="text-4xl">{title}</h3>
      <div className="flex gap-5 items-center">
        <span className="text-sm uppercase font-semibold tracking-widest text-red bg-red/10 px-3 py-1.5 rounded-lg">
          {category}
        </span>
        <p>Rating: {rating}</p>
      </div>
      <p className="text-4xl">{formatCurrency(price)}</p>
      <ProductDetailModalButtons />
      
      <div className="mt-5 flex flex-col gap-2.5">
        <p className="uppercase font-semibold text-dark/75 underline underline-offset-2">
          Product Description
        </p>
        <p className="text-dark/60">{description.substring(0, 200)}...</p>
      </div>
    </div>
  );
};

export default ProductDetailModalContent;
