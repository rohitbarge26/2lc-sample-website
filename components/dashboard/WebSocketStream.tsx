"use client";

import { useState, useEffect } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LogEntry {
  id: number;
  timestamp: string;
  service: string;
  status: "success" | "warning" | "error";
  message: string;
}

const services = ["auth-service", "payment-gateway", "data-pipeline", "websocket-router"];
const statuses = ["success", "success", "success", "warning", "error"] as const;
const messages = [
  "Connection established.",
  "Payload processed successfully.",
  "Retrying request.",
  "Timeout occurred.",
  "Rate limit exceeded."
];

export function WebSocketStream() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    if (!isLive) return;

    let idCounter = 0;
    const interval = setInterval(() => {
      const newLog: LogEntry = {
        id: idCounter++,
        timestamp: new Date().toISOString().split("T")[1].slice(0, -1),
        service: services[Math.floor(Math.random() * services.length)],
        status: statuses[Math.floor(Math.random() * statuses.length)],
        message: messages[Math.floor(Math.random() * messages.length)]
      };

      setLogs((prev) => [newLog, ...prev].slice(0, 10)); // Keep last 10
    }, 1500);

    return () => clearInterval(interval);
  }, [isLive]);

  return (
    <GlassCard glow className="flex flex-col h-[400px]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-indigo-400" />
          <h2 className="text-lg font-semibold text-white tracking-wide">Live Event Stream</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3">
            {isLive && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>}
            <span className={`relative inline-flex rounded-full h-3 w-3 ${isLive ? 'bg-emerald-500' : 'bg-zinc-600'}`}></span>
          </span>
          <span className="text-xs text-zinc-400 uppercase tracking-wider font-medium">{isLive ? 'Connected' : 'Paused'}</span>
        </div>
      </div>

      <div className="flex-1 overflow-hidden relative rounded-xl bg-black/40 border border-white/5 p-4 font-mono text-xs">
        <AnimatePresence>
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-4 mb-2 pb-2 border-b border-white/5 last:border-0"
            >
              <span className="text-zinc-500 whitespace-nowrap">{log.timestamp}</span>
              <span className={`font-semibold ${log.status === 'success' ? 'text-emerald-400' : log.status === 'error' ? 'text-red-400' : 'text-amber-400'}`}>
                [{log.service}]
              </span>
              <span className="text-zinc-300 break-all">{log.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Fading overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      </div>
    </GlassCard>
  );
}
