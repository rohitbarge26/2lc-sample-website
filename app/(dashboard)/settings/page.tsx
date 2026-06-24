"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Settings as SettingsIcon, Save } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-white">Workspace Settings</h1>
      <p className="text-zinc-400">Configure global preferences for the Aura platform.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <SettingsIcon className="w-5 h-5 text-indigo-400" />
            <h2 className="font-semibold text-white">General configuration</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-zinc-400">Workspace Name</label>
              <input type="text" defaultValue="Aura Enterprise" className="w-full bg-black/30 border border-white/10 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-indigo-500/50" />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-sm text-zinc-400">Support Email</label>
              <input type="email" defaultValue="support@aura.inc" className="w-full bg-black/30 border border-white/10 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-indigo-500/50" />
            </div>
            
            <button className="flex items-center justify-center gap-2 w-full mt-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg transition-colors">
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
