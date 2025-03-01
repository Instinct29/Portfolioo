import React from "react";
interface PageFooterProps {
    creator: string;
}
const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="p-[10px] border border-[#EAECF0] bg-offWhite rounded-lg block">
        {children}
    </a>
);
export function PageFooter({ creator }: PageFooterProps) {
    return (
        <div className="flex justify-between items-center pt-8 border-t">
            <div className="flex gap-4">
                <SocialIcon href="mailto:jasveer3101998@gmail.com">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.125 5.13895L8.756 10.107C9.181 10.482 9.819 10.482 10.244 10.107L15.875 5.13895M16.625 14.45L11.375 9.94995M7.625 9.94995L2.375 14.45M4.25 15.95H14.75C15.993 15.95 17 14.943 17 13.7V6.19995C17 4.95695 15.993 3.94995 14.75 3.94995H4.25C3.007 3.94995 2 4.95695 2 6.19995V13.7C2 14.943 3.007 15.95 4.25 15.95Z" stroke="#98A1B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/jasveer-singh-09857016a/">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 9.26995V13.7M8.658 13.7V10.451C8.658 10.399 8.658 10.373 8.659 10.351C8.682 9.76395 9.152 9.29395 9.738 9.27095C9.761 9.26995 9.787 9.26995 9.839 9.26995C9.944 9.26995 9.996 9.26995 10.04 9.27195C11.213 9.31795 12.154 10.258 12.2 11.432C12.202 11.476 12.202 11.528 12.202 11.633V13.7M5.75 7.11295H5.757M7.55 16.7H11.45C13.13 16.7 13.97 16.7 14.612 16.373C15.176 16.085 15.635 15.626 15.923 15.062C16.25 14.42 16.25 13.58 16.25 11.9V7.99995C16.25 6.31995 16.25 5.47995 15.923 4.83795C15.635 4.27395 15.176 3.81495 14.612 3.52695C13.97 3.19995 13.13 3.19995 11.45 3.19995H7.55C5.87 3.19995 5.03 3.19995 4.388 3.52695C3.824 3.81495 3.365 4.27395 3.077 4.83795C2.75 5.47995 2.75 6.31995 2.75 7.99995V11.9C2.75 13.58 2.75 14.42 3.077 15.062C3.365 15.626 3.824 16.085 4.388 16.373C5.03 16.7 5.87 16.7 7.55 16.7Z" stroke="#98A1B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </SocialIcon>
                <SocialIcon href="https://twitter.com/">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.805 5.01304C16.956 4.69404 17.031 4.53504 16.998 4.40404C16.97 4.29204 16.887 4.19604 16.781 4.15104C16.657 4.09804 16.462 4.15604 16.073 4.27204C15.676 4.39004 15.277 4.49004 14.87 4.61004C13.971 3.59704 12.638 3.54104 11.357 4.02004C10.076 4.49804 9.237 5.66904 9.256 7.01104V7.81204C6.975 7.87004 4.912 6.96804 3.431 5.34104C3.216 5.10504 3.108 4.98704 2.992 4.96104C2.893 4.93904 2.783 4.96104 2.699 5.01804C2.601 5.08604 2.554 5.21304 2.46 5.46704C1.814 7.21804 1.017 11.226 6.048 13.415C5.295 13.915 4.544 14.334 3.754 14.618C2.919 14.919 2.502 15.069 2.434 15.199C2.371 15.321 2.373 15.438 2.441 15.557C2.513 15.685 2.872 15.799 3.59 16.027C5.534 16.645 7.506 16.746 9.283 16.231C12.154 15.398 14.514 13.25 15.42 10.033C15.69 9.05504 15.824 8.04404 15.818 7.02904C15.818 6.89404 16.37 5.93104 16.805 5.01304Z" stroke="#98A1B2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </SocialIcon>
            </div>
            <div className="text-sm text-steelGray">Made by {creator}</div>
        </div>
    );
}