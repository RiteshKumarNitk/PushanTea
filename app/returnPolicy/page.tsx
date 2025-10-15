import Header from "@/components/Header";
import ReturnPolicy from "@/components/ReturnPolicy"; // ✅ Our return policy component
import Footer from "@/components/footer";

export const metadata = {
  title: "Return Policy | Dry Fruit House",
  description: "Read the return policy of Dry Fruit House and how returns and refunds are handled.",
};

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />         {/* ✅ Header */}
      <ReturnPolicy /> 
      <Footer/>  {/* ✅ Return policy content */}
    </div>
  );
}
