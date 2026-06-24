"use client";

import { BillingChart } from "@/components/dashboard/BillingChart";

export default function BillingPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-white">Billing & Usage</h1>
      <p className="text-zinc-400">Analyze compute costs, API usage, and projected meter billing.</p>
      
      <BillingChart />
    </div>
  );
}
