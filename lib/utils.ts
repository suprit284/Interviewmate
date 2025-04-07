import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { interviewCovers, mappings } from "@/constants";

const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const normalizeTechName = (tech: string) => {
  const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
  return mappings[key as keyof typeof mappings];
};

export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`;
};

export const getTechLogos = async (techArray: string[]) => {
  const logoURLs = techArray.map((tech) => {
    const normalized = normalizeTechName(tech);
    return {
      tech,
      url: `${techIconBaseURL}/${normalized}/${normalized}-original.svg`,
    };
  });

  return logoURLs; // <---- Add this!
};
