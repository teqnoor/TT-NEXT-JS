// app/blogs/[slug]/page.js
import BlogClient from "../../components/BlogClient";

export async function generateStaticParams() {
  const res = await fetch("https://backend.tigertigerfoods.com/api/get-blogs");
  const data = await res.json();

  if (!data.success) return [];

  return data.data.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetail({ params }) {
  const { slug } = params;

  const res = await fetch(`https://backend.tigertigerfoods.com/api/get-blog/${slug}`);
  const blog = await res.json();

  return <BlogClient blog={blog.data} others={blog.others} />;
}
