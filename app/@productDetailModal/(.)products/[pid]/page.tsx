import ProductDetailModalContent from "@/components/ProductDetailModalContent";
import ProductDetailModalImage from "@/components/ProductDetailModalImage";
import ProductModalClose from "@/components/ProductModalClose";
import ProductModalOverlay from "@/components/ProductModalOverlay";
import { products } from "@/data/products";

const ProductDetailModal = ({ params }: { params: { pid: string } }) => {
  const product = products.find((product) => product.id === +params.pid);

  return (
    // overlay
    <div className="fixed z-[1] top-0 left-0 right-0 bottom-0 w-screen h-screen bg-dark/20 flex justify-center items-center">
      <ProductModalOverlay />
      {/* modal */}
      <div className="w-full h-full md:w-11/12  md:h-4/6 xl:h-4/5 max-w-5xl  absolute z-[3] bg-light p-10 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductDetailModalImage
          images={product?.images!}
          title={product?.title!}
        />
        <ProductDetailModalContent {...product!} />
        <ProductModalClose />
      </div>
    </div>
  );
};

export default ProductDetailModal;
