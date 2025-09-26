import CategoryProductsClient from "@/app/components/CategoryProductsClient";


// Required for static export
export async function generateStaticParams() {
  const res = await fetch("https://backend.tigertigerfoods.com/api/get-categories");
  const data = await res.json();

  return data.data.map((cat) => ({
    slug: cat.slug, // or cat.name if slug not available
  }));
}

export default function CategoryProductsPage({ params }) {
  return <CategoryProductsClient slug={params.slug} />;
}
