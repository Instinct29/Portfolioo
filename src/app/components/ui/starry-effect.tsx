"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StarryBackground() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; color: string }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const colors = ["#00f0ff", "#ff00ff", "#39ff14", "#ff073a", "#ffae00", "#0047ff", "#ff4b00"]; // Neon colors
      const screenWidth = window.innerWidth;

      const newStars = Array.from({ length: 80 }).map(() => {
        const side = Math.random() > 0.5 ? "left" : "right"; // Randomly place on left or right
        return {
          x: side === "left" ? Math.random() * (screenWidth * 0.25) : screenWidth * 0.75 + Math.random() * (screenWidth * 0.25), // Left 25% or Right 25%
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1, // Subtle star sizes
          color: colors[Math.floor(Math.random() * colors.length)], // Random neon color
        };
      });

      setStars(newStars);
    };

    generateStars();
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1]">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: star.x,
            top: star.y,
            backgroundColor: star.color,
            opacity: Math.random() * 0.6 + 0.2, // Softer opacity for subtle effect
            filter: `blur(${Math.random() * 2 + 1}px) drop-shadow(0 0 4px ${star.color})`, // Softer glow
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3], // Subtle twinkle
            y: [star.y, star.y - 2, star.y], // Slight floating effect
            scale: [1, 1.1, 1], // Gentle scaling
          }}
          transition={{
            duration: Math.random() * 5 + 2, // Slower twinkle speeds
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
