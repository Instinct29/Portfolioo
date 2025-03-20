// src/EducationCard.jsx
import React from 'react';

const EducationCard1 = () => {
    return (
        <div
            style={{
                backgroundColor: "#ffff",
                border: "1px solid rgb(234, 236, 240)",
            }}
            className="rounded-xl p-[20px]"
        >
            <div className="text-xs mb-1 text-slateGray">
                Bachelor&lsquo;s in Electronics and Communication Engineering
            </div>
            <h3 className="font-medium mb-1 text-gunmetal">
                Guru Nanak Dev Engineering College , Ludhaina
            </h3>
            <p className="leading-[22px]">
                I developed a strong foundation in electronics and communication engineering, focusing on problem-solving, innovative system design, and technical project execution. Strengthened skills through hands-on projects and real-world engineering challenges.
            </p>
        </div>
    );
};

export default EducationCard1;
