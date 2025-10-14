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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can send data to API here
  };

  return (
    <div className="min-h-screen bg-amber-50/30 flex flex-col items-center justify-start">

      {/* Page Heading with Background */}
    <div className="w-full bg-[#00492C] pt-20 py-5">
  <div className="text-center">
    {/* Main Heading with background and padding */}
    <h1 className="text-4xl md:text-5xl font-bold text-amber-800 py-4 px-6 mb-4">
      Contact Us
    </h1>

    {/* Subheading */}
    <p className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto">
      Have questions or want to schedule a factory visit? Reach out to us and we’ll assist you.

    </p>
  </div>
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full bg-amber-50/30 max-w-7xl">

        {/* Left Section - Contact Info */}
        <div className="bg-amber-50/30 p-10 flex flex-col">
          <h2 className="text-xl font-semibold text-[#00492C]">Visit Our Factory</h2>

          <div className="space-y-3 text-green-900 text-base">
            <p className="flex items-center gap-3">📞 <span>+91-97999 98662</span></p>
            <p className="flex items-center gap-3">📧 <span>pushaan@greenleaftea.com</span></p>
            <p className="flex items-start gap-3">
              📍 <span>A12, Rd No 3, near evening news, Sudarshanpura, Bais Godam, Jaipur, Rajasthan 302006</span>
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-green-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d86728.94481301703!2d75.7147652!3d26.8999862!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x396db43d861e3ceb%3A0x7b70a1cc9bd2914a!2sA12%2C%20Rd%20No%203%2C%20near%20evening%20news%2C%20Sudarshanpura%2C%20Bais%20Godam%2C%20Jaipur%2C%20Rajasthan%20302006!3m2!1d26.8949592!2d75.7915256!5e1!3m2!1sen!2sin!4v1759572309464!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Section - Inquiry Form */}
        <div className="bg-amber-50/30  p-8">
          <h2 className="text-xl font-semibold text-[#00492C] mb-6">Book a Visit / Send Inquiry</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="border border-green-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border border-green-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-green-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="border border-green-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="border border-green-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="text"
              name="location"
              placeholder="Delivery Location"
              value={formData.location}
              onChange={handleChange}
              className="border border-green-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              name="message"
              placeholder="Additional Instructions / Inquiry"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="border border-green-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="bg-[#00492C] hover:bg-green-800 text-white font-semibold w-full py-3 rounded-lg transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
