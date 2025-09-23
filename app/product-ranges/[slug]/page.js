import ProductRangeDetail from "@/app/components/ProductRangeDetail";



export async function generateStaticParams() {
  const res = await fetch("https://tigertigerfoods.com/api/get-product-ranges");
  const data = await res.json();

  return data.data.map((product) => ({
    slug: product.slug,
  }));
}



export default function ProductRangeDetailPage({ params }) {
    // Pass slug to the client component
      return <ProductRangeDetail slug={params.slug} />;
}