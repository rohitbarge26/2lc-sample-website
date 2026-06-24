"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ShieldAlert, Check, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const roles = ["Owner", "Manager", "Developer", "Viewer"];
const permissions = [
  "View Analytics",
  "Manage Users",
  "Edit Billing",
  "API Access",
  "Delete Projects"
];

const initialMatrix = {
  Owner: { "View Analytics": true, "Manage Users": true, "Edit Billing": true, "API Access": true, "Delete Projects": true },
  Manager: { "View Analytics": true, "Manage Users": true, "Edit Billing": false, "API Access": true, "Delete Projects": false },
  Developer: { "View Analytics": true, "Manage Users": false, "Edit Billing": false, "API Access": true, "Delete Projects": false },
  Viewer: { "View Analytics": true, "Manage Users": false, "Edit Billing": false, "API Access": false, "Delete Projects": false }
};

export function RBACMatrix() {
  const [matrix, setMatrix] = useState<Record<string, Record<string, boolean>>>(initialMatrix);

  const togglePermission = (role: string, perm: string) => {
    if (role === "Owner") return; // Owner permissions cannot be changed
    setMatrix(prev => ({
      ...prev,
      [role]: {
        ...prev[role],
        [perm]: !prev[role][perm]
      }
    }));
  };

  return (
    <GlassCard glow className="overflow-x-auto">
      <div className="flex items-center gap-2 mb-6">
        <ShieldAlert className="w-5 h-5 text-purple-400" />
        <h2 className="text-lg font-semibold text-white tracking-wide">Security Matrix</h2>
      </div>

      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr>
            <th className="pb-4 border-b border-white/10 font-medium text-zinc-400 text-sm">Permissions</th>
            {roles.map(role => (
              <th key={role} className="pb-4 border-b border-white/10 font-medium text-center text-sm">
                <span className={`px-2 py-1 rounded-md text-xs border ${
                  role === "Owner" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                  role === "Manager" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                  role === "Developer" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                  "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
                }`}>
                  {role}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {permissions.map((perm) => (
            <tr key={perm} className="group border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
              <td className="py-4 text-sm text-zinc-300">{perm}</td>
              {roles.map(role => (
                <td key={`${role}-${perm}`} className="py-4 text-center">
                  <button
                    onClick={() => togglePermission(role, perm)}
                    disabled={role === "Owner"}
                    className={`relative inline-flex items-center justify-center w-8 h-8 rounded-lg transition-all ${
                      matrix[role][perm] 
                        ? "bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]" 
                        : "bg-white/5 text-zinc-600 hover:bg-white/10"
                    } ${role === "Owner" ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    {matrix[role][perm] ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </GlassCard>
  );
}
