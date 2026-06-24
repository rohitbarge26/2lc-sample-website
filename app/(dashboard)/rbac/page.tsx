"use client";

import { RBACMatrix } from "@/components/dashboard/RBACMatrix";

export default function RBACPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-white">Access Control</h1>
      <p className="text-zinc-400">Manage security matrices, roles, and fine-grained permissions across your workspaces.</p>
      
      <RBACMatrix />
    </div>
  );
}
