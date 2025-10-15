import { Header } from "@/components/HeaderAdmin";
import Footer from "@/components/footer";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | Dry Fruit House",
  description: "Read the privacy policy of Dry Fruit House website and how we handle your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />

      {/* ✅ Top Banner Section */}
      <div className="relative w-full h-64 mt-15">
        <Image
          src="/privacy.jpg" // You can replace with your actual banner image
          alt="Privacy Policy Banner"
          fill
          className="object-cover opacity-80"
          priority
        />
        {/* ✅ Overlay text can be added here if needed */}
      </div>

      {/* ✅ Content Section */}
      <div className="max-w-8xl mx-auto p-6 leading-7">
        <h2 className="text-xl font-semibold mt-6 mb-2">Who we are</h2>
        <p>Our website address is: <b>dryfruithouse.com</b></p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          What personal data we collect and why we collect it
        </h2>

        <h3 className="font-semibold mt-4">Comments</h3>
        <p>
          When visitors leave comments on the site we collect the data shown in the comments form,
          and also the visitor’s IP address and browser user agent string to help spam detection.
        </p>
        <p>
          An anonymized string created from your email address (also called a hash) may be provided to
          the Gravatar service to see if you are using it. The Gravatar service privacy policy is 
          available here: <a href="https://automattic.com/privacy/" className="text-blue-600 underline">https://automattic.com/privacy/</a>.
          After approval of your comment, your profile picture is visible to the public in the context of your comment.
        </p>

        <h3 className="font-semibold mt-4">Media</h3>
        <p>
          If you upload images to the website, you should avoid uploading images with embedded location data
          (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
        </p>

        <h3 className="font-semibold mt-4">Cookies</h3>
        <p>
          If you leave a comment on our site, you may opt-in to saving your name, email address, and website in cookies.
          These cookies are for your convenience and last for one year.
        </p>
        <p>
          If you have an account and log in, temporary cookies may be set to check if your browser accepts cookies. 
          Login cookies last two days, screen options cookies last one year, and "Remember Me" login lasts two weeks.
          Login cookies are removed upon logout. Editing or publishing articles sets an additional cookie that expires after 1 day.
        </p>

        <h3 className="font-semibold mt-4">Embedded content from other websites</h3>
        <p>
          Articles may include embedded content (videos, images, articles, etc.) from other websites. 
          These external websites may collect data about you, use cookies, embed tracking, and monitor your interaction.
        </p>

        <h3 className="font-semibold mt-4">How long we retain your data</h3>
        <p>
          Comments and their metadata are retained indefinitely to recognize and approve follow-up comments automatically.
          User profile data is stored and can be viewed, edited, or deleted by the user. Website administrators can also edit this information.
        </p>

        <h3 className="font-semibold mt-4">What rights you have over your data</h3>
        <p>
          You can request an exported file of your personal data or request its deletion, except for data required to be kept
          for administrative, legal, or security purposes.
        </p>

        <h3 className="font-semibold mt-4">Where we send your data</h3>
        <p>
          Visitor comments may be checked through an automated spam detection service.
        </p>
      </div>

      <Footer />
    </div>
  );
}
