import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-[#220016] pt-10 pb-4 text-sm font-outfit">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <img
            src="/logo.png"
            alt="Tiger Tiger Logo"
            width={250}
            height={40}
            className="mb-4"
          />
          <p className="max-w-xs leading-[1.6]">
            The UK’s leading developer of authentic Asian cuisine. From Japanese
            and Thai to Chinese and Indian, we deliver premium ingredients and
            exceptional flavours that bring the true taste of Asia to your
            table.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold mb-2">Products</h4>
          <ul className="space-y-1">
            <li>
              <Link href="#">Pulp+</Link>
            </li>
            <li>
              <Link href="#">Wow Chow</Link>
            </li>
            <li>
              <Link href="#">Taste Japan</Link>
            </li>
            <li>
              <Link href="#">Coco Choo</Link>
            </li>
            <li>
              <Link href="#">Bubble Tea</Link>
            </li>
            <li>
              <Link href="#">Cramm’d</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold mb-2">Categories</h4>
          <ul className="space-y-1">
            <li>
              <Link href="#">Spices & Seasonings</Link>
            </li>
            <li>
              <Link href="#">Taste Japan</Link>
            </li>
            <li>
              <Link href="#">Canned</Link>
            </li>
            <li>
              <Link href="#">Drinks</Link>
            </li>
            <li>
              <Link href="#">Frozen</Link>
            </li>
            <li>
              <Link href="#">Noodles</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <address className="not-italic leading-[1.6] space-y-2">
            <p>
              Bull Close Road
              <br />
              Lenton Industrial Estate,
              <br />
              Nottingham NG7 2UT, England.
            </p>
            <p>customer.service@tigertigerfoods.com</p>
            <p>+44 (0) 115 9438 949</p>
          </address>
        </div>
      </div>

      {/* Social Row */}
      <div className="max-w-7xl mx-auto p-6 mt-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Text */}
          <p className="mb-3 md:mb-0 text-center md:text-left">
            Follow us on social media for updates:
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <a
              href="#"
              className="border border-[#220016] px-6 py-2 rounded-full inline-block font-medium hover:bg-[#40023F] hover:text-white transition-colors"
            >
              Instagram ↗
            </a>
            <a
              href="#"
              className="border border-[#220016] px-6 py-2 rounded-full inline-block font-medium hover:bg-[#40023F] hover:text-white transition-colors"
            >
              Facebook ↗
            </a>
            <a
              href="#"
              className="border border-[#220016] px-6 py-2 rounded-full inline-block font-medium hover:bg-[#40023F] hover:text-white transition-colors"
            >
              Tiktok ↗
            </a>
            <a
              href="#"
              className="border border-[#220016] px-6 py-2 rounded-full inline-block font-medium hover:bg-[#40023F] hover:text-white transition-colors"
            >
              Linkedin ↗
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#220016]/20 pt-4 px-6 text-center md:text-left max-w-7xl mx-auto text-xs flex flex-col md:flex-row justify-between items-center gap-2">
        <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Modern Slavery Statement</Link>
        </div>
        <p>
          Designed and Developed by{" "}
          <a href="https://teqnoor.com" className="text-purple-700 font-medium">
            TeqNoor LTD
          </a>
        </p>
      </div>
    </footer>
  );
}
