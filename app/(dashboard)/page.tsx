"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { BillingChart } from "@/components/dashboard/BillingChart";
import { Activity, ShieldCheck, Zap } from "lucide-react";

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard glow className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-indigo-400">
            <Zap className="w-5 h-5" />
            <h3 className="font-semibold">Active Sessions</h3>
          </div>
          <p className="text-3xl font-bold text-white tracking-tight">1,204</p>
          <p className="text-sm text-emerald-400">+14% from last hour</p>
        </GlassCard>
        
        <GlassCard glow className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-purple-400">
            <Activity className="w-5 h-5" />
            <h3 className="font-semibold">Event Throughput</h3>
          </div>
          <p className="text-3xl font-bold text-white tracking-tight">45.2k<span className="text-xl text-zinc-400">/sec</span></p>
          <p className="text-sm text-emerald-400">Optimal processing</p>
        </GlassCard>
        
        <GlassCard glow className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="font-semibold">Security Threat Level</h3>
          </div>
          <p className="text-3xl font-bold text-white tracking-tight">Low</p>
          <p className="text-sm text-zinc-400">0 critical incidents</p>
        </GlassCard>
      </div>

      <div className="w-full">
        <BillingChart />
      </div>
    </div>
  );
}
