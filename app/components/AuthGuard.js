// app/components/AuthGuard.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthGuard({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // read token from localStorage (client-side)
    const token = localStorage.getItem("token");

    if (!token) {
      // optional: show a message then redirect
      toast.info("Please login to access the dashboard");
      // replace so user can't go back to protected page
      router.replace("/login");
      return;
    }

    // token exists — allow render
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          {/* lightweight loading state */}
          Loading...
        </div>
        {/* only one ToastContainer needed in the app */}
        <ToastContainer position="top-right" />
      </>
    );
  }

  return <>{children}</>;
}
