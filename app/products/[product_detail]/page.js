import ProductDetail from "@/app/components/ProductDetail";

export async function generateStaticParams() {
  const products = [{ product_detail: "product-detail-test" }];

  return products.map((product) => ({
    product_detail: product.product_detail,
  }));
}

export default function ProductDetailPage({ params }) {
  const { product_detail } = params;

  return <ProductDetail product_detail={product_detail} />; // if no JSX
}
