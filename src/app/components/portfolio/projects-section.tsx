import { SectionHeader } from "../ui/section-header"
import { ProjectCard } from "./project-card"
import fetch from "../../../images/fetch-docs.png"
import Bpa from "../../../images/bpa.png"
import integrations from "../../../images/integrations.png"
import globacap from "../../../images/globacap.png"
export function ProjectsSection() {
    const projects = [
        { title: "Fetch Documention", desc: "Documention for fetch technolgies", image: fetch },
        { title: "BPA Cognitive Search", desc: "AI-driven tool for finding pertinent documents", image: Bpa },
        { title: "Integrations", desc: "Hub for uAgents integrations", image: integrations },
        { title: "Glopacap", desc: "Capital Market platform", image: globacap }
    ]

    return (
        <section className="mb-12">
            <SectionHeader title="Projects" />
            <div className="grid grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.desc}
                        image={project.image}
                    />
                ))}
            </div>
        </section>
    )
}