"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
export default function AboutPage() {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);

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
      title: "High Quality",
      description:
        "Tiger Tiger UK stands as a steadfast assurance of top-tier quality for both its ingredients and culinary offerings. We take pride in ensuring the authentic taste of pan-Asian cuisine, meticulously developed and sourced from the Far East. Our commitment extends across borders, bringing genuine and premium products to discerning palates in the UK, Europe, and the Americas. Embrace the essence of true pan-Asian flavours with Tiger Tiger UK, where quality meets authenticity on a global culinary journey.",
      color: "#FFFFFF99",
    },
    {
      slug: "simple-japanese-dips-tiger-sauces",
      title: "Competitive Prices",
      description:
        "At Tiger Tiger UK, we take pride in offering not only exceptional quality but also competitive prices. By strategically sourcing, developing, and efficiently managing our supply chain, we aim to make authentic pan-Asian culinary experiences accessible to a wider audience. Ensuring that Tiger Tiger UK is a winning combination of premium quality and competitive pricing, making your culinary journey both delightful and cost-effective.",
      color: "#97E0FF",
    },
    {
      slug: "rise-of-japanese-cuisine-uk",
      title: "Mesmerising Taste",
      description:
        "Tiger Tiger UK helps create delectable dishes with carefully selected ingredients to bring you the authentic taste of Asia, no matter where you are. From our irresistibly flavourful sauces, pastes, and curries to our tempting range of frozen foods, main products and all the essential ingredients, each item is designed to make every bite an irresistible journey into the heart of Asian cuisine.",
      color: "#E597FF",
    },
  ];

  return (
    <>
      <section className="py-12 bg-[#FFF7D8] relative">
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Free drag without restriction
          animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }} // Loop movement
          transition={{
            repeat: Infinity,
            duration: 3, // Slower animation
            ease: "easeInOut",
          }}
          className="absolute bottom-[20px] left-[20px]"
        >
          <Image src="/yello.png" alt="about" width={100} height={100} />
        </motion.div>

        {/* Grid Content */}
        <div
          style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
        >
          <div className="max-w-5xl mx-auto text-center px-6 md:px-0 ">
            <h6 className="text-[20px] text-[#220016]">About us</h6>
            <h1 className="eczar font-semibold text-[64px] text-[#220016]">
              Who We Are
            </h1>
            <p>
              Tiger Tiger UK has been developing Asian foods and supplying Asian
              food services, supermarkets, and direct customers since 1985. Its
              parent company, JK FOODS UK, with nearly five decades of
              experience, is widely recognised in the market for its authentic
              products. Founded by Mark Johal, who recognised the demand for
              high-quality, authentic Asian flavours, he sought out the very
              best tasting, quality Asian foods from the Far East. He refined
              their quality and taste and introduced them to the UK, Europe, and
              the Americas. Tiger Tiger UK is dedicated to delivering taste and
              quality to customers at competitive prices.
            </p>
            <div className="flex justify-center mt-6 align-center gap-4">
              <button className="border border-[#40023F] px-6 py-2 rounded-full font-medium hover:bg-[#40023F] hover:text-white transition">
                View Products
              </button>
              <button className="bg-[#40023F] text-white px-6 py-2 rounded-full font-medium hover:bg-[#40023F] transition">
                Discover Cuisine
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#FFF7D8] px-6 md:px-0 relative">
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Free drag without restriction
          animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }} // Loop movement
          transition={{
            repeat: Infinity,
            duration: 3, // Slower animation
            ease: "easeInOut",
          }}
          className="absolute top-0 right-[20px]"
        >
          <Image src="/red.png" alt="about" width={100} height={100} />
        </motion.div>
        <motion.div
          drag whileDrag={{ scale: 1.2}}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Free drag without restriction
          animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }} // Loop movement
          transition={{
            repeat: Infinity,
            duration: 3, // Slower animation
            ease: "easeInOut",
          }}
          className="absolute bottom-[0] Left-[20px]"
        >
          <Image src="/yello.png" alt="about" width={100} height={100} />
        </motion.div>
        <div className="bg-[#F0FDFF] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl  max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            {/* Left Side */}
            <div className="md:w-1/2 border-b-2 md:border-b-0 md:border-r-2 border-black pb-6 md:pb-0 h-full">
              <h2 className="text-[50px] eczar font-bold mb-2">Our Food</h2>
              <p className="text-[20px] text-[#40023F]">
                At Tiger Tiger UK, we redefine value without compromising on the
                flavours that make every bite memorable.
              </p>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 text-[20px] text-[#40023F]">
              <p className="mb-3">
                We are the UK’s leading developers of Asian food, offering a
                diverse selection that spans Japanese, Thai, Chinese, and Indian
                cuisines. We provide a range of tasty possibilities with our
                top-quality ingredients that make and enhance your dishes. At
                Tiger Tiger UK, we guarantee unmatched quality, irresistible
                taste, and competitive pricing. Our commitment is to bring
                authentic flavours to our valued customers, ensuring an
                unparalleled culinary experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#FFF7D8] px-6 md:px-0">
        <div className="bg-[#FEE600] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl  max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
            {/* Right Side */}
            <div className="md:w-1/2 text-[20px] text-[#40023F] border-b-2 md:border-b-0 md:border-r-2 border-black pb-6 md:pb-0 h-full">
              <div className="pr-6">
                <p className="mb-3">
                  At Tiger Tiger UK, we're passionate about bringing you
                  authentic Asian cuisine that honours centuries-old traditions.
                  Our development journey starts with exploring Asia's rich
                  culinary heritage, working hand-in-hand with expert chefs who
                  understand the true essence of regional flavours.
                </p>
                <p>
                  We believe quality makes all the difference—that's why we
                  carefully source the finest spices, premium ingredients, and
                  fresh produce to create dishes that taste authentic. Our
                  commitment extends beyond great taste to sustainable
                  practices, ensuring every product respects both culinary
                  traditions and environmental responsibility.
                </p>
              </div>
            </div>

            {/* Left Side */}
            <div className="md:w-1/2 ">
              <h2 className="text-[50px] eczar font-bold mb-2">
                How We Develop
              </h2>
              <p className="text-[20px] text-[#40023F]">
                Every authentic flavour tells a story passed down through
                generations. We don't just create Asian foods, we honour
                culinary legacies with every carefully crafted dish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#FFF7D8] px-6 md:px-0">
        <div className="max-w-6xl mx-auto text-center">
          <h6 className="text-[20px] text-[#220016]">Ok but why</h6>
          <h1 className="eczar font-semibold text-[50px] text-[#220016]">
            Choose Tiger Tiger Foods UK?
          </h1>
          <p>Let us simplify it for you.</p>
        </div>
      </section>

      <section className="py-4 bg-[#FFF7D8] px-6 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {blogs.map((blog, index) => (
              <Link
                href={`/blogs/${blog.slug}`}
                key={blog.slug}
                className={`block p-[26px] text-black transition-all duration-200 hover:shadow-[-11px_12px_0px_0px_#000000]`}
                style={{
                  backgroundColor: blog.color,
                }}
              >
                <h2 className="text-xl font-semibold mb-[50px]">
                  {blog.title}
                </h2>
                <p className="text-[15px]">{blog.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#FFF7D8] px-6 md:px-0">
        <div className="max-w-6xl mx-auto text-center">
          <h6 className="text-[20px] text-[#220016]">
            Want to know more about us?
          </h6>
          <h1 className="eczar font-semibold text-[50px] text-[#220016]">
            How we work
          </h1>
          <p>
            At Tiger Tiger UK, our mission is to bring the authentic flavours
            and culinary traditions of Asia to tables around the United Kingdom.
            We are dedicated to sourcing and developing the highest quality
            Asian food products, ensuring that every bite transports our
            customers to the vibrant streets and bustling markets of Asia.
            Here’s how we work:
          </p>
        </div>
      </section>

      <section className="bg-[#FFF7D8] py-4 px-6 md:px-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#9CD3D1] border border-black rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Cultural Expertise</h3>
            <p className="text-sm text-gray-800">
              Our team of food enthusiasts and cultural experts are deeply
              passionate about Asian cuisine. We immerse ourselves in the rich
              tapestry of Asian culinary traditions, exploring diverse flavours,
              ingredients, and cooking techniques to uncover hidden gems and
              culinary innovations.
            </p>
          </div>

          <div className="bg-[#9CD3D1] border border-black rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">Global Sourcing</h3>
            <p className="text-sm text-gray-800">
              We scour the markets of Asia to source the finest ingredients and
              products from trusted suppliers and producers. Our extensive
              network of partners spans the region, allowing us to access a wide
              variety of authentic and premium-quality ingredients, from
              fragrant spices and aromatic herbs to rare delicacies and
              specialty items.
            </p>
          </div>
          <div className="bg-[#9CD3D1] border border-black rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">
              Innovation and Adaptability
            </h3>
            <p className="text-sm text-gray-800">
              We embrace innovation and stay ahead of culinary trends to remain
              at the forefront of the Asian food industry. Through research,
              experimentation, and creative exploration, we constantly push the
              boundaries of flavour and innovation to delight our customers with
              exciting new culinary experiences.
            </p>
          </div>

          <div className="bg-[#9CD3D1] border border-black rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">
              Collaborative Development
            </h3>
            <p className="text-sm text-gray-800">
              We collaborate closely with chefs, culinary experts, and food
              artisans across Asia to develop unique and innovative food
              products. From traditional recipes passed down through generations
              to modern interpretations and fusion creations, we harness the
              creativity and expertise of our partners to create exciting
              culinary experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#E597FF] py-16 px-4 text-center">
        <div className="max-w-6xl mx-auto px-6 md:px-0">
          <p className="text-xl md:text-2xl font-semibold text-[#40023F] leading-relaxed mb-8">
            At Tiger Tiger Foods UK, we are more than just a food company. We
            are storytellers, explorers, and ambassadors of Asian cuisine.
            Through our passion for discovery, commitment to quality, and
            dedication to customer satisfaction, we strive to share the vibrant
            and diverse flavours of Asia with the world.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a
              href="#contact"
              className="border border-[#40023F] text-[#40023F] px-6 py-2 rounded-full font-medium hover:bg-[#40023F] hover:text-white transition"
            >
              Contact us to get to know more
            </a>
            <a
              href="#products"
              className="bg-[#40023F] text-white px-6 py-2 rounded-full font-medium hover:bg-[#5d0261] transition"
            >
              Discover our products
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
