"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gray-50">
  {/* ✅ Full Width Banner Image */}
  <div className="w-full pt-15">
    <img
      src="/contact.jpg"
      alt="Contact"
      className="w-full"
    />
  </div>

      {/* ✅ Get In Touch Section */}
      <section className="max-w-4xl mx-auto text-center py-12 px-6">
        <h2 className="text-3xl font-semibold text-[#5a1a1a] mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          We are here to help our customers all over the world. We would be
          happy to assist you.
          <br />
          So let us know what your queries are or what you are looking for — we
          will get back to you shortly.
        </p>
      </section>

      {/* ✅ Contact Section */}
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden lg:flex mb-16">
        {/* Left: Contact Info */}
        <div className="bg-[#5a1a1a] text-white p-8 lg:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Contact Details</h2>

            {/* Phone */}
            <div className="flex items-start mb-6">
              <Phone className="w-6 h-6 mr-3 mt-1 text-red-300" />
              <div>
                <p className="font-semibold">Reach us on call/WhatsApp</p>
                <p>+91-97999 98662</p>
              </div>
            </div>

            {/* Email */}
            <h3 className="text-xl font-semibold mt-8 mb-4 border-b border-red-800 pb-2">
              Email Address
            </h3>
            <div className="flex items-start mb-6">
              <Mail className="w-6 h-6 mr-3 mt-1 text-red-300" />
              <p>pushaan@greenleaftea.com</p>
            </div>

            {/* Location */}
            <h3 className="text-xl font-semibold mt-8 mb-4 border-b border-red-800 pb-2">
              Office Location
            </h3>
            <div className="flex items-start mb-6">
              <MapPin className="w-6 h-6 mr-3 mt-1 text-red-300 flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                A12, Rd No 3, near evening news, Sudarshanpura,
                <br />
                Bais Godam, Jaipur, 
                <br />
                Rajasthan 302006
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mt-10 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 border border-white rounded-full hover:bg-white hover:text-[#5a1a1a] transition duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 border border-white rounded-full hover:bg-white hover:text-[#5a1a1a] transition duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 border border-white rounded-full hover:bg-white hover:text-[#5a1a1a] transition duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 border border-white rounded-full hover:bg-white hover:text-[#5a1a1a] transition duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="p-8 lg:w-2/3">
          <form className="space-y-6">
            {/* Name + Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#5a1a1a] focus:border-[#5a1a1a] sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile No. *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Mobile No."
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#5a1a1a] focus:border-[#5a1a1a] sm:text-sm"
                  required
                />
              </div>
            </div>

            {/* Email + Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Id *
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Id"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#5a1a1a] focus:border-[#5a1a1a] sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#5a1a1a] focus:border-[#5a1a1a] sm:text-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Write Your Message *
              </label>
              <textarea
                id="message"
                placeholder="Write Your Message"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#5a1a1a] focus:border-[#5a1a1a] sm:text-sm h-32 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#5a1a1a] hover:bg-[#4d1616] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5a1a1a]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
