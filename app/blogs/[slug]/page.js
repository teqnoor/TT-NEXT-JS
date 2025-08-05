// app/blogs/[slug]/page.js
import BlogClient from '../../components/BlogClient';

export async function generateStaticParams() {
  const blogs = [
    { slug: 'japanese-cooking-for-beginners' },
    { slug: 'simple-japanese-dips-tiger-sauces' },
    { slug: 'rise-of-japanese-cuisine-uk' },
  ];

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetail({ params }) {
  const { slug } = params;

  return <BlogClient slug={slug} />;
}
