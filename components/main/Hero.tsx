import React from "react";
//importing the HeroContent subcomponent, which will display specific content or animations within the hero section
import HeroContent from "../sub/HeroContent";

//defining here the Hero functional component
const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
        //the additional styling:
        //rotate-180: Rotates the video 180 degrees
        // absolute: Positions the video absolutely within its relative parent
        //top, left, and z-index: Ensures the video covers the entire container and is placed under other content
        //object-cover: Ensures the video covers the available space without preserving its aspect ratio
      >
        <source src="/public_blackhole.webm" type="video/webm" />
      </video>
      <HeroContent /> 
    </div>
  );
};

export default Hero;