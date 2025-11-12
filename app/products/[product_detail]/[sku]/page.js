import ProductDetail from "@/app/components/ProductDetail";

export async function generateStaticParams() {
  const res = await fetch("https://backend.tigertigerfoods.com/api/get-products");
  const data = await res.json();

  return data.data.map((product) => ({
    product_detail: String(product.slug),
    sku: String(product.SKU),
  }));
}

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;

  return (
    <ProductDetail
      slug={resolvedParams.product_detail}
      sku={resolvedParams.sku}
    />
  );
}
