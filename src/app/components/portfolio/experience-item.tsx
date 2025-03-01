import { ExperienceItemProps } from "@/types/portfolio";

export function ExperienceItem({
    title,
    company,
    iconBackground,
    iconInnerBackground
}: ExperienceItemProps) {
    return (
        <div className="flex items-start gap-4">
            <div className={`w-8 h-8 rounded bg-[${iconBackground}] flex items-center justify-center`}>
                <div className={`w-4 h-4 bg-[${iconInnerBackground}] rounded-sm`} />
            </div>
            <div>
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-[#667085]">{company}</p>
            </div>
        </div>
    )
}