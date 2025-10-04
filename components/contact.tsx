"use client";

import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    location: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can send data to API here
  };

  return (
    <div className="min-h-screen bg-[#f9f8f3] flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">

        {/* Left Section - Contact Info */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <h2 className="text-xl font-semibold">Visit Our Factory</h2>

          <div className="space-y-2">
            <p className="flex items-center gap-2">
              📞 <span className="text-gray-700">+91-97999 98662</span>
            </p>
            <p className="flex items-center gap-2">
              📧 <span className="text-gray-700">pushaan@greenleaftea.com</span>
            </p>
            <p className="flex items-center gap-2">
              📍 <span className="text-gray-700">
                A12, Rd No 3, near evening news, Sudarshanpura, Bais Godam, Jaipur, Rajasthan 302006
              </span>
            </p>
          </div>

          <div className="rounded-xl overflow-hidden mt-4">
            <iframe
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.92286199222!2d75.76904367436865!3d26.87676936193684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40b6a3ad8b9%3A0x5d8a68164c6be4f!2sPushaan%20Tradelink%20(P.)%20Ltd.!5e0!3m2!1sen!2sin!4v1694871000000!5m2!1sen!2sin"
             src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d86728.94481301703!2d75.7147652!3d26.8999862!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x396db43d861e3ceb%3A0x7b70a1cc9bd2914a!2sA12%2C%20Rd%20No%203%2C%20near%20evening%20news%2C%20Sudarshanpura%2C%20Bais%20Godam%2C%20Jaipur%2C%20Rajasthan%20302006!3m2!1d26.8949592!2d75.7915256!5e1!3m2!1sen!2sin!4v1759572309464!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Book a Factory Visit / Send Inquiry</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border rounded-md px-3 py-2 w-full"
              />
            </div>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full"
            />

            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full"
            >
              <option value="">Select Product</option>
              <option value="Green Tea">Green Tea</option>
              <option value="Black Tea">Black Tea</option>
              <option value="Herbal Tea">Herbal Tea</option>
            </select>

            <input
              type="text"
              name="quantity"
              placeholder="Required Quantity (e.g., 500kg)"
              value={formData.quantity}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full"
            />

            <input
              type="text"
              name="location"
              placeholder="Delivery Location"
              value={formData.location}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 w-full"
            />

            <textarea
              name="message"
              placeholder="Additional Instructions / Inquiry"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="border rounded-md px-3 py-2 w-full"
            ></textarea>

            <button
              type="submit"
              className="bg-[#a25a00] hover:bg-[#844600] text-white w-full py-2 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
