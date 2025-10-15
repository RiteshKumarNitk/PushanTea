import Header from "@/components/Header";
import PrivacyPolicy from "@/components/privacy"; // ✅ Our privacy component
import Footer from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | Dry Fruit House",
  description:
    "Read the privacy policy of Dry Fruit House website and how we handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header /> {/* ✅ Header */}
      <PrivacyPolicy /> {/* ✅ Privacy component content */}
    </div>
  );
}
