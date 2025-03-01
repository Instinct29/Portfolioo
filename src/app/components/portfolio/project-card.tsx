import { ProjectCardProps } from "@/types/portfolio";
import Image from "next/image";

export function ProjectCard({ title, description, image }: ProjectCardProps) {
    return (
        <div className="border rounded-lg p-4 transition-shadow duration-300">
            <div className="overflow-hidden rounded-md">
                <Image
                    className="bg-white aspect-video rounded-md mb-4 transform transition duration-300 hover:scale-105"
                    src={image}
                    alt={title}
                />
            </div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-[#667085]">{description}</p>
        </div>
    );
}
