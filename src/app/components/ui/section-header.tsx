
interface SectionHeaderProps {
    title: string;
    className?: string;
}

export function SectionHeader({ title, className = "" }: SectionHeaderProps) {
    return <h2 className={`text-xl font-medium text-gunmetal mb-6 ${className}`}>{title}</h2>
}


