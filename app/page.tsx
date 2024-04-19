import SecurityComponent from "@/components/main/SecurityComponent";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    //this is the main container for the entire page.
    //we got the full height and width to utilize the screen space
    <main className="h-full w-full">
      {/*here's the flexible column container*/}
       <div className="flex flex-col gap-20">
        {/*the hero section that display the primary introductory content for the website*/}
        <Hero />
        {/*the skills section that showcase a list of my skills I studied*/}
        <Skills />
        {/*the security practices used*/}
         <SecurityComponent />
         {/*and the project section that display some of my school's projects*/}
        <Projects /> 
      </div>
    </main>
  );
}
