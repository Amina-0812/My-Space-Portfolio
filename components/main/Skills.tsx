import {  Frontend_skill, Skill_data } from "@/constants"; //importing the constants for skill data
  import React from "react";
  //here we are importing the sub-components used within the Skills component
  import SkillDataProvider from "../sub/SkillDataProvider";
  import SkillText from "../sub/SkillText";
  

  const Skills = () => {
    return (
    //section for displaying skills with a specified scale transform and padding
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
        style={{ transform: "scale(0.9" }} //we are adjusting the scale of the section for visual effect
      >
        {/*SkillText component displays a header or introductory text about skills*/}
        <SkillText />
        {/*this container is for displaying a set of skill images/icons with responsive wrap*/}
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {/*we are here mapping over the skill_data to generate SkillDataProvider components for each skill*/}
          {Skill_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        {/*this second container for additional skills, typically frontend specific skills*/}
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {/*we are here mapping over the Frontend_skill to render skill images similarly to the first set*/}
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
  
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto" //here we have full width, auto height to maintain aspect ratio
              preload="false" //advises the browser not to preload the entire video.
              playsInline //to ensure the video plays in the document's flow, not fullscreen
              loop //the video will loop continuously
              muted //the video is muted, important for autoplay on most browsers
              autoPlay //the video plays automatically upon loading
              src="/public_cards-video.webm"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;