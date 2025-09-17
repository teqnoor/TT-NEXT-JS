"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CheckoutPage() {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [cart, setCart] = useState([]);
  const [mounted, setMounted] = useState(false);

  // Form + user state
  const [formData, setFormData] = useState({
    user_id: "",
    name: "",
    email: "",
    company_name: "",
    business_name: "",
    vat_no: "",
    address: "",
    country: "",
    state: "",
    city: "",
    postal_code: "",
    phone: "",
  });

  // Error + loading state
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input change (if you want editable fields)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.business_name)
      newErrors.business_name = "Business name is required";
    if (!formData.vat_no) newErrors.vat_no = "VAT number is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.postal_code)
      newErrors.postal_code = "Postal code is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit enquiry
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "https://tigertigerfoods.com/api/send-enquiry",
        {
          user_id: formData.user_id,
          name: formData.name,
          email: formData.email,
          company_name: formData.company_name,
          business_name: formData.business_name,
          vat_no: formData.vat_no,
          address: formData.address,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          postal_code: formData.postal_code,
          phone: formData.phone,
          cart: cart,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );


      if (response.data.success === true) {
        toast.success(`Your enquiry request has been submitted successfully.`, {
          position: "top-right",
          autoClose: 3000,
        });

        // clear cart
        sessionStorage.removeItem("inquiry_cart");
        setCart([]);
      } else {
        toast.error(response.data.message, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  // ✅ Load user data on mount
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await axios.get(
          "https://tigertigerfoods.com/api/get-user",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (res.data.success) {
          const user = res.data.data;
          setFormData({
            user_id: user.id,
            name: user.contact_name || "",
            email: user.email || "",
            company_name: user.company_registration || "",
            business_name: user.business_name || "",
            vat_no: user.company_vat || "",
            address: user.address || "",
            country: user.country || "",
            state: user.state || "",
            city: user.city || "",
            postal_code: user.zip_code || "",
            phone: user.phone || "",
          });
        }
      } catch (err) {
        console.error("Failed to fetch user", err);
      }
    };

    fetchUser();
  }, []);

  // ✅ Header height adjustment
  useEffect(() => {
    const header = document.getElementById("header");
    if (header) setHeaderHeight(header.offsetHeight);
    const handleResize = () => header && setHeaderHeight(header.offsetHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Load cart
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart =
        JSON.parse(sessionStorage.getItem("inquiry_cart")) || [];
      setCart(storedCart);
      setMounted(true);
    }
  }, []);

  if (!mounted) return null;
  const shouldOffset = pathname !== "/";

  return (
    <section className="py-12">
      <div
        style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
      >
        {/* Alert Bar */}
        <ToastContainer />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="md:w-2/3 flex flex-col gap-6"
          >
            <h2 className="eczar font-semibold text-[32px] text-[#220016]">
              Contact Details
            </h2>

            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                placeholder="Company Name*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />
            </div>

            <h2 className="eczar font-semibold text-[32px] text-[#220016]">
              Billing Details
            </h2>

            {/* Business Name */}
            <div>
              <input
                type="text"
                name="business_name"
                value={formData.business_name}
                onChange={handleChange}
                placeholder="Business Name*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />
              {errors.business_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.business_name}
                </p>
              )}
            </div>

            {/* VAT */}
            <div>
              <input
                type="text"
                name="vat_no"
                value={formData.vat_no}
                onChange={handleChange}
                placeholder="VAT No*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />
              {errors.vat_no && (
                <p className="text-red-500 text-sm mt-1">{errors.vat_no}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>

            {/* Country */}
            <div>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country}</p>
              )}
            </div>

            {/* State */}
            <div>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">{errors.state}</p>
              )}
            </div>

            {/* City */}
            <div>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city}</p>
              )}
            </div>

            {/* Postal Code */}
            <div>
              <input
                type="text"
                name="postal_code"
                value={formData.postal_code}
                onChange={handleChange}
                placeholder="Postal Code/Zip*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />
              {errors.postal_code && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.postal_code}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#FFEB57] hover:bg-[#f9e141] border border-black text-black py-[20px] rounded-[14px] disabled:opacity-50"
            >
              {loading ? "Sending..." : "Proceed to Ask Quote"}
            </button>
          </form>

          {/* Cart */}
          <div className="md:w-1/3 flex flex-col gap-6 mt-8 md:mt-0">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-2xl shadow-inner">
                <Image
                  src="/empty-cart.png"
                  alt="Empty Cart"
                  width={150}
                  height={150}
                  className="mb-6"
                />
                <p className="text-gray-600 text-lg">No products found</p>
              </div>
            ) : (
              <div className="bg-white shadow-md rounded-2xl p-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-6 border-b border-gray-200 py-4 last:border-none"
                  >
                    <Image
                      src={item.images || "/placeholder.png"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm">
                        {item.product_quantity} ({item.unit}) × {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
