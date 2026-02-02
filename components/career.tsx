"use client"

export default function Career() {
  return (
    <div className="bg-gray-50">
      {/* ✅ Banner Image */}
      <div className="w-full pt-15">
        <img
          src="/contact.jpg"
          alt="Contact"
          className="w-full"
        />
      </div>

      {/* ✅ Career Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Want to be part of the Pushan Tea family?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pushan Tea is a team of passionate tea lovers, farmers, and innovators working together
          to bring authentic Indian tea experiences to the world. We take pride in promoting
          sustainability, fair trade, and purity in every cup.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          As a member of Pushan Tea, you’ll work with skilled professionals, creative marketers,
          and dedicated producers — all committed to making a difference in the tea industry.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          We believe in a culture of learning, collaboration, and growth. If you’re passionate
          about quality, sustainability, and innovation, we’d love to have you on our team.
        </p>
        <p className="text-gray-800 font-semibold mt-6">
          🌿 Ready to brew your career with Pushan Tea?
          Send your resume at{" "}
          <a
            href="mailto:hr@pushantea.com"
            className="text-green-700 hover:underline"
          >
            hr@pushantea.com
          </a>
        </p>
      </div>




      {/* ✅ Career Intro Section */}
      <section className="max-w-4xl mx-auto text-center py-12 px-6">
        <h2 className="text-3xl font-semibold text-[#5a1a1a] mb-4">
          Build Your Future with Pushan Tea
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">

          Fill out the form below to apply — we’ll get in touch if your profile matches our needs.
        </p>
      </section>

      {/* ✅ Career Form Section */}
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden md:flex mb-16">
        {/* Left: Office Details */}
        <div className="bg-[#5a1a1a] text-white p-8 md:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Contact </h2>

            {/* Phone */}
            <div className="flex items-start mb-6">

              <div>
                <p className="font-semibold">Call / WhatsApp</p>
                <p>+91-97999 98662</p>
              </div>
            </div>

            {/* Email */}
            <h3 className="text-xl font-semibold mt-8 mb-4 border-b border-red-800 pb-2">
              Email Address
            </h3>
            <div className="flex items-start mb-6">

              <p>hr@pushantea.com</p>
            </div>

            {/* Location */}
            <h3 className="text-xl font-semibold mt-8 mb-4 border-b border-red-800 pb-2">
              Office Location
            </h3>
            <div className="flex items-start mb-6">

              <p className="text-sm leading-relaxed">
                A12, Rd No 3, near evening news, Sudarshanpura, <br />
                Bais Godam, Jaipur, <br />
                Rajasthan 302006
              </p>
            </div>
          </div>
        </div>

        {/* Right: Career Application Form */}
        <div className="p-8 md:w-2/3">
          <form className="space-y-6">
            {/* Name + Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Full Name"
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
                  placeholder="Your Mobile Number"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#5a1a1a] focus:border-[#5a1a1a] sm:text-sm"
                  required
                />
              </div>
            </div>

            {/* Email + Position */}
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
                  placeholder="Your Email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#5a1a1a] focus:border-[#5a1a1a] sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="position"
                  className="block text-sm font-medium text-gray-700"
                >
                  Applying For *
                </label>
                <input
                  type="text"
                  id="position"
                  placeholder="Position / Role"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#5a1a1a] focus:border-[#5a1a1a] sm:text-sm"
                  required
                />
              </div>
            </div>



            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Cover Letter / Message
              </label>
              <textarea
                id="message"
                placeholder="Tell us about yourself..."
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-[#5a1a1a] focus:border-[#5a1a1a] sm:text-sm h-32 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#5a1a1a] hover:bg-[#4d1616] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5a1a1a]"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ✅ Bottom Small Image */}
      <div className="w-full">
        <img
          src="/lastimage.jpg"
          alt="Pushan Tea Team"
          className="w-full"
        />
      </div>
    </div>
  )
}
