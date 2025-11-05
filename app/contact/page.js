"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SmoothSlider from "../components/SmoothSlider";

export default function ContactPage() {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.getElementById("header");
    if (header) setHeaderHeight(header.offsetHeight);

    const handleResize = () => {
      if (header) setHeaderHeight(header.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldOffset = pathname !== "/";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
    "g-recaptcha-response": "test", // fake for now
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [errors, setErrors] = useState({}); // ✅ error state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");
    setErrors({});

    try {
      const res = await fetch("https://backend.tigertigerfoods.com/api/contact-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": document
            .querySelector('meta[name="csrf-token"]')
            ?.getAttribute("content"),
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setResponseMsg(data.message);
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          message: "",
          "g-recaptcha-response": "test",
        });
      } else {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setResponseMsg(data.message);
        }
      }
    } catch (err) {
      setResponseMsg("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="py-12 ">
        <div
          style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
        >
          <div className="max-w-5xl mx-auto text-center px-6 md:px-0">
            <h6 className="text-[20px] text-[#405305]">Contact</h6>
            <h1 className="eczar font-semibold text-[32px] md:text-[64px] text-[#405305]">
              Get in touch with us
            </h1>
            <p className="text-[#405305]">
              Ready to bring authentic Asian flavors to your business? We'd love
              to hear from you and help you find exactly what you need.
            </p>
          </div>
        </div>
      </section>

      <section className=" py-12 px-6 md:px-0">
        <form onSubmit={handleSubmit}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 align-center">
            {/* Contact Form */}
            <div className="md:w-1/2 flex flex-col gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#DBDBDB] p-[24px] rounded-[14px]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#DBDBDB] p-[24px]  rounded-[14px]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone*"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="w-full bg-[#DBDBDB] p-[24px] rounded-[14px]"
                />
                {errors.phone_number && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone_number}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message*"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#DBDBDB] p-[24px]  rounded-[14px] resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

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
                disabled={loading}
                className="bg-[#556D08]  text-white  py-[20px] rounded-[14px]"
              >
                {loading ? "Sending..." : "Send message"}
              </button>

           
            </div>

            {/* Contact Info */}
            <div className="md:w-1/2 flex flex-col gap-6 mt-8 md:mt-0">
              <div className="p-[44px] w-full">
                <h3 className="text-[32px] eczar mb-1 text-[#405305]">Visit us</h3>
                <p className="text-[20px] mb-3 text-[#405305]">
                  Bull Close Road Lenton Industrial Estate, Nottingham NG7 2UT,
                  England.
                </p>

                <h3 className="text-[32px] eczar mb-1 text-[#405305]">Call us</h3>
                <p className="text-[20px] text-sm mb-3 text-[#405305]">+44 (0) 115 9438 949</p>

                <h3 className="text-[32px] eczar mb-1 text-[#405305]">Email us</h3>
                <p className="text-[20px] text-sm break-words text-[#405305] ">
                  customer.service@tigertigerfoods.com
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>

      <section className="py-12 ">
        <SmoothSlider />
      </section>
    </>
  );
}
