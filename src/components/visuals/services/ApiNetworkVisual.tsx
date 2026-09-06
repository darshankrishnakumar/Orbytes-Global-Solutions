"use client";

import React, { useEffect, useRef } from "react";
import { Code2, Globe, Database, ArrowRight } from "lucide-react";

export function ApiNetworkVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;
    const width = (canvas.width = canvas.parentElement?.clientWidth || 450);
    const height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const endpoints = [
      { name: "CLIENT APP (NEXT.JS)", x: 80, y: height / 2, color: "#00e5ff" },
      { name: "API GATEWAY (GRAPHQL/REST)", x: width / 2, y: height / 2, color: "#38bdf8" },
      { name: "AUTH MICROSERVICE", x: width - 90, y: height * 0.28, color: "#a855f7" },
      { name: "DATABASE & CACHE", x: width - 90, y: height * 0.72, color: "#10b981" },
    ];

    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw Connection Lines
      ctx.strokeStyle = "rgba(0, 229, 255, 0.2)";
      ctx.lineWidth = 1.5;

      // Client to Gateway
      ctx.beginPath();
      ctx.moveTo(endpoints[0].x, endpoints[0].y);
      ctx.lineTo(endpoints[1].x, endpoints[1].y);
      ctx.stroke();

      // Gateway to Auth & DB
      ctx.beginPath();
      ctx.moveTo(endpoints[1].x, endpoints[1].y);
      ctx.lineTo(endpoints[2].x, endpoints[2].y);
      ctx.lineTo(endpoints[3].x, endpoints[3].y);
      ctx.moveTo(endpoints[1].x, endpoints[1].y);
      ctx.lineTo(endpoints[3].x, endpoints[3].y);
      ctx.stroke();

      // Animated JSON Packets
      const packetProg1 = (t * 0.8) % 1;
      const px1 = endpoints[0].x + (endpoints[1].x - endpoints[0].x) * packetProg1;
      const py1 = endpoints[0].y + (endpoints[1].y - endpoints[0].y) * packetProg1;

      ctx.fillStyle = "#00e5ff";
      ctx.shadowColor = "#00e5ff";
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(px1, py1, 4, 0, Math.PI * 2);
      ctx.fill();

      // Packet from Gateway to DB
      const packetProg2 = (t * 0.9 + 0.3) % 1;
      const px2 = endpoints[1].x + (endpoints[3].x - endpoints[1].x) * packetProg2;
      const py2 = endpoints[1].y + (endpoints[3].y - endpoints[1].y) * packetProg2;

      ctx.fillStyle = "#10b981";
      ctx.shadowColor = "#10b981";
      ctx.beginPath();
      ctx.arc(px2, py2, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw Endpoints
      endpoints.forEach((ep) => {
        ctx.fillStyle = "#0a142e";
        ctx.strokeStyle = ep.color;
        ctx.lineWidth = 2;
        ctx.shadowColor = ep.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(ep.x, ep.y, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 9px system-ui";
        ctx.textAlign = "center";
        ctx.fillText(ep.name, ep.x, ep.y + 34);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-[#081024]/90 backdrop-blur-md text-[11px] font-semibold text-cyan-300">
        <Code2 className="h-3.5 w-3.5 text-cyan-400" />
        <span>ENTERPRISE API MESH</span>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-[#081024]/90 backdrop-blur-md text-[11px] font-semibold text-emerald-400">
        <Database className="h-3.5 w-3.5" />
        <span>THROUGHPUT: &gt;10K REQ/SEC</span>
      </div>
    </div>
  );
}
