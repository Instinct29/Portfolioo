import { EducationItem } from "./education-item"
import { SectionHeader } from "../ui/section-header"
import { EducationItemProps } from "@/types/portfolio"

export function EducationSection() {
    const educationItems: EducationItemProps[] = [
        {
            degree: "Bachelor's in Computer Science Engineering",
            institution: "Jaipur Engineering College and Research Centre (JECRC) ",
            description: "I developed a strong foundation in conputer science engineering, focusing on problem-solving, innovative system design, and technical project execution. Strengthened skills through hands-on projects and real-world engineering challenges."
        },

    ]

    return (
        <section className="mb-12">
            <SectionHeader title="Education" />
            <div className="space-y-6">
                {educationItems.map((item, index) => (
                    <EducationItem
                        key={index}
                        degree={item.degree}
                        institution={item.institution}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    )
}