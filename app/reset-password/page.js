"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    new_password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);

  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Get email from localStorage
    const storedEmail = localStorage.getItem("user_email");
    if (storedEmail) {
      setFormData((prev) => ({ ...prev, email: storedEmail }));
    }

    // Header offset calc
    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
    const handleResize = () => {
      if (header) setHeaderHeight(header.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldOffset = pathname !== "/";

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://backend.tigertigerfoods.com/api/reset-password",
        formData,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (data.success) {
        toast.success(data.message, { autoClose: 2000 });
        localStorage.removeItem("user_email");
        setTimeout(() => router.replace("/login"), 900);
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error("Reset Password Error:", err);

      // ✅ Show Laravel validation error properly
      if (err.response && err.response.data) {
        toast.error(err.response.data.message || "Validation error");
      } else {
        toast.error("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12">
      <div
        className="max-w-6xl mx-auto flex flex-col px-6 md:px-0 md:flex-row gap-8"
        style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
      >
        {/* Image first on mobile, second on desktop */}
        <div className="order-1 md:order-2 md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/Updatepassword.png"
            alt="Login Image"
            width={1920}
            height={1080}
            className="w-full h-[500px] object-cover rounded-3xl"
          />
        </div>

        {/* Form second on mobile, first on desktop */}
        <div className="order-2 md:order-1 md:w-1/2 flex flex-col gap-6">
          <h6 className="eczar text-[20px] text-[#220016]">Reset Password</h6>
          <h6 className="text-[18px] text-[#220016]">
            Reset your password to get logged in to your Tiger Tiger Account.
          </h6>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="password"
              name="new_password"
              value={formData.new_password}
              onChange={handleChange}
              placeholder="New Password*"
              className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              required
            />

            <input
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              placeholder="Confirm Password*"
              className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[#FFEB57] hover:bg-[#f9e141] border border-black text-black py-[20px] rounded-[14px]"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" />
    </section>
  );
}
