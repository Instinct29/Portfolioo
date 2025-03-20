"use client"

import React, { useState } from 'react';
import './ExperienceCard.css';

const ExperienceCard = () => {
    const [isOpen, setIsOpen] = useState(true);

    const skills = [
        'React', 'NextJS', 'TypeScript', 'TailwindCSS', 'Web3', 'API Integration'
    ];

    return (
        <div
            data-state={isOpen ? "open" : "closed"}
            data-orientation="vertical"
            className="last:border-none border-b"
        >
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-baseline sm:items-center w-full mb-2">
                <div className="text-lg font-medium text-gunmetal flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-briefcase mr-2 text-steelGray"
                    >
                        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </svg>
                    Hashtrust Technologies
                    <a
                        href="https://hashtrust.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex ml-2 text-charcoal"
                        title="Visit company website"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-external-link"
                        >
                            <path d="M15 3h6v6"></path>
                            <path d="M10 14 21 3"></path>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                    </a>
                </div>
                <span className="text-slateGray text-sm">
                    July 2022 – Present | Gurugram, Haryana
                </span>
            </div>

            {/* Title */}
            <div className="flex items-center mb-2">
                <span className="text-steelGray font-medium">Senior Software Engineer</span>
            </div>

            {/* Toggle Button */}
            <h3
                data-orientation="vertical"
                data-state={isOpen ? "open" : "closed"}
                className="flex"
            >
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-1 items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180 hover:no-underline py-2"
                    data-state={isOpen ? "open" : "closed"}
                >
                    <span className="text-sm text-slateGray">Show details</span>
                    <svg
                        className="h-4 w-4 transition-transform"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </h3>

            {/* Content */}
            <div
                data-state={isOpen ? "open" : "closed"}
                className={`overflow-hidden text-sm transition-all ${isOpen
                    ? "animate-accordion-down"
                    : "animate-accordion-up"
                    }`}
            // style={{
            //     // '--radix-accordion-content-height': '263px',
            //     '--radix-accordion-content-width': '736px',
            // }}
            >
                {isOpen && (
                    <div className="pb-4 pt-0">
                        <div className="pt-4" style={{ opacity: 1, transform: 'none' }}>
                            <p className="mb-4">
                                Led the development of modern, responsive websites and documentation platforms,
                                improving user engagement through actionable data insights. Enhanced website
                                performance by 30% through API optimizations and server-side migrations. Developed
                                an integrations platform by leveraging dynamic data retrieval, ensuring efficient
                                frontend responsiveness and backend handling. Applied SEO techniques, boosting
                                optimization by approximately 78%. Built a payment gateway with Web3 capabilities,
                                enabling secure token transactions and seamless user interactions. Collaborated
                                with UI/UX teams to deliver pixel-perfect designs and reusable components.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2 py-1 text-xs bg-white border text-[13px] border-[#EAECF0] rounded-[8px] text-steelGray"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceCard;