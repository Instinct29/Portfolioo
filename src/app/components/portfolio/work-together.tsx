import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import aiImage from "../../../images/aiimage.webp"
import { motion } from 'framer-motion'

const WorkTogether = () => {
    const handleEmailClick = () => {
        window.location.href = "mailto:your@email.com?subject=Let's Work Together&body=Hi, I’d love to discuss a project with you!";
    };

    return (
        <div className='border relative rounded-[10px] overflow-hidden bg-white p-6 flex border-[#E8E8E8]'>
            <div className='flex gap-4 flex-col'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="..." fill="black" />
                </svg>

                <div className='flex flex-col gap-2'>
                    <span className='text-gunmetal font-medium'>Let&apos;s Work Together?</span>
                    <p className='max-w-sm'>Now that you&apos;ve come this far, let&apos;s work
                        together on your next project?
                    </p>
                </div>
                <div className='flex gap-2 items-center'>
                    <Button
                        className="bg-[#F9FAFB] focus:outline-none border text-[13px] border-[#EAECF0] rounded-[8px] text-steelGray "
                        variant="outline"
                        size="sm"
                        onClick={handleEmailClick}
                    >
                        Get In Touch
                    </Button>
                    <div className=' flex gap-2 items-center'>
                        <span>Or Press</span>
                        <span className="bg-[#F9FAFB] text-center py-1 px-2 border text-[13px] text-sm border-[#EAECF0] rounded-[8px] text-steelGray ">
                            ctrl + s
                        </span>
                    </div>
                </div>
            </div>
            <motion.div
                className='mt-[5rem] right-0 -top-[28px] absolute sm:block hidden'
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 150 }}
            >
                <Image src={aiImage} alt='image-ai' className='rounded-l-md cursor-pointer' width={180} height={300} />
            </motion.div>
        </div>
    )
}

export default WorkTogether;
