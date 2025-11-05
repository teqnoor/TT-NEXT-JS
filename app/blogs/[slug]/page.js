import BlogClient from "@/app/components/BlogClient";

export async function generateStaticParams() {
  const res = await fetch("https://backend.tigertigerfoods.com/api/get-blogs", {
    next: { revalidate: 60 },
  });

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

  return data.data.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogDetail({ params }) {
  const { slug } = params;
  const colors = ["#CBE22F", "#84EBE8", "#FF7373"];

  // Fetch the blog detail
  const res = await fetch(
    `https://backend.tigertigerfoods.com/api/get-blog/${slug}`,
    { next: { revalidate: 60 } }
  );

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

  // ✅ Assign colors to blog + others consistently
  const othersWithColors = (blog.others || []).map((item, index) => ({
    ...item,
    color: colors[index % colors.length],
  }));

  // ✅ Ensure the main blog also has a color
  const blogWithColor = {
    ...blog.data,
    color: colors[0], // you can choose based on slug or random
  };

  return <BlogClient blog={blogWithColor} others={othersWithColors} />;
}
