import { Header } from "@/components/Header";
import TermsCondition from "@/components/termsCondition"; // ✅ Correct import
import Footer from "@/components/footer"; 

export const metadata = {
  title: "Terms & Conditions | Dry Fruit House",
  description:
    "Read the terms and conditions of using Dry Fruit House’s website and services.",
};

export default function TermsConditionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TermsCondition /> {/* ✅ Correct component usage */}
      <Footer/>
    </div>
  );
}
