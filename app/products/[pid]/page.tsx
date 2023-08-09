import ProductDetailModalContent from "@/components/ProductDetailModalContent";
import ProductDetailModalImage from "@/components/ProductDetailModalImage";
import { products } from "@/data/products";

const ProductDetailPage = ({ params }: { params: { pid: string } }) => {
  const product = products.find((product) => product.id === +params.pid);

  return (
    <main>
      <section className="wrapper section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProductDetailModalImage
            images={product?.images!}
            title={product?.title!}
          />
          <ProductDetailModalContent {...product!} isMainPage />
        </div>
      </section>
    </main>
  );
};

export default ProductDetailPage;
