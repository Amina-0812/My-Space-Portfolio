import Image from "next/image";
import React from "react";

//this a typescript interface to type-check the props received by the component
interface Props {
  src: string; //this is the URL of the image to display
  title: string; //project's title as a string
  description: string; //project's description as a string
}

//and here we have the ProjectCard component defined with destructured props
const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      {/*the Next.js Image component, that uses props passed to the component*/}
      <Image
        src={src} 
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;