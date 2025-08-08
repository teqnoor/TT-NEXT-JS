export default function CategoryMarquee() {
  const categories = [
    "Taste Japan",
    "Canned",
    "Drinks",
    "Frozen",
    "Noodles",
    "Non Food",
    "Sauces",
  ];

  return (
    <div className="overflow-hidden eczar bg-[#40023F] group">
      <div className="animate-marquee group-hover:animate-marquee-slow whitespace-nowrap py-3 flex items-center">
        {/* Duplicate the categories to create a seamless loop */}
        {[...categories, ...categories].map((item, i) => (
          <span
            key={i}
            className="inline-block text-white font-semibold text-[40px] px-8"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
