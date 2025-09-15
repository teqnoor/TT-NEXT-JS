// components/BlogClient.js
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function BlogClient({ blog, others }) {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);

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

  if (!blog) {
    return (
      <div className="max-w-6xl mx-auto py-20 text-center">
        <p>Blog not found.</p>
      </div>
    );
  }

  return (
    <>
      {/* Blog Header */}
      <section className="py-12">
        <div
          style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
        >
          <div className=" max-w-6xl mx-auto flex flex-wrap justify-between items-center mb-6 px-6 md:px-0">
            <div className="bg-[#97E0FF] p-[20px] md:p-[50px]">
              <h1 className="eczar font-extrabold text-[36px] md:text-[54px] text-[#220016] mb-5">
                {blog.title}
              </h1>

              {blog.image && (
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={800}
                  height={400}
                  className="rounded-lg mb-6 w-full"
                />
              )}

              
            </div>
          </div>
        </div>
      </section>

      {/* Blog Body + Sidebar */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto px-6 md:px-0 md:flex md:gap-8">
          {/* Left Content */}
          <div className="md:w-2/3">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.description ?? "" }}
            />
          </div>

          {/* Sidebar - Other Blogs */}
          <div className="md:w-1/3 mt-8 md:mt-0">
            {others?.map((other) => (
              <Link
                href={`/blogs/${other.slug}`}
                key={other.id}
                className="block bg-white border p-6 text-black transition-all duration-200 hover:shadow-[-11px_12px_0px_0px_#000000] mb-4 rounded-lg"
              >
                {other.image && (
                  <Image
                    src={other.image}
                    alt={other.title}
                    width={400}
                    height={200}
                    className="rounded mb-4"
                  />
                )}
                <h2 className="text-lg font-semibold mb-3">{other.title}</h2>
                <span className="text-black block">READ MORE</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
