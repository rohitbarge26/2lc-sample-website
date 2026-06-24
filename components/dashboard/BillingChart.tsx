"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { CreditCard } from "lucide-react";

const data = [
  { time: "00:00", calls: 4000, compute: 2400 },
  { time: "04:00", calls: 3000, compute: 1398 },
  { time: "08:00", calls: 2000, compute: 9800 },
  { time: "12:00", calls: 2780, compute: 3908 },
  { time: "16:00", calls: 1890, compute: 4800 },
  { time: "20:00", calls: 2390, compute: 3800 },
  { time: "24:00", calls: 3490, compute: 4300 },
];

export function BillingChart() {
  return (
    <GlassCard glow className="h-[400px] flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-emerald-400" />
          <h2 className="text-lg font-semibold text-white tracking-wide">Metered Usage</h2>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-400 uppercase tracking-wider">Current Bill</p>
          <p className="text-2xl font-bold text-white tracking-tight">$4,290<span className="text-sm text-zinc-500 font-normal">.50</span></p>
        </div>
      </div>

      <div className="flex-1 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorCompute" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="time" stroke="rgba(255,255,255,0.2)" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="rgba(255,255,255,0.2)" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${val / 1000}k`} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(15, 15, 20, 0.8)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(12px)' }}
              itemStyle={{ color: '#fff' }}
            />
            <Area type="monotone" dataKey="calls" stroke="#4F46E5" strokeWidth={3} fillOpacity={1} fill="url(#colorCalls)" />
            <Area type="monotone" dataKey="compute" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorCompute)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
}
