import { SectionHeader } from "../ui/section-header"
import { AwardItem } from "./award-item"
import { AwardItemProps } from "@/types/portfolio"

export function AwardsSection() {
    const awards: AwardItemProps[] = [
        { award: "Framer Awards", type: "Site Of The Year", year: "2024" },
        { award: "Awwwards", type: "Site Of The Month", year: "2023" },
        { award: "CSSism", type: "Product Of The Year", year: "2022" },
        { award: "Awwwards", type: "Site Of The Day", year: "2021" },
        { award: "Dribbble", type: "Shot Of The Day", year: "2019" }
    ]

    return (
        <section className="mb-12">
            <SectionHeader title="Awards" />
            <div className="space-y-4">
                {awards.map((item, index) => (
                    <AwardItem
                        key={index}
                        award={item.award}
                        type={item.type}
                        year={item.year}
                    />
                ))}
            </div>
        </section>
    )
}