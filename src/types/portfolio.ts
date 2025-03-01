import { StaticImageData } from "next/image";

export interface ExperienceItemProps {
    title: string;
    company: string;
    iconBackground: string;
    iconInnerBackground: string;
  }
  
  export interface ProjectCardProps {
    title: string;
    description: string;
    image: StaticImageData;
  }
  
  export interface EducationItemProps {
    degree: string;
    institution: string;
    description: string;
  }
  
  export interface ToolItemProps {
    name: string;
    description: string;
    image: string
  }
  
  export interface AwardItemProps {
    award: string;
    type: string;
    year: string;
  }

  export interface TimelineItemProps {
    company: string;
    role: string;
    duration: string;
    location: string;
    achievements: string[];
  }