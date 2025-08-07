"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function BlogsPage() {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const header = document.getElementById("header"); // Select global header
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    // Recalculate on resize (optional)
    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldOffset = pathname !== "/";

  const blogs = [
    {
      slug: "japanese-cooking-for-beginners",
      title: "Japanese Cooking for Beginners: 5 Simple Recipes to Start With",
      description: "A guide to simple Japanese food recipes for beginners.",
      color: "#FEE600",
    },
    {
      slug: "simple-japanese-dips-tiger-sauces",
      title: "How To Make Simple Japanese Dips Using Tiger Tiger Sauces",
      description:
        "A simple guide to making delicious Japanese dips with Tiger Tiger sauces.",
      color: "#E597FF",
    },
    {
      slug: "rise-of-japanese-cuisine-uk",
      title: "The Rise of Japanese Cuisine in the UK: What You Need to Know",
      description: "The growing popularity of Japanese food in the UK.",
      color: "#97E0FF",
    },
  ];

  return (
    <>
      <section className="py-12">
        {/* Grid Content */}
        <div
          style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
        >
          <div className="max-w-6xl mx-auto  flex flex-wrap justify-between items-center mb-6 px-6 md:px-0">
            <div>
              <h2 className="eczar font-semibold text-[32px] text-[#220016]">
                Latest Blogs
              </h2>
              <p>Read news, blogs and latest articles from Tiger Tiger Foods</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="max-w-6xl mx-auto px-6 md:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {blogs.map((blog, index) => (
              <Link
                href={`/blogs/${blog.slug}`}
                key={blog.slug}
                className={`block p-[32px] text-black transition-all duration-200 hover:shadow-[-11px_12px_0px_0px_#000000]`}
                style={{
                  backgroundColor: blog.color,
                  
                }}
              >
                <h2 className="text-xl font-semibold mb-[70px]">
                  {blog.title}
                </h2>
                <p className="mb-[40px]">{blog.description}</p>
                <span className="text-black mt-2 block">READ MORE</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
