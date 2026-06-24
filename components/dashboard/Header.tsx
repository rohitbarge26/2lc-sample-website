"use client";

import { Bell, ChevronDown, Search } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function Header() {
  return (
    <header className="sticky top-4 z-40 mb-8">
      <GlassCard className="h-16 flex items-center justify-between px-6 py-0 rounded-2xl">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative group w-full max-w-md hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search resources, logs, or metrics..."
              className="w-full bg-black/20 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors">
            <span className="text-xs font-medium text-zinc-300">Production Env</span>
            <ChevronDown className="w-4 h-4 text-zinc-400" />
          </div>
          <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
            <Bell className="w-5 h-5 text-zinc-400" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
          </button>
        </div>
      </GlassCard>
    </header>
  );
}
