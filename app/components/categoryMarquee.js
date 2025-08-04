export default function CategoryMarquee() {
  return (
    <div className="overflow-hidden bg-[#40023F]">
      <div className="animate-marquee whitespace-nowrap py-3 flex items-center">
        {[
          "Taste Japan",
          "Canned",
          "Drinks",
          "Frozen",
          "Noodles",
          "Non Food",
          "Sauces",
        ].map((item, i) => (
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
