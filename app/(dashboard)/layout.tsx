"use client";

import dynamic from "next/dynamic";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";

const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen p-4 flex gap-6 max-w-[1920px] mx-auto relative">
      <Scene />
      
      <Sidebar />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
