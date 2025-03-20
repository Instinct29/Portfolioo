import { SectionHeader } from "../ui/section-header"
import Image from "next/image"
import signature from "../../../images/icons/signature.png"

export function SummarySection() {
    return (
        <section className="mb-[1rem]">
        <SectionHeader title="Summary" />
        <div className="space-y-4 text-[#667085]">
        <p>
            As a <strong>Senior Software Engineer with a product mindset</strong>, I thrive on transforming concepts into 
            <strong> high-impact digital solutions</strong> that prioritize <strong>user experience, scalability, and business value</strong>. 
            With a strong foundation in <strong>frontend development</strong>, complemented by <strong>manageable backend integration</strong> 
            and the ability to <strong>research and develop Web3 solutions</strong>, I excel at crafting 
            <strong>intuitive, data-driven applications</strong> that solve real-world problems.
        </p>

            <p>
                Beyond development, I bring <strong>strategic thinking and cross-functional collaboration</strong>, working closely with <strong>designers, 
                stakeholders, and product teams</strong> to align technology with user needs and business goals. Passionate about 
                <strong>AI, large language models, and emerging tech</strong>, I leverage insights from market trends and data to drive 
                <strong>informed decision-making</strong> and optimize <strong>product performance</strong>.
            </p>
            <p>
                I&apos;m eager to collaborate and contribute to <strong>technology-driven product innovation</strong>. If you&apos;re looking for someone who bridges the gap 
                between <strong>engineering and product strategy</strong>, let&apos;s connect and explore how I can add value to your team.
            </p>
        </div>
        <div className="flex justify-end text-end">
            <Image src={signature} alt="sign" />
        </div>
    </section>
    
    )
}