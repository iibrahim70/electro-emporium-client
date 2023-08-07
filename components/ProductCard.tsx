import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import NewLink from "./NewLink";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  images: string[];
  rating: number;
  price: number;
  category: string;
  isFeatured: boolean;
  isNew: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  images,
  price,
  rating,
  category,
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden p-6 space-y-5">
      <div className="w-full h-60 overflow-hidden rounded-xl shadow-md">
        <Image
          src={images[0]}
          alt={title}
          width={720}
          height={360}
          priority
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-2.5">
        <span className="text-sm uppercase font-semibold tracking-widest text-red bg-red/10 px-3 py-1.5 rounded-lg">
          {category}
        </span>
        <h3 className="text-3xl truncate">{title}</h3>
        <p className="text-dark/60">{description.substring(0, 120)}...</p>
        <hr />
        <p>Rating: {rating}</p>
        <div className="flex items-center justify-between gap-5">
          <p className="text-3xl">{formatCurrency(price)}</p>
          <NewLink href={`/products/${id}`} color="purple">
            Buy Now
          </NewLink>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;