"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY - 10 }); // Shift Upwards
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Outer Glow (Subtle) */}
      <motion.div
        className="absolute w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ x: mousePosition.x, y: mousePosition.y - 20 }} // Move Glow Up More
        transition={{ type: "tween", stiffness: 50, damping: 20 }}
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Inner Core (Soft Focus) */}
      <motion.div
        className="absolute w-6 h-6 bg-blue-400/20 rounded-full shadow-lg"
        animate={{ x: mousePosition.x-19, y: mousePosition.y - 10 }} // Move Core Up
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </motion.div>
  );
}
