"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BlogsPage() {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const colors = ["#CBE22F", "#84EBE8", "#FF7373"];

  useEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldOffset = pathname !== "/";

  // ✅ Fetch blogs from API
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("https://tigertigerfoods.com/api/get-blogs"); // adjust if base URL needed
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          const blogsWithColors = data.data.map((blog) => ({
            ...blog,
            color: colors[Math.floor(Math.random() * colors.length)],
          }));
          setBlogs(blogsWithColors);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <>
      <section className="py-6 px-6 md:px-0">
        <div
          style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
        >
          <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
            <div>
              <h2 className="eczar font-semibold text-[32px] text-[#220016]">
                Latest Blogs
              </h2>
              <p>Read news, blogs and latest articles from Tiger Tiger Foods</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="max-w-6xl mx-auto px-6 md:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {blogs.map((blog) => (
              <Link
                href={`/blogs/${blog.slug}`}
                key={blog.slug}
                className="block p-[32px] text-black transition-all duration-200 rounded-lg"
                style={{ backgroundColor: blog.color }}
              >
                

                {/* Blog Title */}
                <h2 className="text-xl font-semibold mb-[70px]">
                  {blog.title}
                </h2>

                {/* Read More */}
                <span className="text-black mt-2 block">READ MORE</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
