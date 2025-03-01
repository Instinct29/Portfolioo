import { EducationItemProps } from "@/types/portfolio";

export function EducationItem({ degree, institution, description }: EducationItemProps) {
    return (
        <div style={{ backgroundColor: "#ffff", border: '1px solid rgb(234, 236, 240)' }} className=" rounded-xl p-[20px]">
            <div className="text-xs mb-1 text-slateGray">{degree}</div>
            <h3 className="font-medium mb-1 text-gunmetal">{institution}</h3>
            <p className="leading-[22px]">{description}</p>
        </div>
    )
}