import Image from "next/image";
import { ToolItemProps } from "@/types/portfolio";

export function ToolItem({ name, description, image }: ToolItemProps) {
    return (
        <div className="flex items-start gap-3">
            {image ? (
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#f2f4f7]">
                    <Image
                        src={image}
                        alt={name}
                        width={30}
                        height={30}
                    />
                </div>
            ) : (
                <div className="w-10 h-10 rounded-lg bg-[#f2f4f7]" />
            )}
            <div>
                <h3 className="font-medium text-sm">{name}</h3>
                <p className="text-xs text-slateGray">{description}</p>
            </div>
        </div>
    );
}
