import { products } from "@/data/products";

const ProductDetailPage = ({ params }: { params: { pid: string } }) => {
  const product = products.find((product) => product.id === +params.pid);

  console.log(product);

  return <main>Product Detail</main>;
};

export default ProductDetailPage;
