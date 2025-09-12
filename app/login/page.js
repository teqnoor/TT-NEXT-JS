// app/login/page.js
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [headerHeight, setHeaderHeight] = useState(0);
  const shouldOffset = pathname !== "/";

  // If already logged in, redirect to dashboard
  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token) router.replace("/dashboard");
    } catch {}
  }, [router]);

  // Measure header height so we can offset this section when not on "/"
  useEffect(() => {
    const header = document.getElementById("header");
    if (header) setHeaderHeight(header.offsetHeight);

    const handleResize = () => {
      if (header) setHeaderHeight(header.offsetHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://tigertigerfoods.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle non-2xx responses gracefully
      let data;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (res.ok && data?.success) {
        // Save token and optionally user data
        localStorage.setItem("token", data.token);
        if (data.data) localStorage.setItem("user", JSON.stringify(data.data));

        // 🔔 Let the app (including the Header) know auth state changed in THIS tab
        window.dispatchEvent(new Event("auth-changed"));

        toast.success(data.message || "Logged in", { autoClose: 1200 });

        // Redirect after short delay so toast is visible
        setTimeout(() => router.replace("/dashboard"), 900);
      } else {
        const message =
          data?.message ||
          (res.status === 401
            ? "Invalid email or password."
            : "Login failed. Please try again.");
        toast.error(message);
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
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
            src="/Login_img.png"
            alt="Login Image"
            width={1920}
            height={1080}
            className="w-full h-[500px] object-cover rounded-3xl"
            priority
          />
        </div>

        {/* Form second on mobile, first on desktop */}
        <div className="order-2 md:order-1 md:w-1/2 flex flex-col gap-6">
          <h6 className="eczar text-[20px] text-[#220016]">Login</h6>
          <h6 className="text-[18px] text-[#220016]">
            Let’s get you up and running with your online Tiger Tiger account.
            Login here.
          </h6>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              required
              autoComplete="email"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px] pr-12"
                required
                autoComplete="current-password"
              />

              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>

            <div className="flex items-center justify-between gap-4 text-sm">
              <Link href="/forgot-password">
                <span>Forgot Password?</span>
              </Link>
              <Link href="/trade-register">
                <span className="underline">Create New Account</span>
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#FFEB57] hover:bg-[#f9e141] border border-black text-black py-[20px] rounded-[14px] disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>

      {/* Only one ToastContainer is needed in the entire app.
          If you already mount it globally, remove this one. */}
      <ToastContainer position="top-right" />
    </section>
  );
}
