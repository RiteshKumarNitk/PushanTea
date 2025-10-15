"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className=" p-8 rounded-2xl shadow-lg text-center w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#00492C] mb-4">
          Welcome to Dashboard
        </h1>
      </div>
    </div>
  );
}
