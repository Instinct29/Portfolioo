import { AwardItemProps } from "@/types/portfolio";

export function AwardItem({ award, type, year }: AwardItemProps) {
    return (
        <div className="flex justify-between items-center">
            <div>
                <div className="font-medium">{award}</div>
                <div className="text-sm text-[#667085]">{type}</div>
            </div>
            <div className="text-sm text-[#98a1b2]">{year}</div>
        </div>
    )
}