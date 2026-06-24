"use client";

import { WebSocketStream } from "@/components/dashboard/WebSocketStream";

export default function StreamsPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-white">Real-time Streams</h1>
      <p className="text-zinc-400">Monitor all incoming WebSocket events and API payload hooks in real-time.</p>
      
      <WebSocketStream />
    </div>
  );
}
