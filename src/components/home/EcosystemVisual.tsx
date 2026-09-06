"use client";

import React, { useEffect, useRef, useState } from "react";

interface Node {
  id: string;
  label: string;
  category: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulseOffset: number;
}

export function EcosystemVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Center coordinates
    const cx = width / 2;
    const cy = height / 2;

    // Define core ecosystem nodes around central Technosprint Core
    const nodes: Node[] = [
      { id: "core", label: "TECHNOSPRINT", category: "Core Hub", x: cx, y: cy, vx: 0, vy: 0, radius: 26, color: "#00e5ff", pulseOffset: 0 },
      { id: "sec", label: "SECURITY (MSSP)", category: "Cyber Defense", x: cx - 170, y: cy - 90, vx: 0.15, vy: -0.1, radius: 18, color: "#38bdf8", pulseOffset: 1 },
      { id: "cloud", label: "CLOUD & MIGRATION", category: "Elastic Scalability", x: cx + 160, y: cy - 100, vx: -0.12, vy: 0.14, radius: 18, color: "#60a5fa", pulseOffset: 2 },
      { id: "it", label: "MANAGED IT (MSP)", category: "Operations", x: cx - 180, y: cy + 100, vx: 0.1, vy: 0.12, radius: 18, color: "#34d399", pulseOffset: 3 },
      { id: "itsm", label: "ITSM EXCELLENCE", category: "Service Delivery", x: cx + 170, y: cy + 90, vx: -0.14, vy: -0.09, radius: 18, color: "#a78bfa", pulseOffset: 4 },
      { id: "consult", label: "STRATEGY & GRC", category: "Governance", x: cx, y: cy - 180, vx: 0.08, vy: 0.12, radius: 16, color: "#f59e0b", pulseOffset: 5 },
      { id: "digital", label: "DIGITAL & APIS", category: "Modern Web", x: cx, y: cy + 180, vx: -0.1, vy: -0.08, radius: 16, color: "#ec4899", pulseOffset: 6 },
    ];

    // Background ambient data particles
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw faint grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw floating background particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(0, 229, 255, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update non-core nodes with gentle floating oscillation
      nodes.forEach((node, idx) => {
        if (node.id === "core") return;
        node.x += Math.sin(time + idx) * 0.3;
        node.y += Math.cos(time + idx * 1.5) * 0.3;
      });

      // Draw dynamic connector lines from core to each satellite node
      const coreNode = nodes[0];
      nodes.forEach((node) => {
        if (node.id === "core") return;

        const dist = Math.hypot(node.x - coreNode.x, node.y - coreNode.y);

        // Gradient line
        const grad = ctx.createLinearGradient(coreNode.x, coreNode.y, node.x, node.y);
        grad.addColorStop(0, "rgba(0, 229, 255, 0.4)");
        grad.addColorStop(1, `${node.color}55`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.moveTo(coreNode.x, coreNode.y);
        ctx.lineTo(node.x, node.y);
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated data pulse packet traversing the line
        const progress = ((time * 0.8 + node.pulseOffset) % 2) / 2;
        const px = coreNode.x + (node.x - coreNode.x) * progress;
        const py = coreNode.y + (node.y - coreNode.y) * progress;

        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw secondary inter-node connections (e.g., Security <-> Cloud, IT <-> ITSM)
      const interConnections: [number, number][] = [
        [1, 2], // Security <-> Cloud
        [1, 3], // Security <-> IT
        [2, 4], // Cloud <-> ITSM
        [3, 4], // IT <-> ITSM
        [5, 1], // Strategy <-> Security
        [5, 2], // Strategy <-> Cloud
        [6, 3], // Digital <-> IT
        [6, 4], // Digital <-> ITSM
      ];

      interConnections.forEach(([i, j]) => {
        const n1 = nodes[i];
        const n2 = nodes[j];
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.stroke();
      });

      // Draw Nodes
      nodes.forEach((node) => {
        const isCore = node.id === "core";

        // Outer ambient glow ring
        const pulse = Math.sin(time * 3 + node.pulseOffset) * 4;
        ctx.strokeStyle = `${node.color}33`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 6 + pulse, 0, Math.PI * 2);
        ctx.stroke();

        // Node fill
        ctx.fillStyle = isCore ? "#08152e" : "#0c1527";
        ctx.strokeStyle = node.color;
        ctx.lineWidth = isCore ? 2.5 : 2;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isCore ? 20 : 12;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Inner glowing core dot
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, isCore ? 6 : 4, 0, Math.PI * 2);
        ctx.fill();

        // Node Label
        ctx.fillStyle = "#ffffff";
        ctx.font = isCore ? "bold 11px system-ui" : "600 10px system-ui";
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.x, node.y + node.radius + 16);

        // Category Tag
        ctx.fillStyle = "rgba(148, 163, 184, 0.8)";
        ctx.font = "9px system-ui";
        ctx.fillText(node.category, node.x, node.y + node.radius + 28);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[620px] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer"
        aria-label="Technosprint Technology Ecosystem Interactive Diagram"
      />
      {/* Decorative radial background light */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl -z-10" />
    </div>
  );
}
