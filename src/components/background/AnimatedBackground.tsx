"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  phase: number;
}

interface NetworkNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulsePhase: number;
}

interface Orb {
  x: number;
  y: number;
  radius: number;
  color: [number, number, number];
  speed: number;
  phase: number;
  opacity: number;
}

interface FloatingShape {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  type: "hex" | "circle";
  opacity: number;
  speed: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let dustParticles: Particle[] = [];
    let networkNodes: NetworkNode[] = [];
    let orbs: Orb[] = [];
    let shapes: FloatingShape[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      initParticles();
    };

    const initParticles = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Dust particles
      dustParticles = [];
      const dustCount = Math.min(Math.floor((w * h) / 6000), 200);
      for (let i = 0; i < dustCount; i++) {
        dustParticles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          size: Math.random() * 1 + 0.2,
          opacity: Math.random() * 0.12 + 0.03,
          phase: Math.random() * Math.PI * 2,
        });
      }

      // Network nodes
      networkNodes = [];
      const nodeCount = Math.min(Math.floor((w * h) / 30000), 35);
      for (let i = 0; i < nodeCount; i++) {
        networkNodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 2.5 + 0.8,
          opacity: Math.random() * 0.25 + 0.15,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }

      // Ambient orbs - logo-inspired colors
      orbs = [
        {
          x: w * 0.15,
          y: h * 0.25,
          radius: Math.min(w, h) * 0.4,
          color: [53, 64, 255],
          speed: 0.0002,
          phase: 0,
          opacity: 0.035,
        },
        {
          x: w * 0.85,
          y: h * 0.55,
          radius: Math.min(w, h) * 0.35,
          color: [96, 99, 241],
          speed: 0.00018,
          phase: Math.PI * 0.5,
          opacity: 0.025,
        },
        {
          x: w * 0.5,
          y: h * 0.75,
          radius: Math.min(w, h) * 0.3,
          color: [139, 92, 246],
          speed: 0.0003,
          phase: Math.PI,
          opacity: 0.02,
        },
        {
          x: w * 0.7,
          y: h * 0.2,
          radius: Math.min(w, h) * 0.25,
          color: [6, 182, 212],
          speed: 0.00025,
          phase: Math.PI * 1.5,
          opacity: 0.025,
        },
      ];

      // Floating geometric shapes
      shapes = [];
      const shapeCount = Math.min(Math.floor((w * h) / 80000), 8);
      for (let i = 0; i < shapeCount; i++) {
        shapes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 30 + 15,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.002,
          type: Math.random() > 0.5 ? "hex" : "circle",
          opacity: Math.random() * 0.04 + 0.01,
          speed: Math.random() * 0.3 + 0.1,
        });
      }
    };

    const drawHexagon = (
      x: number,
      y: number,
      size: number,
      rotation: number,
      opacity: number
    ) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = rotation + (i * Math.PI) / 3;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(100, 120, 255, ${opacity})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const time = Date.now() * 0.001;
      frameRef.current++;

      ctx.fillStyle = "rgba(8, 8, 14, 0.08)";
      ctx.fillRect(0, 0, w, h);

      // Orbs
      orbs.forEach((orb) => {
        orb.phase += orb.speed;
        const floatX = Math.sin(orb.phase) * 80;
        const floatY = Math.cos(orb.phase * 0.7) * 50;

        const gradient = ctx.createRadialGradient(
          orb.x + floatX,
          orb.y + floatY,
          0,
          orb.x + floatX,
          orb.y + floatY,
          orb.radius
        );
        gradient.addColorStop(
          0,
          `rgba(${orb.color[0]}, ${orb.color[1]}, ${orb.color[2]}, ${orb.opacity})`
        );
        gradient.addColorStop(
          0.5,
          `rgba(${orb.color[0]}, ${orb.color[1]}, ${orb.color[2]}, ${
            orb.opacity * 0.4
          })`
        );
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      });

      // Floating shapes
      shapes.forEach((shape) => {
        shape.y -= shape.speed;
        shape.rotation += shape.rotSpeed;

        if (shape.y < -50) {
          shape.y = h + 50;
          shape.x = Math.random() * w;
        }

        if (shape.type === "hex") {
          drawHexagon(
            shape.x,
            shape.y,
            shape.size,
            shape.rotation,
            shape.opacity
          );
        } else {
          ctx.beginPath();
          ctx.arc(shape.x, shape.y, shape.size * 0.4, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(165, 180, 252, ${shape.opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      // Dust particles
      dustParticles.forEach((p) => {
        p.x += p.vx + Math.sin(time * 0.5 + p.phase) * 0.03;
        p.y += p.vy + Math.cos(time * 0.3 + p.phase) * 0.03;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        const twinkle = 0.7 + Math.sin(time * 2 + p.phase) * 0.3;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 210, 255, ${p.opacity * twinkle})`;
        ctx.fill();
      });

      // Network nodes
      networkNodes.forEach((p) => {
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 250 && dist > 0) {
          const force = (250 - dist) / 250;
          p.vx -= (dx / dist) * force * 0.4;
          p.vy -= (dy / dist) * force * 0.4;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 30) {
          p.x = 30;
          p.vx *= -0.8;
        }
        if (p.x > w - 30) {
          p.x = w - 30;
          p.vx *= -0.8;
        }
        if (p.y < 30) {
          p.y = 30;
          p.vy *= -0.8;
        }
        if (p.y > h - 30) {
          p.y = h - 30;
          p.vy *= -0.8;
        }

        p.vx *= 0.985;
        p.vy *= 0.985;

        const pulse = 1 + Math.sin(time * 2 + p.pulsePhase) * 0.2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 120, 255, ${p.opacity})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 5 * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 120, 255, ${p.opacity * 0.06})`;
        ctx.fill();
      });

      // Connections
      if (frameRef.current % 2 === 0) {
        for (let i = 0; i < networkNodes.length; i++) {
          for (let j = i + 1; j < networkNodes.length; j++) {
            const p1 = networkNodes[i];
            const p2 = networkNodes[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 180) {
              const alpha = 0.05 * (1 - dist / 180);
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      // Grid
      const gridSpacing = 100;
      const gridAlpha = 0.012;

      ctx.strokeStyle = `rgba(255, 255, 255, ${gridAlpha})`;
      ctx.lineWidth = 0.5;

      if (frameRef.current % 3 === 0) {
        for (let x = 0; x < w; x += gridSpacing) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }
        for (let y = 0; y < h; y += gridSpacing) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
      }

      // Vignette
      const vignette = ctx.createRadialGradient(
        w / 2,
        h / 2,
        w * 0.25,
        w / 2,
        h / 2,
        w * 0.85
      );
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.5)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(160deg, #08080e 0%, #0a0a14 40%, #080810 70%, #06060c 100%)",
      }}
    />
  );
}