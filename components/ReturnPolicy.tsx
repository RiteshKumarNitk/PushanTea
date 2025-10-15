"use client"

import Image from "next/image";
export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ✅ Top Banner Section */}
      <div className="relative w-full h-64 mt-15">
        <Image
          src="/returnPolicy.jpg" // Replace with your actual banner image
          alt="Return Policy Banner"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>

      {/* ✅ Content Section */}
      <div className="max-w-8xl mx-auto p-6 leading-7">
        <h2 className="text-xl font-semibold mt-6 mb-2">Returns Policy</h2>
        <p>
          Got a question about our returns policy? Find the ins and outs detailed here.
          If you still have questions give our helpful team a ring.
        </p>

        <p className="mt-4">
          We hope you're happy with your purchase. If you decide it isn't right for you,
          you can return or exchange unwanted items within <b>10 days of purchase</b>.
          Please note that all refunds will be made back to the original tender type.
        </p>

        <p className="mt-4">
          For in-store purchases where mixed payment methods have been used, we will
          process the refund in order of Gift Cards, then Credit/Debit Card, and
          cash will be the last amount to be refunded.
        </p>

        <h3 className="font-semibold mt-6">Please note, items must:</h3>
        <ul className="list-disc list-inside mt-2">
          <li>Be unused and in their original condition (including all packaging and tags intact)</li>
          <li>Have proof of purchase such as receipt or order confirmation</li>
          <li>Be returned within 10 days</li>
        </ul>

        <p className="mt-4">
          Customers must return the product(s) at their own cost and comply with Dry Fruit House staff directions
          to facilitate a refund or exchange.
        </p>

        <p className="mt-4 font-semibold">
          NOTE: Items cannot be returned or exchanged for change of mind, incorrect product, or incorrect colour choice,
          unless they are faulty, damaged, or missing.
        </p>

        <p className="mt-4">
          After receiving the returned product(s), Dry Fruit House will issue a refund as soon as reasonably practicable,
          and you will receive an email acknowledgement. Refunds will be processed by reversing the initial transaction.
          Dry Fruit House is not responsible for delays caused by third-party payment gateways.
        </p>
      </div>
    </div>
  );
}
