"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SmoothSlider from "../components/SmoothSlider";
export default function ContactPage() {
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

  return (
    <>
      <section className="py-12 bg-[#FFF7D8]">
        {/* Grid Content */}
        <div
          style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
        >
          <div className="max-w-5xl mx-auto text-center px-6 md:px-0">
            <h6 className="text-[20px] text-[#220016]">Contact</h6>
            <h1 className="eczar font-semibold text-[32px] md:text-[64px] text-[#220016]">
              Get in touch with us
            </h1>
            <p>
              Ready to bring authentic Asian flavors to your business? We'd love
              to hear from you and help you find exactly what you need.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF7D8] py-12 px-6 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 align-center">
          {/* Contact Form */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <input
              type="text"
              placeholder="Name*"
              className="w-full bg-white p-[24px]  border-[1px] border-[#220016] rounded-[14px]"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full bg-white p-[24px] border-[1px] border-[#220016] rounded-[14px]"
            />
            <input
              type="tel"
              placeholder="Phone*"
              className="w-full bg-white p-[24px] border-[1px] border-[#220016] rounded-[14px]"
            />
            <textarea
              placeholder="Message*"
              rows="5"
              className="w-full bg-white p-[24px] border-[1px] border-[#220016] rounded-[14px] resize-none"
            ></textarea>
            {/* Fake Captcha */}
            <div className="bg-white border border-black rounded-lg p-4 flex items-center gap-4">
              <input
                type="checkbox"
                className="bg-white w-5 h-5 border border-black"
              />
              <span>I'm not a robot</span>
            </div>
            <button
              type="submit"
              className="bg-[#FFEB57] hover:bg-[#f9e141] border border-black text-black py-[20px] rounded-[14px]"
            >
              Send message
            </button>
          </div>

          {/* Contact Info + Captcha */}
          <div className="md:w-1/2 flex flex-col gap-6 mt-8 md:mt-0">
            <div className="bg-[#FFF7D8] border border-black rounded-lg shadow-[-5px_7px_0px_0px_#000000] p-[52px] w-full">
              <h3 className="eczar font-semibold mb-1">Visit us</h3>
              <p className="text-sm mb-3">
                Bull Close Road Lenton Industrial Estate, Nottingham NG7 2UT,
                England.
              </p>

              <h3 className="eczar font-semibold mb-1">Call us</h3>
              <p className="text-sm mb-3">+44 (0) 115 9438 949</p>

              <h3 className="eczar font-semibold mb-1">Email us</h3>
              <p className="text-sm break-words">
                customer.service@tigertigerfoods.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#FFF7D8]">
        <SmoothSlider />
      </section>
    </>
  );
}
