"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // 👈 import styles
import { useRouter } from "next/navigation";

export default function TradeRegisterPage() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    contact_name: "",
    business_name: "",
    company_registration: "",
    company_vat: "",
    position_in_business: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    address_2: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    type_business: "",
    interest: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("https://backend.tigertigerfoods.com/api/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setMessage(data.message);

      if (data.success) {
        // ✅ clear form only if success
        setFormData({
          contact_name: "",
          business_name: "",
          company_registration: "",
          company_vat: "",
          position_in_business: "",
          email: "",
          phone: "",
          password: "",
          address: "",
          address_2: "",
          city: "",
          state: "",
          zip_code: "",
          country: "",
          type_business: "",
          interest: "",
        });

        // ✅ success toast
        toast.success(data.message, {
          position: "top-right",
          autoClose: 3000,
          onClose: () => {
            router.push("/login");
          },
        });
      } else {
        toast.error(`${data.message}`, {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Banner */}
      <div
        style={{
          backgroundImage: "url('/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
        }}
      ></div>

      {/* Form */}
      <section className="py-12">
        <form onSubmit={handleSubmit}>
          <div className="max-w-6xl mx-auto px-6 md:px-0 flex flex-col md:flex-row gap-8 align-center">
            {/* Billing Information */}
            <div className="md:w-1/2 flex flex-col gap-6">
              <h6 className="eczar text-[30px] text-[#220016]">
                Billing Information
              </h6>

              <input
                type="text"
                name="contact_name"
                value={formData.contact_name}
                onChange={handleChange}
                placeholder="Contact Name*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />

              <input
                type="text"
                name="business_name"
                value={formData.business_name}
                onChange={handleChange}
                placeholder="Business Name*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />

              <input
                type="text"
                name="company_registration"
                value={formData.company_registration}
                onChange={handleChange}
                placeholder="Company Registration Number*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />

              <input
                type="text"
                name="company_vat"
                value={formData.company_vat}
                onChange={handleChange}
                placeholder="Company VAT Number*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />

              <input
                type="text"
                name="position_in_business"
                value={formData.position_in_business}
                onChange={handleChange}
                placeholder="Position in Business*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />
            </div>

            {/* Address Information */}
            <div className="md:w-1/2 flex flex-col gap-6">
              <h6 className="eczar text-[30px] text-[#220016]">
                Address Information
              </h6>

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />

              <input
                type="text"
                name="address_2"
                value={formData.address_2}
                onChange={handleChange}
                placeholder="Address 2"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />

              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />

              <input
                type="text"
                name="zip_code"
                value={formData.zip_code}
                onChange={handleChange}
                placeholder="Zip Code*"
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              />

              <select
                name="type_business"
                value={formData.type_business}
                onChange={handleChange}
                className="w-full bg-white p-[24px] border border-[#220016] rounded-[14px]"
              >
                <option value="">Select</option>
                <option value="Wholesale">Wholesale</option>
                <option value="Food Service">Food Service</option>
                <option value="Cash and Carry">Cash and Carry</option>
                <option value="Retail Shop">Retail Shop</option>
                <option value="HORECA">HORECA</option>
              </select>

              <h6 className="eczar text-[30px] text-[#220016]">
                Primary Interest
              </h6>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="interest"
                    value="Chinese"
                    checked={formData.interest === "Chinese"}
                    onChange={handleChange}
                  />
                  Chinese
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="interest"
                    value="Thai"
                    checked={formData.interest === "Thai"}
                    onChange={handleChange}
                  />
                  Thai
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="interest"
                    value="Vietnamese"
                    checked={formData.interest === "Vietnamese"}
                    onChange={handleChange}
                  />
                  Vietnamese
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="interest"
                    value="Korean"
                    checked={formData.interest === "Korean"}
                    onChange={handleChange}
                  />
                  Korean
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="interest"
                    value="Japanese"
                    checked={formData.interest === "Japanese"}
                    onChange={handleChange}
                  />
                  Japanese
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="interest"
                    value="Indian"
                    checked={formData.interest === "Indian"}
                    onChange={handleChange}
                  />
                  Indian
                </label>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 md:px-0">
            <button
              type="submit"
              disabled={loading}
              className=" w-full mt-3 bg-[#FFEB57] hover:bg-[#f9e141] border border-black text-black py-[20px] rounded-[14px]"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>

        {/* 👇 this makes toasts appear */}
        <ToastContainer />
      </section>
    </>
  );
}
