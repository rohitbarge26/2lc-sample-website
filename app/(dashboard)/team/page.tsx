"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Users, Mail, CheckCircle2 } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-white">Team Management</h1>
      <p className="text-zinc-400">Invite and manage members of your enterprise workspace.</p>
      
      <GlassCard glow className="w-full">
        <div className="flex items-center gap-2 mb-6 text-indigo-400">
          <Users className="w-5 h-5" />
          <h2 className="font-semibold text-white">Active Members</h2>
        </div>
        
        <div className="space-y-4">
          {[
            { name: "Alice Johnson", role: "Owner", email: "alice@aura.inc" },
            { name: "Bob Smith", role: "Manager", email: "bob@aura.inc" },
            { name: "Charlie Davis", role: "Developer", email: "charlie@aura.inc" },
          ].map((user, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-white">{user.name}</p>
                  <p className="text-xs text-zinc-400 flex items-center gap-1">
                    <Mail className="w-3 h-3" /> {user.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 text-xs rounded-md bg-white/10 text-zinc-300">
                  {user.role}
                </span>
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
