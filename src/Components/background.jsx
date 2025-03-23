"use client"

import { useEffect, useRef } from "react";

const DarkMistBackground = ({
  blurAmount = "10px",
  color = "#0A3A0A",
  particleCount = 70,
  speed = 0.3,
  turbulence = 0.8,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.width = Math.random() * 100 + 50;
        this.height = Math.random() * 20 + 5;
        this.speedX = (Math.random() - 0.3) * speed;
        this.speedY = (Math.random() - 0.5) * speed * 0.3;
        this.maxOpacity = Math.random() * 0.2 + 0.05;
        this.opacity = Math.random() * this.maxOpacity;
      }

      update() {
        this.speedX += (Math.random() - 0.5) * 0.005 * turbulence;
        this.speedY += (Math.random() - 0.5) * 0.002 * turbulence;

        this.speedX = Math.max(-speed, Math.min(speed, this.speedX));
        this.speedY = Math.max(-speed * 0.3, Math.min(speed * 0.3, this.speedY));

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < -this.width) this.x = canvas.width + this.width;
        if (this.x > canvas.width + this.width) this.x = -this.width;
        if (this.y < -this.height) this.y = canvas.height + this.height;
        if (this.y > canvas.height + this.height) this.y = -this.height;

        this.opacity += (Math.random() - 0.5) * 0.005;
        this.opacity = Math.max(0.02, Math.min(this.maxOpacity, this.opacity));
      }

      draw() {
        if (!ctx) return;

        let r = 10,
          g = 58,
          b = 10;
        if (color.startsWith("#")) {
          const hex = color.length === 4
            ? color.replace(/./g, (c) => c + c).slice(1)
            : color.slice(1);
          r = Number.parseInt(hex.slice(0, 2), 16);
          g = Number.parseInt(hex.slice(2, 4), 16);
          b = Number.parseInt(hex.slice(4, 6), 16);
        }

        const gradient = ctx.createLinearGradient(
          this.x - this.width / 2, this.y,
          this.x + this.width / 2, this.y
        );
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
        gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.width / 2, this.height / 2, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    animate();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [blurAmount, color, particleCount, speed, turbulence]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0A3A0A]">
      <div
        className="absolute inset-0"
        style={{
          filter: `blur(${blurAmount})`,
          WebkitFilter: `blur(${blurAmount})`,
        }}
      >
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default DarkMistBackground;