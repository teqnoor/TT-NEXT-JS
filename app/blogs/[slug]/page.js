import BlogClient from "@/app/components/BlogClient";

export async function generateStaticParams() {
  const res = await fetch("https://backend.tigertigerfoods.com/api/get-blogs", { next: { revalidate: 60 } });

  if (!res.ok) {
    console.error("❌ Failed to fetch blog list:", res.status);
    return [];
  }

  let data;
  try {
    data = await res.json();
  } catch (err) {
    console.error("❌ Invalid JSON from blog list:", err);
    return [];
  }

  if (!data.success || !Array.isArray(data.data)) return [];

  return data.data.map(blog => ({ slug: blog.slug }));
}

export default async function BlogDetail({ params }) {
  const { slug } = params;

  const res = await fetch(`https://backend.tigertigerfoods.com/api/get-blog/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    console.error("❌ Failed to fetch blog:", res.status, slug);
    return <div>Error loading blog.</div>;
  }

  let blog;
  try {
    blog = await res.json();
  } catch (err) {
    console.error("❌ Invalid JSON for blog:", slug, err);
    return <div>Invalid blog data.</div>;
  }

  if (!blog.data) {
    return <div>Blog not found.</div>;
  }

  return <BlogClient blog={blog.data} others={blog.others} />;
}
