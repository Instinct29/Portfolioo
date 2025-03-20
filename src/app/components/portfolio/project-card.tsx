"use client";

import { ProjectCardProps } from "@/types/portfolio";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function ProjectCard({ title, description, image, onClick }: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }} 
      whileTap={{ scale: 0.98 }} 
      className="relative border rounded-lg p-4 transition-shadow duration-300 group cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-md">
        <Image
          className="bg-white aspect-video rounded-md mb-4 transition-transform duration-300 group-hover:blur-[3px] group-hover:scale-105"
          src={image}
          alt={title}
        />

        {/* Overlay with "View Details" Button */}
        <motion.div 
          className="absolute inset-0 bg-black/0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black/40 transition-all duration-300"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.button 
            className="px-3 py-1 bg-white text-sm font-medium rounded-md flex items-center gap-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="h-4 w-4" />
            View Details
          </motion.button>
        </motion.div>
      </div>

      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-[#667085]">{description}</p>
    </motion.div>
  );
}
