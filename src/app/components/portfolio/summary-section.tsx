import { SectionHeader } from "../ui/section-header"
import Image from "next/image"
import signature from "../../../images/icons/signature.svg"

export function SummarySection() {
    return (
        <section className="mb-[1rem]">
            <SectionHeader title="Summary" />
            <div className="space-y-4 text-[#667085]">
                <p>
                    As a passionate Senior Software Engineer, I thrive on transforming concepts into high-performance digital solutions that prioritize seamless functionality and exceptional user experiences. With a strong foundation in frontend development, complemented by solid backend expertise and a touch of Web3 exploration, I excel at crafting responsive, intuitive applications that address real-world challenges.
                </p>
                <p>
                    I’m always eager to collaborate and bring innovative perspectives to every project, continuously honing my craft through practical experience, emerging tech exploration—particularly in AI and large language models—and active engagement with cross-functional teams. If you’re seeking a dedicated professional who combines technical expertise with a commitment to delivering impactful, user focused solutions, I’d love to connect and explore how I can contribute to your team’s success.
                </p>
            </div>
            <div className=" flex justify-end text-end">
                <Image src={signature} alt="sign" />
            </div>
        </section>
    )
}