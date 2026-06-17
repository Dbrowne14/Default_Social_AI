// components/HeroBlobs.tsx
"use client";

import { useEffect, useRef } from "react";

const HeroAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    let W = 0;
    let H = 0;
    let animationFrame: number;
    let flooded = false;

    const mouse = {
      x: -9999,
      y: -9999,
      active: false,
      drag: false,
    };

    function resize() {
      const parent = canvas?.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      W = rect.width;
      H = rect.height;

      canvas.width = W * DPR;
      canvas.height = H * DPR;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;

      ctx?.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    const blobs = Array.from({ length: 14 }, (_, i) => {
      const fromSide = i % 4;

      let x = 0;
      let y = 0;

      if (fromSide === 0) {
        x = -200;
        y = Math.random() * H;
      } else if (fromSide === 1) {
        x = W + 200;
        y = Math.random() * H;
      } else if (fromSide === 2) {
        x = Math.random() * W;
        y = -200;
      } else {
        x = Math.random() * W;
        y = H + 200;
      }

      return {
        x,
        y,
        tx: Math.random() * W,
        ty: Math.random() * H,
        r: 180 + Math.random() * 220,
        vx: 0,
        vy: 0,
        phase: Math.random() * Math.PI * 2,
        hue: i < 11 ? "r" : i < 13 ? "b" : "g",
      };
    });

    const accents = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 60 + Math.random() * 60,
      phase: Math.random() * Math.PI * 2,
      hue: i % 3 === 0 ? "b" : i % 3 === 1 ? "g" : "r",
    }));

    function handleMouseMove(e: MouseEvent) {
      if (canvas === null) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    }

    function handleTouchMove(e: TouchEvent) {
      const touch = e.touches[0];
      if (!touch) return;
      if (canvas === null) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = touch.clientX - rect.left;
      mouse.y = touch.clientY - rect.top;
      mouse.active = true;
      mouse.drag = true;
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", () => {
      mouse.active = false;
    });
    canvas.addEventListener("mousedown", () => {
      mouse.drag = true;
    });
    canvas.addEventListener("mouseup", () => {
      mouse.drag = false;
    });
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("touchend", () => {
      mouse.active = false;
      mouse.drag = false;
    });

    const start = performance.now();

    function loop(now: number) {
      if (ctx === null) return;
      const t = (now - start) / 1000;

      if (t > 1.6) flooded = true;

      ctx?.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "source-over";

      if (flooded) {
        if (ctx === null) return;
        const wash = ctx.createRadialGradient(
          W * 0.3,
          H * 0.5,
          0,
          W * 0.3,
          H * 0.5,
          Math.max(W, H),
        );

        wash.addColorStop(0, "oklch(0.62 0.18 28 / 0.04)");
        wash.addColorStop(1, "oklch(0.62 0.18 28 / 0)");

        ctx.fillStyle = wash;
        ctx.fillRect(0, 0, W, H);
      }

      blobs.forEach((b) => {
        const driftX = Math.cos(t * 0.4 + b.phase) * 60;
        const driftY = Math.sin(t * 0.5 + b.phase * 1.3) * 60;

        const targetX = b.tx + driftX;
        const targetY = b.ty + driftY;

        b.vx += (targetX - b.x) * 0.0025;
        b.vy += (targetY - b.y) * 0.0025;

        b.vx *= 0.94;
        b.vy *= 0.94;

        if (mouse.active) {
          const dx = b.x - mouse.x;
          const dy = b.y - mouse.y;
          const d = Math.hypot(dx, dy);

          if (d < 320) {
            const f = (1 - d / 320) * (mouse.drag ? -2.2 : 1.4);
            b.vx += (dx / (d + 1)) * f;
            b.vy += (dy / (d + 1)) * f;
          }
        }

        b.x += b.vx;
        b.y += b.vy;

        let fill = "oklch(0.62 0.18 28 / 0.55)";

        if (b.hue === "b") fill = "oklch(0.50 0.18 260 / 0.55)";
        if (b.hue === "g") fill = "oklch(0.62 0.20 145 / 0.55)";

        const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);

        gradient.addColorStop(0, fill);
        gradient.addColorStop(0.6, fill.replace("0.55", "0.28"));
        gradient.addColorStop(1, fill.replace("0.55", "0"));

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      accents.forEach((a) => {
        const x = a.x + Math.cos(t * 0.6 + a.phase) * 40;
        const y = a.y + Math.sin(t * 0.7 + a.phase * 1.2) * 40;

        let fill = "oklch(0.62 0.18 28 / 0.6)";

        if (a.hue === "b") fill = "oklch(0.50 0.18 260 / 0.7)";
    

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, a.r);

        gradient.addColorStop(0, fill);
        gradient.addColorStop(1, fill.replace(/0\.[67]/, "0"));

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, a.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "multiply";
      ctx.fillStyle = "oklch(0 0 0 / 0.04)";

      for (let y = 0; y < H; y += 4) {
        ctx.fillRect(0, y, W, 1);
      }

      ctx.globalCompositeOperation = "source-over";

      animationFrame = requestAnimationFrame(loop);
    }

    animationFrame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 h-full w-full"
      aria-hidden="true"
    />
  );
};

export default HeroAnimation;
