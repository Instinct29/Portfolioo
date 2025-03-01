import { ExperienceItem } from "./experience-item"
import { SectionHeader } from "../ui/section-header"
import { ExperienceItemProps } from "@/types/portfolio"

export function ExperienceSection() {
    const experienceItems: ExperienceItemProps[] = [
        {
            title: "Lead Product Designer",
            company: "Circle Energy",
            iconBackground: "#f97316",
            iconInnerBackground: "white"
        },
        {
            title: "Senior UI/UX Designer",
            company: "XZ Studios",
            iconBackground: "#f2f4f7",
            iconInnerBackground: "#344054"
        }
    ]

    return (
        <section className="mb-12">
            <SectionHeader title="Experience" />
            <div className="grid gap-4">
                {experienceItems.map((item, index) => (
                    <ExperienceItem
                        key={index}
                        title={item.title}
                        company={item.company}
                        iconBackground={item.iconBackground}
                        iconInnerBackground={item.iconInnerBackground}
                    />
                ))}
            </div>
        </section>
    )
}