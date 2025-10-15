import Image from "next/image";

export const metadata = {
  title: "Terms & Conditions | Pushan Tea",
  description:
    "Read the terms and conditions of using Pushan Tea’s website and services.",
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ✅ Top Banner Section */}
      <div className="relative w-full h-64 mt-15">
        <Image
          src="/termCondition.jpg"
          alt="Terms & Conditions Banner"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>

      {/* ✅ Content Section */}
      <div className="max-w-8xl mx-auto p-6 leading-7">
        <p>
          This website is owned and managed by <b>Pushan Tea</b>. By accessing
          and using the www.pushantea.com website (the “Website”), you are
          agreeing to be legally bound by these Terms & Conditions. The terms
          “You” and “User” refer to anyone who accesses the Website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Changes to Terms & Conditions
        </h2>
        <p>
          Pushan Tea may change these Terms & Conditions at any time without
          notice. Changes will be posted on the website under “Terms &
          Conditions”. Your use of the Website after any changes have been
          posted will constitute your agreement to the modified Terms &
          Conditions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Use of the Website</h2>
        <p>
          Pushan Tea grants you a non-exclusive, non-transferable, limited
          license to access and use the Website for personal, non-commercial
          purposes. You agree not to copy, reproduce, or distribute any content
          without written permission.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Registration</h2>
        <p>
          During registration, you must provide accurate information. Failure to
          do so may result in termination of access.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Pricing</h2>
        <p>All prices displayed are subject to change without notice.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Product Specifications
        </h2>
        <p>
          Features and specifications of products may change without notice.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Payment</h2>
        <p>
          Payments can be made via credit card, debit card, net banking, or UPI
          as per the checkout process.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Delivery and Ownership
        </h2>
        <p>
          We aim to deliver products promptly, but delays may occur due to
          external factors. Pushan Tea is not liable for such delays.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Faulty or Damaged Goods
        </h2>
        <p>
          Products that are faulty or damaged will be replaced according to the
          warranty policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Limitation of Liability
        </h2>
        <p>
          Your use of the Website is at your own risk. Pushan Tea shall not be
          liable for any damages arising out of the use of this Website.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">User Content</h2>
        <p>
          Users grant Pushan Tea a non-exclusive right to use materials entered
          on the Website. Users agree to indemnify Pushan Tea from damages
          arising from misuse or breach.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Fraudulent or Declined Transactions
        </h2>
        <p>
          Pushan Tea reserves the right to recover costs and legal fees from
          individuals engaging in fraudulent activities.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Non-Transferability</h2>
        <p>
          Your account is non-transferable, and all rights terminate upon your
          death.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Governing Law and Jurisdiction
        </h2>
        <p>
          These Terms are governed by the laws of the Republic of India, and
          courts at Jaipur, India, have exclusive jurisdiction.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">Miscellaneous</h2>
        <p>
          Pushan Tea may discontinue or change the Website at any time. No
          employee has authority to alter these Terms.
        </p>
      </div>
    </div>
  );
}
