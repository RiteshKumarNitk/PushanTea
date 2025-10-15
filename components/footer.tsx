
"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faCcVisa,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faEnvelope, faPhone, faArrowUp } from "@fortawesome/free-solid-svg-icons";

// Dummy Logo Component (replace with real logo if available)
const Logo = () => (
  <div className="flex flex-col items-start">
    <Image
      src="/logo2.png" 
      alt="Dry Fruit House"
      width={150}
      height={40}
      className="object-contain"
    />
    <div className="text-xs text-[#4b2b2b] tracking-widest mt-[-4px]"></div>
  </div>
);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-12 pb-4 text-white border-t border-gray-200 bg-[#00492C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Section */}
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 border-b border-gray-300 pb-10">
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm">
              Pushaan Tea brings you a collection of carefully selected Tea from Rajasthan and across India.{" "}
              <a href="#" className="text-[#4b2b2b] hover:text-[#7b2424] font-semibold text-sm">
                [Explore More]
              </a>
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 text-white pt-2">
              <a href="#" aria-label="Facebook" className="text-white hover:text-[#7b2424]">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-[#7b2424]">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-[#7b2424]">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-amber-950 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/bulkshop" className="hover:underline">
                  Bulk Ordering
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:underline">
                  Shopping
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Account Info */}
          <div>
            <h3 className="text-lg font-semibold text-amber-950 mb-4">Account Info</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-lg font-semibold text-amber-950 mb-4">Contact Details</h3>

            <div className="flex items-start space-x-3 mb-4">
              <FontAwesomeIcon icon={faBuilding} className="text-[#4b2b2b] mt-1 text-xl flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                A12, Rd No 3, near evening news, Sudarshanpura,
                <br />
                Bais Godam, Jaipur, 
                <br />
                Rajasthan 302006
              </p>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-amber-950 text-xl flex-shrink-0" />
              <a href="mailto:info@dryfruithouse.com" className="text-sm hover:underline">
                pushaan@greenleaftea.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <FontAwesomeIcon icon={faPhone} className="text-amber-950 text-xl flex-shrink-0" />
              <a href="tel:+917483600212" className="text-sm hover:underline">
                +91-97999 98662
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Payments */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 text-xs text-gray-800">
          <p className="order-2 sm:order-1 mb-2 sm:mb-0">
            Copyright © 2025{" "}
            <strong className="font-bold text-amber-950">Pushaan Tea</strong>. All Rights Reserved.
          </p>

          <div className="flex space-x-2 order-1 sm:order-2 mb-2 sm:mb-0 text-2xl items-center">
            <FontAwesomeIcon icon={faCcVisa} className="text-gray-500" />
            <FontAwesomeIcon icon={faCcPaypal} className="text-gray-500" />
            <span className="font-bold text-sm text-gray-500">stripe</span>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="absolute right-6 -top-6 w-10 h-10 bg-[#7b2424] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#a03838] transition"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </footer>
  );
};

export default Footer;
