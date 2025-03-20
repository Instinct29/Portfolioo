"use client"

import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { motion } from "framer-motion"
import { SectionHeader } from "../ui/section-header"
import { ExternalLink, Briefcase } from "lucide-react"

interface WorkExperience {
    company: string
    role: string
    dateRange: string
    companyUrl?: string
    description: string
    technologies: string[]
}

const experiences: WorkExperience[] = [
    {
        company: "Hashtrust Technologies",
        role: "Senior Software Engineer",
        dateRange: "Sept 2022 – Present | Gurugram, Haryana",
        companyUrl: "https://hashtrust.com",
        description:
        "Developed and implemented responsive, accessible web applications by collaborating with designers and backend teams, ensuring seamless user experiences. Built custom data visualizations using various charting libraries, enhancing data insights and engagement. Led the development of modern, high-performance web platforms, optimizing API interactions and server-side processes to improve website performance by 30%. Designed and integrated a Web3-enabled payment gateway, enabling secure token transactions and streamlined user interactions. Applied SEO strategies, increasing search optimization by 78%, and improved frontend responsiveness through dynamic data retrieval. Conducted technical sessions on Git, Jira, and development best practices, enhancing team collaboration and productivity. Worked closely with clients and stakeholders, gathering requirements, proposing technical solutions, and ensuring on-time project delivery.",
        technologies: [
            "Next.js", "React.js", "JavaScript", "GitHub", "Git", "Chart.js", "Redux.js",
            "Storybook", "JSON Web Token (JWT)", "REST APIs", "Google API", "Apollo GraphQL",
            "Tailwind CSS", "Hasura", "Node.js", "Jira", "Docker"
        ]
    },
    {
        company: "Hashtrust Technologies",
        role: "Associate Software Developer",
        dateRange: "Apr 2022 – Sep 2022 | Gurugram, Haryana | Remote",
        companyUrl: "https://hashtrust.com",
        description:
            "Designed and developed chatbot applications with tailored conversational flows for cognitive search solutions. Created custom interfaces and integrated backend systems to meet client specifications, enhancing user experience. Worked closely with teams to deliver feature-rich updates and streamline application performance. Utilized Redux and Context API for state management, debugged and troubleshot issues for seamless functionality, and followed frontend best practices, including performance optimization and SEO strategies. Managed code effectively using Git and version control tools.",
        technologies: ["Javascript","ChatBot Development", "UI/UX/Figma", "Backend Integration"]
        
    },
    {
        company: "Claymango",
        role: "Software Developer Intern",
        dateRange: "March 2021 – Aug 2021 | Remote",
        companyUrl: "https://www.claymango.com/",
        description:
            "Developed and maintained web applications using React.js and related technologies, implementing responsive designs and ensuring cross-browser compatibility. Enhanced the main website with new features, strengthening authentication and authorization systems for secure user access. Worked on projects with significant business and user impact, collaborating with cross-functional teams, including designers and product managers, to deliver high-quality solutions.",
        technologies: [
             "Responsive Design", "Dashboard UI", "Performance Optimization", "SEO", "Git", "Version Control"
        ]
    }
]

const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
}

export default function WorkExperience(): React.ReactElement {

    return (
        <section className="mb-12" id="experience">
            <SectionHeader title="Professional Experience" />
            <Accordion type="multiple" className="space-y-6" defaultValue={experiences.map((_, index) => `item-${index}`)}>
                {experiences.map((exp, index) => (
                    <motion.div
                        key={`experience-${exp.company}-${index}`}
                        initial="initial"
                        animate="animate"
                        variants={fadeInUpVariants}
                        transition={{ delay: index * 0.1 }}
                    >
                        <AccordionItem value={`item-${index}`} className="border-b">
                            <div className="flex flex-col sm:flex-row justify-between items-baseline  sm:items-center w-full mb-2">
                                <div className="text-lg font-medium text-gunmetal flex items-center">
                                    <Briefcase size={20} className="mr-2  text-steelGray" />
                                    {exp.company}
                                    {exp.companyUrl && (
                                        <a
                                            href={exp.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex ml-2 text-charcoal"
                                            title="Visit company website"
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                                <span className="text-slateGray text-sm">{exp.dateRange}</span>
                            </div>

                            <div className="flex items-center mb-2">
                                <span className="text-steelGray font-medium">{exp.role}</span>
                            </div>

                            <AccordionTrigger className="hover:no-underline py-2">
                                <span className="text-sm text-slateGray">Show details</span>
                            </AccordionTrigger>

                            <AccordionContent>
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="pt-4"
                                >
                                    <p className="mb-4">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span
                                                key={`tech-${techIndex}`}
                                                className="px-2 py-1 text-xs bg-white border text-[13px] border-[#EAECF0] rounded-[8px] text-steelGray"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                ))}
            </Accordion>
        </section>
    )
}