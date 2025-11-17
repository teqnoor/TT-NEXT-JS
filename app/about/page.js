"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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
      title: "High Quality",
      description:
        "We assure the essence of what’s best with Asian ingredients. Celebrating natural colours and fermented delicacies across the UK food spots, we take pride in our offerings. Our authentic taste of pan-Asian cuisine is the result of combined effort, planning, strategy, and sourcing from the Far East. We continually expand but extend across borders to bring the real taste and textures. So, our customers delight their appetites and discerning palates with premium Asian flavours. Tiger Tiger embraces authenticity and serves in the UK, Europe, and the Americas, ensuring a global culinary journey. ",
      color: "#FF7373",
    },
    {
      title: "Affordable rates",
      description:
        "Beyond quality in every flavour and in every taste, Tiger Tiger is concerned with its customers’ and businesses’ budgets. Hence, we plan ahead of the product supply and serve strategically when developed. This allows us to keep prices fair and accessible for each food item without the quality being compromised. An efficient sourcing, developing, and management of the supply chain makes us unique in offering customers access and grabbing the attention of a wider audience.",
      color: "#84EBE8",
    },
    {
      title: "Mesmerising Taste",
      description:
        "Tiger Tiger helps create delectable dishes with carefully selected ingredients to bring you the authentic taste of Asia, no matter where you are. From our irresistibly flavourful sauces, pastes, and curries to our tempting range of frozen foods, core products, and all the essential ingredients, each item is designed to make every bite an irresistible journey into the heart of Asian cuisine.",
      color: "#CBE22F",
    },
  ];

  return (
    <>
      <section className="py-12 relative">
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
            <h6 className="text-[20px] text-[#405305]">About us</h6>
            <h1 className="eczar font-semibold text-[64px] text-[#405305]">
              Who We Are
            </h1>
            <p className="mb-3">
              Tiger Tiger has been a developer and supplier of Asian foods and
              services to major hubs, including supermarkets, retailers,
              restaurants and direct customers, for a long time. Our parent
              company, JK FOODS UK, with nearly five decades of experience, is
              widely recognised in the market for providing authenticity in
              products. Founded by Mark Johal, who recognised the demand for
              high-quality, authentic Asian flavours, he sought out the very
              best-tasting, quality Asian foods from the Far East. He began by
              introducing exceptional quality and taste preferred across the UK,
              Europe, and the Americas. To this day, the brand is well-known for
              its dedication to delivering taste and quality to customers at
              manageable prices.
            </p>
            <p className="mb-3">
              At Tiger Tiger, we redefine value without compromising on the
              flavours that make every bite memorable.Our consistent quality and
              recognition for a taste appreciated by individuals and
              professional kitchens alike let us lead developers of Asian food.
              We keep offering a deep variety of food products that spans
              Japanese, Thai, Chinese, and Indian cuisines and commit to keeping
              up the trend. By providing a range of tasty possibilities with top
              quality, we only aim to support businesses and elevate dishes for
              the desired effect. With this approach and commitment, we will
              continue bringing the combination of quality, irresistible taste,
              and competitive rates.
            </p>
            <p className="mb-3">
              Across the UK’s kitchens! Try Tiger Tiger, the UK’s leading
              developers of Asian food, and fill your kitchens with the texture
              and aroma you recall at events. Within a single supplier, you will
              have multiple options dedicated to being delivered across
              Japanese, Thai, Chinese, Korean, Vietnamese, and Indian cuisines.
            </p>
            <div className="flex justify-center mt-6 align-center gap-4">
              <button className="border border-[#405305] px-6 py-2 rounded-full font-medium hover:bg-[#405305] hover:text-white transition">
                View Products
              </button>
              <button className="bg-[#405305] text-white px-6 py-2 rounded-full font-medium hover:bg-[#405305] transition">
                Discover Cuisine
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-0 relative">
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
          drag
          whileDrag={{ scale: 1.2 }}
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
              <h2 className="text-[50px] text-[#405305] eczar font-bold mb-2">
                Our Food
              </h2>
              <p className="text-[20px] text-[#405305]">
                At Tiger Tiger UK, we redefine value without compromising on the
                flavours that make every bite memorable.
              </p>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 text-[20px] text-[#405305]">
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

      <section className="py-12  px-6 md:px-0">
        <div className="bg-[#FEE600] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl  max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
            {/* Right Side */}
            <div className="md:w-1/2 text-[20px] text-[#405305] border-b-2 md:border-b-0 md:border-r-2 border-black pb-6 md:pb-0 h-full">
              <div className="pr-6">
                <p className="mb-3">
                  We begin our development of Asian foods by delving deeply into
                  the culinary heritage of Asia. This leads us to draw
                  inspiration from centuries-old recipes and cooking techniques.
                  Since supplying indicates a specific chore and a thoughtful
                  process to adhere to multiple food services, we partner with
                  experts. Working with our expert chefs and food artists paves
                  a way for us to specialise in Asian cuisine. That’s where we
                  keep every product creation sticking true to its origins.
                </p>
                <p>
                  In our every step is excellence and skill on top. We don’t
                  just list but carefully source the finest ingredients. Our
                  tasty products collection includes aromatic spices, premium
                  frozen food, and fresh produce that offer authentic flavours
                  and textures. With current and rising trends like
                  sustainability preferences, we keep serving ethical sourcing
                  practices. We aim to partner with suppliers who share our
                  commitment to environmental stewardship.
                </p>
              </div>
            </div>

            {/* Left Side */}
            <div className="md:w-1/2 ">
              <h2 className="text-[50px] eczar font-bold mb-2 text-[#405305]">
                How We Develop
              </h2>
              <p className="text-[20px] text-[#405305]">
                Tiger Tiger begins with research and strategic planning, with
                researching and strategising many options. We keep attuned to
                our customers’ and partners’ needs in developing our range of
                Asian foods. Our passion for authenticity, quality, and culinary
                excellence is the foundation that reflects our understanding
                that Asian cuisine is as diverse as it is flavourful. This is
                why we organise our product listings to honour the rich
                traditions and regional nuances, making each dish unique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-0">
        <div className="max-w-6xl mx-auto text-center">
          <h6 className="text-[20px] text-[#405305]">Ok but why</h6>
          <h1 className="eczar font-semibold text-[50px] text-[#405305]">
            Choose Tiger Tiger Foods UK?
          </h1>
          <p>Let us simplify it for you.</p>
        </div>
      </section>

      <section className="py-4 px-6 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {blogs.map((blog, index) => (
              <Link
                href="javascript:void(0)"
                key={index}
                className={`block p-[26px] text-black transition-all duration-200 rounded-lg`}
                style={{
                  backgroundColor: blog.color,
                }}
              >
                <h2 className="text-xl font-semibold mb-[50px] text-[#405305]">
                  {blog.title}
                </h2>
                <p className="text-[15px] text-[#405305]">{blog.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12  px-6 md:px-0">
        <div className="max-w-6xl mx-auto text-center">
          <h6 className="text-[20px] text-[#405305]">
            Want to know more about us?
          </h6>
          <h1 className="eczar font-semibold text-[50px] text-[#405305]">
            How we work
          </h1>
          <p>
            Tiger Tiger works to fulfil a mission to bring the authentic
            flavours and culinary Asian trends to every table around the United
            Kingdom. This approach leads us to have a focus and dedication
            towards our work on sourcing and developing the highest quality food
            products. Our customers will get a delight in every bite, and
            businesses will thrive. Here’s how we ensure our quality transports
            bring vibrancy to the streets and bustling markets of Asia:
          </p>
        </div>
      </section>

      <section className="py-4 px-6 md:px-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#84EBE8]  rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2">
              Cultural understanding & expertise
            </h3>
            <p className="text-sm text-gray-800">
              We have highly inspired food enthusiasts in our team that work
              more interestingly than just to fulfil the responsibility. Their
              cultural understanding and deep passion for Asian cuisines serve
              the rich tapestry of Asian culinary traditions. We immerse
              ourselves in exploring diverse flavours, ingredients, and cooking
              techniques that keep us innovation drivers for keeping the
              culinary alive and lasting.
            </p>
          </div>

          <div className="bg-[#84EBE8]  rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2 text-[#405305]">
              Global Sourcing
            </h3>
            <p className="text-sm text-gray-800">
              Tiger Tiger doesn’t just rely on the name or fame but on
              self-research and assessment. That’s why we scour the Asian
              markets that can help us source the finest ingredients and
              products from trusted suppliers and producers. We have earned an
              extensive network of tested partners in the region, opening up our
              access and extending our services for a wide variety of authentic
              and premium-quality ingredients. We don’t only serve the rare
              delicacies but also fragrant spices and aromatic herbs and
              speciality items.
            </p>
          </div>
          <div className="bg-[#84EBE8]  rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2 text-[#405305]">
              Innovation and Adaptability
            </h3>
            <p className="text-sm text-gray-800">
              If it belongs to success, it is tied to effort! With innovation as
              our focus and a future-driven method, we never hesitate to adapt
              to new trends. That’s why our customers trust us and keep us at
              the forefront of the Asian food industry. Through research,
              experimentation, and creative exploration, we constantly push the
              boundaries of flavour and innovation. The purpose? To delight our
              customers with ready-made culinary tastes.
            </p>
          </div>

          <div className="bg-[#84EBE8]  rounded-lg p-6">
            <h3 className="font-bold text-lg mb-2 text-[#405305]">
              Collaborative Development
            </h3>
            <p className="text-sm text-gray-800">
              Our Asian ingredient offerings are the result of close
              collaboration with chefs, culinary experts, and food artisans
              across Asia. With this escort and trust, we develop unique and
              innovative food products. While keeping ahead with the modern
              interpretations, we never leave traditional recipes passed down
              through generations. Our services are more than supply but fusion
              creations, harnessing creativity and expertise. With this
              approach, we will make our moves and continue creating exciting
              culinary experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#CBE22F] py-16 px-4 text-center">
        <div className="max-w-6xl mx-auto px-6 md:px-0 text-center">
          <p className="text-xl md:text-2xl font-semibold text-[#405305] leading-relaxed mb-8">
            Tiger Tiger are explorers and ambassadors of Asian cuisine. Our
            customer-first approach in Asian food supply and passion for
            discovery keep us committed to making stories real. We are dedicated
            to satisfying our customers while sharing the vibrant and diverse
            flavours of Asia with the world.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#405305] px-6 py-2 rounded-full font-medium hover:bg-[#405305] hover:text-white transition"
            >
              Contact us to get to know more
            </Link>
            <Link
              href="/products"
              className="bg-[#405305] text-white px-6 py-2 rounded-full font-medium hover:bg-[#405305] transition"
            >
              Discover our products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
