"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submit
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Optional: Validate inputs (you can add your own logic or API call here)
    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    // Example: check static credentials (you can replace with API)
    if (email === "admin@example.com" && password === "123456") {
      // Redirect to dashboard
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#00492C] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#00492C] mb-6">
          Login
        </h1>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-[#00492C] focus:border-[#00492C] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-[#00492C] focus:border-[#00492C] outline-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#00492C] hover:bg-[#00613f] text-white rounded-lg"
          >
            Login
          </Button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-[#00492C] font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
