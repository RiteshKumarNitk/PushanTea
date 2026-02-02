"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faCcVisa,
  faCcPaypal,
} from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

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
    <div className="text-xs text-amber-100 tracking-widest mt-[-4px]"></div>
  </div>
);

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

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
              <Link href="#" className="text-amber-200 hover:text-amber-400 font-semibold text-sm">
                [Explore More]
              </Link>
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 text-white pt-2">
              <a href="#" aria-label="Facebook" className="text-white hover:text-green-200 transition-colors">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-green-200 transition-colors">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white hover:text-green-200 transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-amber-100 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><Link href="/about" className="hover:text-amber-200 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-amber-200 transition-colors">Contact Us</Link></li>
              <li><Link href="/bulkshop" className="hover:text-amber-200 transition-colors">Bulk Ordering</Link></li>
              <li><Link href="/shop" className="hover:text-amber-200 transition-colors">Shopping</Link></li>
            </ul>
          </div>

          {/* Column 3: Account Info */}
          <div>
            <h3 className="text-lg font-semibold text-amber-100 mb-4">Account Info</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><Link href="#" className="hover:text-amber-200 transition-colors">My Account</Link></li>
              <li><Link href="/privacy" className="hover:text-amber-200 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/returnPolicy" className="hover:text-amber-200 transition-colors">Return Policy</Link></li>
              <li><Link href="/termsCondition" className="hover:text-amber-200 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-lg font-semibold text-amber-100 mb-4">Contact Details</h3>

            <div className="flex items-start space-x-3 mb-4 text-gray-200">
              <FontAwesomeIcon icon={faBuilding} className="text-amber-100 mt-1 text-xl flex-shrink-0" />
              <p className="text-sm leading-relaxed">
                A12, Rd No 3, near evening news, Sudarshanpura,<br />
                Bais Godam, Jaipur,<br />
                Rajasthan 302006
              </p>
            </div>

            <div className="flex items-center space-x-3 mb-4 text-gray-200">
              <FontAwesomeIcon icon={faEnvelope} className="text-amber-100 text-xl flex-shrink-0" />
              <a href="mailto:pushaan@greenleaftea.com" className="text-sm hover:text-amber-200 transition-colors">
                pushaan@greenleaftea.com
              </a>
            </div>

            <div className="flex items-center space-x-3 text-gray-200">
              <FontAwesomeIcon icon={faPhone} className="text-amber-100 text-xl flex-shrink-0" />
              <a href="tel:+919799998662" className="text-sm hover:text-amber-200 transition-colors">
                +91-97999 98662
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Payments */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 text-[10px] md:text-xs text-gray-400">
          <p className="order-2 sm:order-1 mb-2 sm:mb-0">
            Copyright © 2025 {" "}
            <strong className="font-bold text-amber-100">Pushaan Tea</strong>. All Rights Reserved.
          </p>

          <div className="flex space-x-3 order-1 sm:order-2 mb-2 sm:mb-0 items-center opacity-40 hover:opacity-100 transition-opacity">
            <FontAwesomeIcon icon={faCcVisa} size="lg" />
            <FontAwesomeIcon icon={faCcPaypal} size="lg" />
            <span className="font-bold text-xs">stripe</span>
          </div>
        </div>
      </div>

      {/* Modern Fixed Back to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[2000] p-3 bg-[#00492C] text-amber-100 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 group backdrop-blur-md"
          >
            <div className="relative z-10">
              <ChevronUp className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={3} />
            </div>

            {/* Animated Ring */}
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-amber-400/20 rounded-full pointer-events-none"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}

export default Footer;