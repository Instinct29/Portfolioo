"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
import { ProjectCard } from "./project-card";
import { ProjectDetailModal } from "./project-detail-modal";
import fetch from "../../../images/fetch-docs.png";
import Metal from "../../../images/metal.png";
import integrations from "../../../images/integrations.png";
import globacap from "../../../images/globacap.png";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    { 
      id: "fetch-docs",
      title: "Fetch Documentation",
      shortDescription: "Documentation for Fetch Technologies",
      fullDescription: "A complete documentation hub for Fetch.ai's technologies and integrations.",
      image: fetch,
      technologies: ["React", "Next.js", "Tailwind CSS"],
      features: ["API Guides", "Code Examples", "Interactive Demos"],
      liveUrl: "https://fetch.ai",
      githubUrl: "https://github.com/fetch-docs",
    },
    { 
      id: "mettalex",
      title: "Mettalex",
      shortDescription: "World’s first P2P Agent-based DEX",
      fullDescription: "Mettalex is a decentralized exchange using autonomous agents for peer-to-peer trading.",
      image: Metal,
      technologies: ["Blockchain", "Smart Contracts", "DeFi"],
      features: ["Automated Trading", "Decentralized Governance", "Yield Farming"],
      liveUrl: "https://mettalex.com",
      githubUrl: "https://github.com/mettalex",
    },
    { 
      id: "integrations",
      title: "Integrations",
      shortDescription: "Hub for uAgents integrations",
      fullDescription: "A platform that provides seamless integration with uAgents and multiple blockchain networks.",
      image: integrations,
      technologies: ["Web3", "Microservices", "uAgents"],
      features: ["Cross-Chain Support", "SDKs Available", "Secure Transactions"],
    },
    { 
      id: "globacap",
      title: "Globacap",
      shortDescription: "Capital Market Platform",
      fullDescription: "An advanced platform for capital market investments and asset tokenization.",
      image: globacap,
      technologies: ["Finance", "Tokenization", "Smart Contracts"],
      features: ["Asset Tokenization", "Institutional Trading", "Regulated Market"],
      liveUrl: "https://globacap.com",
    },
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="mb-12">
      <SectionHeader title="Projects" />
      <motion.div 
        className="grid grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.shortDescription}
            image={project.image}
            onClick={() => openModal(project)}
          />
        ))}
      </motion.div>

      {isModalOpen && (
        <ProjectDetailModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </section>
  );
}
