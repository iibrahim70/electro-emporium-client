import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const ProudctsPage = () => {
  return (
    <main>
      <section className="wrapper section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProudctsPage;
