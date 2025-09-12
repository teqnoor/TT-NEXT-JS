"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // 👈 import styles
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const pathname = usePathname();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

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

  // ✅ handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ handle form submit
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

      const data = await res.json();

      if (data.success) {
        // ✅ save token in localStorage (or cookie if needed)
        localStorage.setItem("token", data.token);

        toast.success(data.message, {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        console.log("here");
        toast.error(data.message, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12">
      <div
        style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 align-center">
          {/* Left side form */}
          <div className="md:w-1/2 flex flex-col gap-6">
            <h6 className="eczar text-[20px] text-[#220016]">Login</h6>
            <h6 className=" text-[18px] text-[#220016]">
              Let’s get you up and running with your online Tiger Tiger account.
              Login Here.
            </h6>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />

              <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password*"
                  className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px] pr-12"
                />

                {/* Eye Toggle Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between gap-4 text-sm">
                <span>Forgot Password ?</span>
                <Link href="/trade-register">
                  <span className="underline">Create New Account</span>
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#FFEB57] hover:bg-[#f9e141] border border-black text-black py-[20px] rounded-[14px]"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>

          {/* Right side image */}
          <div className="md:w-1/2 flex flex-col gap-6 mt-8 md:mt-0">
            <Image
              src="/Login_img.png"
              alt="Login Image"
              width={1920}
              height={1080}
              className="w-full h-[500px] object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
      {/* 👇 this makes toasts appear */}
      <ToastContainer />
    </section>
  );
}
