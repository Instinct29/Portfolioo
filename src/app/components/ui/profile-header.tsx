import Image from "next/image";
import { Download } from "lucide-react";
import Profile from "../../../images/profile.jpg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProfileHeaderProps {
    professions?: string[];
    cycleDelay?: number;
}

export function ProfileHeader({
    professions = ["Senior Software Engineer", "Blockchain and AI Enthusiast", "Cooking & Baking"],
    cycleDelay = 5000
}: ProfileHeaderProps) {
    const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovering) {
                setCurrentProfessionIndex(prev => (prev + 1) % professions.length);
            }
        }, cycleDelay);

        return () => clearInterval(interval);
    }, [professions, cycleDelay, isHovering]);

    const handleDownload = () => {
        setIsDownloading(true);
        setTimeout(() => {
            setIsDownloading(false);
            const link = document.createElement("a");
            link.href = "/resume.pdf";
            link.download = "Manthan_Gour_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 1500);
    };

    return (
        <div className="flex justify-between items-start sm:items-center mb-8">
            <div
                className="flex items-center gap-3 relative cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                <div className="relative">
                    <Image
                        src={Profile}
                        alt="Profile"
                        width={60}
                        height={60}
                        className="rounded-full transition-all duration-300"
                    />
                    <AnimatePresence>
                        {isHovering && (
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute top-[1.5rem] right-[1.5rem] text-xl"
                            >
                                ✌️
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex flex-col items-start overflow-hidden w-[170px] h-12">
                    <div className="text-base font-medium text-gunmetal">Manthan Gour</div>
                    <div className="relative h-6 w-full flex items-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isHovering ? "hoverText" : currentProfessionIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="absolute w-full text-xs font-light text-steelGray text-left"
                            >
                                {isHovering ? "Click to see my full bio" : professions[currentProfessionIndex]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-end sm:items-center gap-1 sm:gap-4">
                <div className="flex gap-2 items-center justify-center">
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="7" height="7" rx="3.5" fill="#09B858" />
                    </svg>
                    <span className="text-steelGray text-[13px]">Available for Work</span>
                </div>

                <motion.button
                    onClick={handleDownload}
                    className={`bg-[#F9FAFB] border text-[13px] border-[#EAECF0] rounded-[8px] text-steelGray ${isDownloading && "gap-2"} px-4 py-2 flex items-center`}
                    initial={{ scale: 1 }}
                    transition={{ duration: 0.2, repeat: isDownloading ? Infinity : 0, repeatType: "reverse" }}
                >
                    {isDownloading ? (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                            ⏳
                        </motion.div>
                    ) : (
                        <Download className="w-4 h-4 mr-2" />
                    )}
                    Resume
                </motion.button>
            </div>
        </div>
    );
}
