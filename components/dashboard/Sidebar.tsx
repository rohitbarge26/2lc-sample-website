"use client";

import { Activity, CreditCard, LayoutDashboard, Settings, Shield, Users } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/" },
  { icon: Activity, label: "Real-time Streams", href: "/streams" },
  { icon: Shield, label: "Access Control", href: "/rbac" },
  { icon: CreditCard, label: "Billing & Usage", href: "/billing" },
  { icon: Users, label: "Team", href: "/team" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <GlassCard className="w-64 h-[calc(100vh-2rem)] sticky top-4 flex flex-col hidden lg:flex rounded-2xl">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <span className="text-white font-bold text-xl">A</span>
        </div>
        <span className="text-xl font-semibold tracking-wide text-white">Aura</span>
      </div>

      <nav className="flex-1 flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              href={item.href}
              key={item.href}
              className="relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors w-full text-left group"
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-indigo-500/20 rounded-xl"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon
                size={18}
                className={`relative z-10 transition-colors ${
                  isActive ? "text-indigo-400" : "text-zinc-400 group-hover:text-zinc-300"
                }`}
              />
              <span
                className={`relative z-10 transition-colors ${
                  isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-300"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/10">
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px]">
            <div className="w-full h-full rounded-full bg-zinc-900 border-2 border-transparent" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-zinc-500">Enterprise Workspace</p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
