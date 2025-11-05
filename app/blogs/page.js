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
        const res = await fetch(
          "https://backend.tigertigerfoods.com/api/get-blogs"
        ); // adjust if base URL needed
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
          const blogsWithColors = data.data.map((blog, index) => ({
            ...blog,
            color: colors[index % colors.length], // repeat in order
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
                className="relative flex flex-col justify-between p-8 rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: blog.color }}
              >
                {/* Blog Title */}
                <div>
                  <h2 className="text-lg md:text-xl font-semibold leading-snug mb-[10rem]">
                    {blog.title}
                  </h2>

                  <p
                    className="text-sm text-black/80"
                    dangerouslySetInnerHTML={{
                      __html:
                        (blog.description
                          ? blog.description
                              .replace(/<[^>]+>/g, "")
                              .substring(0, 100)
                          : "") + "...",
                    }}
                  ></p>
                </div>

                {/* Read More */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-black">
                  READ MORE
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
