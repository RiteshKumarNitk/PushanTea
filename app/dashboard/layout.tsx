"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard ", path: "/dashboard", icon: "🏠" },
    { name: "Product", path: "/dashboard/product", icon: "📋" },
    { name: "Buyers List", path: "/dashboard/buyers", icon: "👤" },
    { name: "Settings", path: "/dashboard/settings", icon: "⚙️" },
    { name: "Reports", path: "/dashboard/reports", icon: "📊" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully!");
    router.push("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      {/* ================= Sidebar ================= */}
      <aside className="w-64 bg-[#00492C] rounded-r-lg p-2 text-white flex flex-col">
        <div className="p-6 text-3xl text-center font-bold ">
          <img src="/logo2.png" alt="logo" />
        </div>

        <nav className="flex-1 p-6 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-lg transition ${
                pathname === item.path
                  ? "bg-green-700 font-semibold"
                  : "hover:bg-green-800"
              }`}
            >
              <span>{item.icon}</span> {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="m-5 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-semibold"
        >
          Logout
        </button>
      </aside>

      {/* ================= Main Content ================= */}
      <div className="flex-1 flex flex-col p-2">
        {/* ===== Header ===== */}
        <header className="bg-white rounded-lg shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#00492C]">
            {menuItems.find((item) => item.path === pathname)?.name ||
              "Dashboard"}
          </h1>
          <div className="flex items-center gap-3 text-gray-700">
            <span>👋 Welcome, Admin</span>
          </div>
        </header>

        {/* ===== Page Content ===== */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
