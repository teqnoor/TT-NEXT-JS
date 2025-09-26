// app/login/page.js
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState(1); // 1 = verify email, 2 = verify OTP
  const [formData, setFormData] = useState({ email: "" });
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  // Handle OTP change
  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // allow only numbers
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input automatically
      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  // Step 1: Verify Email
  const handleVerifyEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://backend.tigertigerfoods.com/api/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(data.message, { autoClose: 2000 });
        setStep(2); // Move to OTP step
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const enteredOtp = otp.join(""); // combine 4 boxes into one string
      const res = await fetch("https://backend.tigertigerfoods.com/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: formData.email, otp: enteredOtp }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(data.message, { autoClose: 2000 });
        localStorage.setItem("user_email", formData.email);
        router.push(`/reset-password`);
      } else {
        toast.error(data.message);
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
        {/* Image */}
        <div className="order-1 md:order-2 md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/fg_bg.png"
            alt="Login Image"
            width={1920}
            height={1080}
            className="w-full h-[500px] object-cover rounded-3xl"
          />
        </div>

        {/* Form */}
        <div className="order-2 md:order-1 md:w-1/2 flex flex-col gap-6">
          <h6 className="eczar text-[20px] text-[#220016]">Change Password</h6>
          <h6 className="text-[18px] text-[#220016]">
            {step === 1
              ? "Verify your email to receive OTP"
              : "Enter the 4-digit OTP sent to your email"}
          </h6>

          {step === 1 && (
            <form onSubmit={handleVerifyEmail} className="flex flex-col gap-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#FFEB57] hover:bg-[#f9e141] border border-black text-black py-[20px] rounded-[14px]"
              >
                {loading ? "Verifying..." : "Verify Email"}
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleVerifyOtp} className="flex flex-col gap-6">
              <div className="flex justify-between gap-4">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, i)}
                    className="w-16 h-16 text-center text-xl font-bold border border-[#220016] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#FFEB57]"
                  />
                ))}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-[#FFEB57] hover:bg-[#f9e141] border border-black text-black py-[20px] rounded-[14px]"
              >
                {loading ? "Verifying OTP..." : "Verify OTP"}
              </button>
            </form>
          )}

          <div className="flex items-center justify-between gap-4 text-sm">
            <Link href="/login">
              <span className="underline">Login</span>
            </Link>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" />
    </section>
  );
}
