import ProductDetail from "@/app/components/ProductDetail";

export async function generateStaticParams() {
  const res = await fetch("https://tigertigerfoods.com/api/get-products");
  const data = await res.json();

  return data.data.map((product) => ({
    product_detail: product.slug,
  }));
}

export default function ProductDetailPage({ params }) {
  // Pass slug to the client component
  return <ProductDetail slug={params.product_detail} />;
}
