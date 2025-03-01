import { SectionHeader } from "../ui/section-header";
import { ToolItem } from "./tool-item";
import Nextjs from "../../../images/icons/nextjs.svg";
import Nodejs from "../../../images/icons/node.svg";
import Docker from "../../../images/icons/docker.svg";
import Postgres from "../../../images/icons/postgress.svg";
import Github from "../../../images/icons/github.svg";
import Aws from "../../../images/icons/aws.svg";
import Web3 from "../../../images/icons/web3.svg";
import FastApi from "../../../images/icons/fastapi.svg";

export function TechStackSection() {
    const tools = [
        { name: "Next.js", desc: "Frontend Framework", image: Nextjs },
        { name: "Node.js", desc: "Backend Runtime", image: Nodejs },
        { name: "Fast Api", desc: "Backend python", image: FastApi },
        { name: "Docker", desc: "Containerization Tool", image: Docker },
        { name: "PostgreSQL", desc: "SQL Database", image: Postgres },
        { name: "Git", desc: "Version Control", image: Github },
        { name: "AWS", desc: "Cloud Services", image: Aws },
        { name: "Web3", desc: "Blockchain", image: Web3 },
    ];

    return (
        <section className="mb-12">
            <SectionHeader title="Tech Stack" />
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                    <ToolItem
                        key={index}
                        name={tool.name}
                        description={tool.desc}
                        image={tool.image}
                    />
                ))}
            </div>
        </section>
    );
}
