

export default function CategoryMarquee({ categories}) {



  return (
    <div className="overflow-hidden eczar bg-[#40023F] group">
      <div className="animate-marquee group-hover:animate-marquee-slow whitespace-nowrap py-3 flex items-center">
        
        {categories && categories.map((item, i) => (
          <span
            key={i}
            className="inline-block text-white font-semibold text-[40px] px-8"
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}
